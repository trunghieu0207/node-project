import express from "express";
import * as bodyParser from "body-parser";
import * as path from "path";
import { assets } from "@shared/assets";

const app = express();
const router = express.Router();

app.set('view engine', 'ejs')
app.set('views', 'app/views')

app.locals.xyz = (dirname: string) => {
    return assets(dirname);
}

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

router.get(
    "/",
    async (req: express.Request, res: express.Response): Promise<void> => {
        res.render("pages/index");
    }
);

app.use("/", router);

app.listen(8888, () => {
    console.log("listening on port 8888");
});

export default app;
