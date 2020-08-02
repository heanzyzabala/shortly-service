const mongoose = require('mongoose');

const { Schema } = mongoose;
const { DB_HOST, DB_PORT, DB_NAME } = process.env;
mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true });

const schema = new Schema({
    code: String,
    url: String,
});

module.exports = mongoose.model('Url', schema);
