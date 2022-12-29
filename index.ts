import express from "express";
import * as bodyParser from "body-parser";
import * as path from "path";
import * as dotenv from 'dotenv'
import { assets } from "@shared/assets";
import { Index } from '@routes/route';

dotenv.config()

const app = express();
const port = process.env.PORT

app.set('view engine', 'ejs')
app.set('views', 'app/views')

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/", Index);

app.locals.assets = assets;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

export default app;
