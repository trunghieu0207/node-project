import express from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import * as dotenv from 'dotenv';
import session from 'express-session';
import { assets } from '@shared/assets';
import { Admin, Index } from '@http/routes';
import { expressFlashMessage } from './app/shared/session';
import { v4 as uuid_v4 } from 'uuid';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'app/views'));

app.use(
    session({
        genid: function () {
            return uuid_v4();
        },
        secret: 'secret-key',
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
            // secure: true, // becareful set this option, check here: https://www.npmjs.com/package/express-session#cookiesecure. In local, if you set this to true, you won't receive flash as you are using `http` in local, but http is not secure
        }
    })
);

app.use(
    expressFlashMessage({
        sessionKeyName: 'express-flash-message'
    })
);

app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', Index);
app.use('/admin', Admin);

app.locals.assets = assets;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

export default app;
