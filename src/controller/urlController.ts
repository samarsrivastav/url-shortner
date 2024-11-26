import { Request, Response } from 'express';
import shortid from 'shortid';
import Url from '../models/urlModel';
import { isValidUrl } from '../utils/validateUrl';

export const shortenUrl = async (req: Request, res: Response) => {
    const { originalUrl } = req.body;

    if (!isValidUrl(originalUrl)) {
        res.status(400).json({ message: 'Invalid URL format' });
        return 
    }

    try {
        const shortId = shortid.generate();
        const newUrl = await Url.create({ originalUrl, shortId });
        res.status(201).json({ shortUrl: `${req.protocol}://${req.get('host')}/${shortId}` });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

export const redirectUrl = async (req: Request, res: Response) => {
    const { shortId } = req.params;

    try {
        const url = await Url.findOneAndUpdate(
            { shortId },
            { $inc: { clicks: 1 }, lastAccessed: new Date() },
            { new: true }
        );

        if (!url) {
             res.status(404).json({ message: 'URL not found' });
             return
        }

        res.redirect(url.originalUrl);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

export const getStats = async (req: Request, res: Response) => {
    const { shortId } = req.params;

    try {
        const url = await Url.findOne({ shortId });

        if (!url) {
             res.status(404).json({ message: 'URL not found' });
             return
        }

        res.json(url);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};
