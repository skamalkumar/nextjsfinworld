// src/pages/api/articles/list.js
import axios from 'axios';

export default async function handler(req, res) {
    const githubUsername = 'skamalkumar';
    const repo = 'finworldarticles';
    const password = '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';

  const url = `https://api.github.com/repos/${githubUsername}/${repo}/contents/articles`;

  try {
    const response = await axios.get(url, {
      auth: {
        username: githubUsername,
        password,
      },
    });

    const articles = response.data.map(file => ({
      name: file.name,
      path: file.path,
    }));

    res.status(200).json(articles);
  } catch (error) {
    console.error('Error fetching articles:', error);
    res.status(500).json({ error: 'Error fetching articles' });
  }
}
