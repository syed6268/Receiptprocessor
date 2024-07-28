const express = require('express');
const bodyParser = require('body-parser');
const receiptsRouter = require('./routes/receipts');

const app = express();
const PORT = 8080;

app.use(bodyParser.json());
app.use('/receipts', receiptsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
