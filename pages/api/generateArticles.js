import { FinancialArticleGenerator } from '../../utils/FinancialArticleGenerator';
import { createArticleFile } from '../../utils/github';
import { rateLimiter } from '../../utils/rateLimit';
import nc from 'next-connect';

// Create handler with next-connect to enable middleware
const handler = nc({
  onError: (err, req, res) => {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong!' });
  },
  onNoMatch: (req, res) => {
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  },
});

// Apply rate limiting middleware
handler.use(rateLimiter);

// Handle POST requests
handler.post(async (req, res) => {
  const generator = new FinancialArticleGenerator();
  const categories = ['stock_market', 'investment', 'financial_planning'];

  try {
    const results = await Promise.all(
      categories.map(category => {
        const article = generator.generateArticle(category);
        return createArticleFile(article.title, article.content, category);
      })
    );

    res.status(200).json({ 
      message: 'Articles generated successfully',
      files: results,
      remainingRequests: res.getHeader('X-RateLimit-Remaining')
    });
  } catch (error) {
    console.error('Error generating articles:', error);
    res.status(500).json({ error: 'Failed to generate articles' });
  }
});

export default handler;