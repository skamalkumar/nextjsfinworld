export default async function handler(req, res) {
    if (req.method !== 'POST') {
      res.setHeader('Allow', ['POST']);
      return res.status(405).json({ message: 'Method not allowed' });
    }
  
    try {
      const { prompt } = req.body;
      if (!prompt) {
        return res.status(400).json({ message: 'Prompt is required' });
      }
  
      // Replace this with your OpenAI API key
      const openAIKey = "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";
  
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${openAIKey}`
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: 'user', content: prompt }],
          max_tokens: 100
        })
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error from OpenAI:', errorText);
        return res.status(500).json({ message: 'Error generating content' });
      }
  
      const data = await response.json();
      const generatedContent = data.choices[0].message.content.trim(); // Updated for chat model
  
      return res.status(200).json({ content: generatedContent });
    } catch (error) {
      console.error('Error in generate route:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
  