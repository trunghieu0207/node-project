// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import express from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import * as dotenv from 'dotenv';
import { assets } from '@shared/assets';
import { Index } from '@http/routes';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'app/views'));

app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', Index);

app.locals.assets = assets;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

export default app;
