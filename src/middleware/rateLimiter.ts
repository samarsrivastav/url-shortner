import rateLimit from 'express-rate-limit';

export const rateLimiter = rateLimit({
    windowMs: 60 * 1,
    max: 100,
    message: "Too many requests, please try again later.",
    standardHeaders: true, 
    legacyHeaders: false, 
    keyGenerator: (req) => {
        return req.headers['x-forwarded-for'] as string 
            || req.socket.remoteAddress 
            || '127.0.0.1';
    }
});
