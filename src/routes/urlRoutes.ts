import { Router } from 'express';
import { shortenUrl, redirectUrl, getStats } from "../controller/urlController" 

const router = Router();

router.post('/shorten', shortenUrl);
router.get('/:shortId', redirectUrl);
router.get('/stats/:shortId', getStats);

export default router;
