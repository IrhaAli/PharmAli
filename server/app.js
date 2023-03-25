const express = require('express');
const path = require('path');
const logger = require('morgan');
const db = require('./db/index');
var cookieParser = require('cookie-parser')
const twilio = require('twilio'); 

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/user');
const blogsRouter = require('./routes/blogs');
const commentsRouter = require('./routes/comments');
const articlesRouter = require('./routes/articles');
const journalRouter = require('./routes/journal');
const drugsRouter = require('./routes/drugs');
const savedMedicationsRouter = require('./routes/saved_medications');
const categoriesRouter = require('./routes/categories');

//twilio requirements -- Texting API 
const accountSid = 'AC9a2ab2f10b69c7d57f0f395cdd1daaab';
const authToken = '43cefe626dfc06e525ea169c26f2cec7'; 
const client = new twilio(accountSid, authToken);

const app = express();

const secretKey = 'foobarbaz12345';
app.use(cookieParser(secretKey));
const cookieParams = {
  httpOnly: true,
  signed: true,
};

app.set("view engine", "ejs");
app.set("trust proxy", 1);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user', usersRouter(db, cookieParams));
app.use('/blogs', blogsRouter(db));
app.use('/comments', commentsRouter(db));
app.use('/articles', articlesRouter(db));
app.use('/journal', journalRouter(db));
app.use('/drugs', drugsRouter(db));
app.use('/favourite', savedMedicationsRouter(db));
app.use('/categories', categoriesRouter(db));

//Twilio 
app.get('/send-text', (req, res) => {
  //_GET Variables
  const { recipient, textmessage } = req.query;
  //Send Text
  client.messages.create({
      body: textmessage,
      to: recipient,  // Text this number
      from: '+14406893431' // From a valid Twilio number
  }).then((message) => console.log(message.body));
})

module.exports = app;