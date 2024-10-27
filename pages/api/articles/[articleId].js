// src/pages/api/articles/[articleId].js
import axios from 'axios';

export default async function handler(req, res) {
  const { articleId } = req.query;
  const githubUsername = 'skamalkumar';
  const repo = 'finworldarticles';
  const password = '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';

  const url = `https://api.github.com/repos/${githubUsername}/${repo}/contents/articles/${articleId}.md`;

  try {
    const response = await axios.get(url, {
      auth: {
        username: githubUsername,
        password,
      },
    });

    const content = Buffer.from(response.data.content, 'base64').toString('utf-8');
    res.status(200).json({ content });
  } catch (error) {
    console.error('Error fetching article:', error);
    res.status(500).json({ error: 'Error fetching article' });
  }
}
