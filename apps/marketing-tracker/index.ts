import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import useragent from 'express-useragent';
import tracker from './routes/tracker';

dotenv.config();

const port = process.env.PORT;

const app = express();

// For getting the IP address
app.set('trust proxy', true);

app.use(helmet());
app.use(cors({ origin: '*' }));
app.use(useragent.express());

// Routes
app.use(tracker);

app.listen(port, () => {
  console.log('Marketing tracker listening on port: ', port);
});
