'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'

export default function FundsPage() {
  const [funds, setFunds] = useState([])
  const [navData, setNavData] = useState({})
  const [searchTerm, setSearchTerm] = useState('')
  const [fundType, setFundType] = useState('mutual') // 'mutual' or 'etf'
  const [batchSize, setBatchSize] = useState(10)

  // Fetch the full list of funds initially
  useEffect(() => {
    async function fetchFunds() {
      const response = await axios.get('https://api.mfapi.in/mf')
      setFunds(response.data)
    }
    fetchFunds()
  }, [])

  // Filter funds based on search term and fund type
  const filteredFunds = funds
    .filter(fund => 
      (fundType === 'mutual' ? !fund.schemeName.toLowerCase().includes('etf') : fund.schemeName.toLowerCase().includes('etf')) &&
      (fund.schemeCode.toString().includes(searchTerm) ||
       fund.schemeName.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => (parseFloat(navData[b.schemeCode]) || 0) - (parseFloat(navData[a.schemeCode]) || 0))

  // Fetch NAV data for only the filtered funds
  useEffect(() => {
    async function fetchNAVData() {
      const promises = filteredFunds.slice(0, batchSize).map(async (fund) => {
        try {
          const navResponse = await axios.get(`https://api.mfapi.in/mf/${fund.schemeCode}`)
          return { schemeCode: fund.schemeCode, nav: navResponse.data.data[0]?.nav || 'N/A' }
        } catch (error) {
          console.error(`Error fetching NAV for schemeCode ${fund.schemeCode}:`, error)
          return { schemeCode: fund.schemeCode, nav: 'N/A' }
        }
      })

      const results = await Promise.all(promises)
      const navDataMap = results.reduce((acc, item) => {
        acc[item.schemeCode] = item.nav
        return acc
      }, {})
      setNavData((prevNavData) => ({ ...prevNavData, ...navDataMap }))
    }

    if (filteredFunds.length > 0) fetchNAVData()
  }, [filteredFunds, batchSize])

  const handleFundTypeChange = (type) => {
    setFundType(type)
    setBatchSize(10) // Reset batch size on fund type change
    setNavData({}) // Clear NAV data to reload for the new category
  }

  const loadMoreFunds = () => {
    setBatchSize((prev) => prev + 10)
  }

  return (
    <div>
      <h1>Top {fundType === 'mutual' ? 'Mutual Funds' : 'ETFs'}</h1>
      <div>
        <button onClick={() => handleFundTypeChange('mutual')}>Best Mutual Funds</button>
        <button onClick={() => handleFundTypeChange('etf')}>Best ETFs</button>
      </div>
      <input
        type="text"
        placeholder="Search funds..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredFunds.slice(0, batchSize).map((fund, index) => (
          <li key={`${fund.schemeCode}-${index}`}>
            {fund.schemeName} - NAV: {navData[fund.schemeCode] || 'Loading...'}
          </li>
        ))}
      </ul>
      {batchSize < filteredFunds.length && (
        <button onClick={loadMoreFunds}>Load More</button>
      )}
    </div>
  )
}
