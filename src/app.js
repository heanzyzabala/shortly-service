require('dotenv').config()

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const routes = require('./routes')

const app = express();
app.use(morgan('short'));
app.use(express.json());
app.use(cors());
app.use(routes);
app.listen(process.env.PORT, () => console.log(`Listening to port ${process.env.PORT}`));
