const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

//bodyparser middleware
app.use(bodyParser.json());

//db config
const db = require('./config/keys').mongoURI;

//connesct ke mongoDB
mongoose
.connect(db, {useUnifiedTopology: true, useNewUrlParser: true })
.then(() => console.log('MongoDB Connected..'))
.catch(err => console.log('[Error]: ' + err));
//Use routes
app.use('/api/items', items);
 
    const port = process.env.PORT || 5000;

    app.listen(port, () => console.log(`Server started on port ${port}`)); 