import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import useragent from 'express-useragent';
import tracker from './routes/tracker';

const app = express();

// For getting the IP address
app.set('trust proxy', true);

app.use(helmet());
app.use(cors({ origin: '*' }));
app.use(useragent.express());

// Routes
app.use(tracker);

app.listen(2000, () => {
  console.log('Marketing tracker listening on port: ', 2000);
});
