// src/pages/api/articles/save.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { article } = req.body;
  
      if (!article) {
        return res.status(400).json({ success: false, message: 'Article data is required' });
      }
  
      const fileContent = JSON.stringify(article, null, 2);
      const fileName = `article-${Date.now()}.json`;
  
      const githubUsername = 'skamalkumar';
      const repo = 'finworldarticles';
      const password = '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'; // Avoid using plain text passwords in production
  
      try {
        const response = await fetch(`https://api.github.com/repos/${githubUsername}/${repo}/contents/${fileName}`, {
          method: 'PUT',
          headers: {
            'Authorization': `Basic ${Buffer.from(`${githubUsername}:${password}`).toString('base64')}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: `Add article ${fileName}`,
            content: Buffer.from(fileContent).toString('base64'),
          }),
        });
  
        if (!response.ok) {
          throw new Error('Failed to save article to GitHub');
        }
  
        res.status(200).json({ success: true, message: 'Article saved to GitHub' });
      } catch (error) {
        res.status(500).json({ success: false, error: error.message });
      }
    } else {
      res.status(405).json({ success: false, message: 'Method not allowed' });
    }
  }
  