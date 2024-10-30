import rateLimit from 'express-rate-limit';
import { getIP } from './helpers';

export const rateLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour window
  max: 5, // limit each IP to 5 requests per windowMs
  message: {
    error: 'Too many requests from this IP, please try again after an hour'
  },
  handler: (req, res) => {
    res.status(429).json({
      error: 'Too many requests from this IP, please try again after an hour',
      nextValidRequest: new Date(req.rateLimit.resetTime).toISOString()
    });
  },
  keyGenerator: (req) => {
    return getIP(req);
  },
  skip: (req) => {
    // Optional: Skip rate limiting for specific conditions
    return false;
  }
});