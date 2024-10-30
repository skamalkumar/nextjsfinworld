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

    const apiKey = "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";
    const model = "gpt-neo-125M";  // You can experiment with other models like gpt-neo-2.7B or opt-1.3b

    const response = await fetch(`https://api-inference.huggingface.co/models/${model}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        inputs: prompt,
        parameters: {
          max_new_tokens: 200,  // Increase as needed for longer content
          temperature: 0.7,     // Controls creativity of the output
          top_p: 0.9            // Controls diversity of the output
        }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error from Hugging Face:', errorText);
      return res.status(500).json({ message: 'Error generating content' });
    }

    const data = await response.json();
    const generatedContent = data[0]?.generated_text.trim();

    // Remove repetitive lines to improve output quality
    const uniqueContent = generatedContent.split('\n')
      .filter((line, index, self) => line && index === self.indexOf(line))
      .join('\n');

    return res.status(200).json({ content: uniqueContent });
  } catch (error) {
    console.error('Error in generate route:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
