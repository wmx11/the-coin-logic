import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import useragent from 'express-useragent';
import tracker from './routes/tracker';
import index from './routes/index';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const port = process.env.MARKETING_TRACKER_PORT || 2500;

const app = express();

// For getting the IP address
app.set('trust proxy', true);

app.use(helmet());
app.use(cors({ origin: '*' }));
app.use(useragent.express());

// Routes
app.use(index);
app.use(tracker);

app.listen(port, () => {
  console.log('Marketing tracker listening on port: ', port);
});
