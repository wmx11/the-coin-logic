import { Router } from 'express';
import path from 'path';

const router = Router();

router.get('/output.css', async (req, res) => {
  try {
    return res.sendFile(path.resolve(process.cwd(), 'apps', 'marketing-tracker', 'output.css'));
  } catch (error) {
    return res.status(500).json({ message: 'There has been an issue handling your request.' });
  }
});

router.get('/', async (req, res) => {
  try {
    return res.sendFile(path.resolve(process.cwd(), 'apps', 'marketing-tracker', 'index.html'));
  } catch (error) {
    return res.status(500).json({ message: 'There has been an issue handling your request.' });
  }
});

export default router;
