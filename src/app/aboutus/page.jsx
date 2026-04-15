import React from 'react';
import Link from "next/link";
import Footer from '@/components/Footer';

const AboutUs = () => {
  return (
<div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 mx-4 my-2">
  {/* Hero Section */}
  <div className="w-full bg-gradient-to-r from-blue-700 to-blue-900 py-12 px-2">
    <div className="max-w-4xl mx-auto text-center text-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-2">About FinWorld</h1>
      <p className="text-lg md:text-xl font-light">Your trusted partner in holistic wealth management since 2010</p>
    </div>
  </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-900">Our Journey</h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Founded in 2010, <span className="font-bold text-blue-800">FinWorld</span> has grown from a boutique advisory firm to one of India's leading wealth management companies. Our journey began with a simple vision: to democratize access to sophisticated financial planning and make wealth management accessible to everyone, not just the ultra-wealthy.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto mt-6">
            Over the past decade, we've helped thousands of clients navigate complex financial landscapes, from market volatility to significant life transitions, always maintaining our commitment to personalized service and fiduciary responsibility.
          </p>
        </div>

        {/* Vision Section with Image */}
        <div className="md:flex md:items-center md:justify-between mb-24">
          <div className="md:w-1/2 md:pr-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Our Vision</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At FinWorld, we envision a world where financial freedom is attainable for everyone. We believe that with the right guidance, tools, and education, every individual can achieve financial security and build lasting wealth.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our inclusive approach recognizes that each person's financial journey is unique. Whether you're just starting to save, planning for retirement, or managing substantial wealth, we provide tailored solutions that evolve with your changing needs and circumstances.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We see wealth not just as numbers in an account, but as the foundation for living life on your terms and creating the legacy you desire.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img 
              src="/images/aboutus/path_to_vision_image.jpeg" 
              alt="Our Vision" 
              className="rounded-xl shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Mission Section with Image on the Opposite Side */}
        <div className="md:flex md:items-center md:justify-between mb-24 md:flex-row-reverse">
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our mission is to empower individuals and families to achieve financial well-being through education, personalized planning, and disciplined investment strategies. We are committed to serving as trusted advisors who put your interests first.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We accomplish this by:
            </p>
            <ul className="list-disc pl-6 mb-6 text-lg text-gray-700 leading-relaxed">
              <li className="mb-3">Providing comprehensive financial planning that addresses all aspects of your financial life</li>
              <li className="mb-3">Creating investment strategies aligned with your goals, values, and risk tolerance</li>
              <li className="mb-3">Delivering ongoing guidance and support through market changes and life transitions</li>
              <li className="mb-3">Maintaining transparency in all our recommendations and fee structures</li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed">
              We measure our success not by the volume of assets we manage, but by how well we help our clients achieve their most important goals.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img 
              src="/images/aboutus/path_to_mission_image.jpeg" 
              alt="Our Mission" 
              className="rounded-xl shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-blue-900">Our Core Values</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-800">Integrity</h3>
              <p className="text-gray-700">We act with unwavering honesty and transparency in all our client relationships. Our fiduciary duty means your interests always come first.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-800">Innovation</h3>
              <p className="text-gray-700">We continuously evolve our strategies and leverage cutting-edge technology to provide you with the most effective wealth management solutions available.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-800">Accessibility</h3>
              <p className="text-gray-700">We believe quality financial guidance should be available to everyone. Our services are designed to be approachable and understandable at every wealth level.</p>
            </div>
          </div>
        </div>

        {/* What Makes Us Different Section */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-blue-900 text-center">What Makes Us Different</h2>

          {/* Differentiators with Zigzag Layout */}
          <div className="space-y-20">
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:w-1/2 md:pr-12">
                <h3 className="text-2xl font-bold mb-4 text-blue-800">1. Holistic Financial Approach</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Unlike many wealth management firms that focus solely on investments, we take a comprehensive approach that integrates all aspects of your financial life. From tax planning to estate strategies, insurance needs to debt management—we consider the complete picture.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Our strategies address both short-term needs and long-term goals, ensuring that every financial decision you make contributes to your overall well-being.
                </p>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0">
                <img 
                  src="/images/aboutus/path_to_financial_strategies_image.jpeg" 
                  alt="Personalized Financial Strategies" 
                  className="rounded-xl shadow-xl w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="md:flex md:items-center md:justify-between md:flex-row-reverse">
              <div className="md:w-1/2 md:pl-12">
                <h3 className="text-2xl font-bold mb-4 text-blue-800">2. Cutting-Edge Technology</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We harness the power of advanced financial technology to provide you with real-time insights, sophisticated analysis, and streamlined wealth management. Our proprietary platform gives you a complete view of your financial situation, while our advisors leverage data-driven tools to optimize your strategy.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  This powerful combination of human expertise and technological capability allows us to respond quickly to market changes and identify opportunities others might miss.
                </p>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0">
                <img 
                  src="/images/aboutus/path_to_technology_image.jpeg" 
                  alt="Cutting-Edge Technology" 
                  className="rounded-xl shadow-xl w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="md:flex md:items-center md:justify-between">
              <div className="md:w-1/2 md:pr-12">
                <h3 className="text-2xl font-bold mb-4 text-blue-800">3. Client Education Focus</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We believe informed clients make better financial decisions. Rather than simply telling you what to do, we take the time to explain the reasoning behind our recommendations and help you understand the principles of sound financial planning.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Through our regular workshops, personalized coaching sessions, and educational resources, we empower you to take an active role in your financial journey and develop confidence in your financial decisions.
                </p>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0">
                <img 
                  src="/images/aboutus/path_to_financial_strategies_image.jpeg" 
                  alt="Client Education" 
                  className="rounded-xl shadow-xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Our Expertise Section */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-900 text-center">Our Expertise</h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto text-center mb-12">
            With decades of combined experience in financial markets and wealth management, our team brings specialized knowledge across multiple domains.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-800">Comprehensive Financial Planning</h3>
              <p className="text-gray-700 mb-4">
                We develop personalized roadmaps that address all aspects of your financial life, from cash flow management to retirement planning.
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li className="mb-2">Goal-based financial strategies</li>
                <li className="mb-2">Life transition planning</li>
                <li className="mb-2">Budget optimization</li>
                <li>Financial independence planning</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-800">Investment Management</h3>
              <p className="text-gray-700 mb-4">
                Our disciplined investment approach focuses on long-term growth while managing risk through diversification and strategic asset allocation.
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li className="mb-2">Custom portfolio design</li>
                <li className="mb-2">Risk-adjusted return optimization</li>
                <li className="mb-2">Alternative investment strategies</li>
                <li>Sustainable and ESG investing</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-800">Tax Optimization</h3>
              <p className="text-gray-700 mb-4">
                We implement proactive tax strategies to help minimize your tax burden and maximize after-tax returns on your investments.
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li className="mb-2">Tax-efficient investment selection</li>
                <li className="mb-2">Income timing strategies</li>
                <li className="mb-2">Tax-loss harvesting</li>
                <li>Charitable giving optimization</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-800">Estate and Legacy Planning</h3>
              <p className="text-gray-700 mb-4">
                We help you create plans that protect your assets and ensure your legacy is preserved according to your wishes.
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li className="mb-2">Wealth transfer strategies</li>
                <li className="mb-2">Estate tax minimization</li>
                <li className="mb-2">Family governance frameworks</li>
                <li>Charitable foundation planning</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Team Section */}
        {/* <div className="mb-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-900">Our Leadership Team</h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-12">
            Meet the experienced professionals who guide our firm's vision and ensure we deliver exceptional service to every client.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                <img 
                  src="/api/placeholder/200/200" 
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1 text-blue-800">Rajiv Mehta</h3>
              <p className="text-blue-600 mb-4">Founder & CEO</p>
              <p className="text-gray-700 mb-4">
                With over 25 years of experience in financial services, Rajiv founded FinWorld with a vision to transform wealth management in India.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                <img 
                  src="/api/placeholder/200/200" 
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1 text-blue-800">Priya Sharma</h3>
              <p className="text-blue-600 mb-4">Chief Investment Officer</p>
              <p className="text-gray-700 mb-4">
                Priya brings deep expertise in global markets and alternative investments, having previously managed portfolios at leading international firms.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                <img 
                  src="/api/placeholder/200/200" 
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1 text-blue-800">Amir Khan</h3>
              <p className="text-blue-600 mb-4">Head of Financial Planning</p>
              <p className="text-gray-700 mb-4">
                A Certified Financial Planner with expertise in retirement strategies and estate planning for high-net-worth families.
              </p>
            </div>
          </div>
        </div> */}

        {/* Testimonials Section */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-blue-900 text-center">What Our Clients Say</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md relative">
              <svg className="h-12 w-12 text-blue-200 absolute top-6 left-6 opacity-50" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <div className="pl-6">
                <p className="text-gray-700 mb-4 italic relative z-10">
                  "FinWorld transformed my approach to financial planning. Their team took the time to understand my goals and created a strategy that has given me confidence about my retirement. I appreciate their proactive communication and educational approach."
                </p>
                <p className="font-bold text-blue-800">Sunita Patel</p>
                {/* <p className="text-gray-600">Client since 2015</p> */}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md relative">
              <svg className="h-12 w-12 text-blue-200 absolute top-6 left-6 opacity-50" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <div className="pl-6">
                <p className="text-gray-700 mb-4 italic relative z-10">
                  "As a business owner, I needed a wealth management firm that could handle both my personal and business financial needs. FinWorld has exceeded my expectations, creating integrated strategies that have helped both my company and family thrive."
                </p>
                <p className="font-bold text-blue-800">Vikram Malhotra</p>
                {/* <p className="text-gray-600">Client since 2018</p> */}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 p-12 rounded-xl text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Take Control of Your Financial Future?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let us show you how FinWorld's holistic approach can help you achieve your financial goals with confidence and clarity.
          </p>
          <Link href="/contactus">
            <button className="px-8 py-4 bg-white text-blue-900 text-lg font-bold rounded-lg hover:bg-blue-100 transition-all shadow-lg">
              Schedule a Consultation
            </button>
          </Link>
        </div>
      </div>
      
      </div>
  );
};

export default AboutUs;