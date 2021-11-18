if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');
const app = express();
const port = process.env.PORT || 1337;
const clubInfo = require('./clubinfo.js');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload({
    createParentPath: true
}));

app.locals.basedir = __dirname;

app.get('/', async (req, res) => {
    var clubInfos = await clubInfo.clubInfo();
    var viewmodel = {
        clubs: clubInfos
    };
    res.render('index', viewmodel);
});

app.listen(port, () => {
    console.log(`Listening at ${port}`)
})