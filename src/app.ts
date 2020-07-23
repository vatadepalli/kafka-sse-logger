require('es6-promise').polyfill();
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Routing
const echoRoutes = require("./routes/echo");
const loggerRoutes = require("./routes/logger");
app.use('/echo', echoRoutes);
app.use('/logger', loggerRoutes);

let port = 7000;
app.listen(port, () => console.log(`Server listening on port ${port}!`));