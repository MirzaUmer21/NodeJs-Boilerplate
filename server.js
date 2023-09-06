const express = require('express');
const connetDB = require('./database');
const { PORT } = require('./config');
const router = require('./routes');
const errorBoundary = require('./middleware/errorHandler');
const app = express();
app.use(express.json());

app.use(router);
connetDB();
app.use(errorBoundary);
app.listen(PORT, console.log(`App is running on port ${PORT}`));
