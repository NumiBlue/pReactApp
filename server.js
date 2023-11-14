//sets up server
const mongoose = require ('mongoose');
const express = require ('express');
const app = express ();
const port = process.env.PORT || 3001;

//brings in MongoDB
mongoose.connect(
    'mongodb://localhost/portfolio', {
    //use new parser, more user-friendly
    useNewUrlParser: true,
    //use new connection management engine
    useUnifiedTopology: true
    });

    //calls port
    app.listen( PORT, () => {
        console.log('This Server is running on ${PORT}');
    });