var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const { NodeClient } = require('ciam-node-sdk'); // node-sdk

const ciam = new NodeClient({
  clientId: 'NjczNGNlMDUxZTY5NGQ5NmE2M2EyMTAyYTk0NWY1ZGI',
  userDomain: 'https://shingao.test.tencentciam.com',
  redirectUri:'https://express.tencentciam.com/callback',
  logoutRedirectUrl: 'https://express.tencentciam.com/',
  scopes: ['openid'],
  protocol: 'OIDC_PKCE',
});

const session = require('express-session');
var indexRouter = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'a very long random string',
  resave: true,
  saveUninitialized: false
}));

app.use('/', indexRouter);
// 登录CIAM
app.get('/login', async (req, res) => {
  const url = await ciam.generateAuthUrl();
  res.redirect(url);
})
// 处理redirect回调
app.get('/callback', async (req, res) => {
  const { code } = req.query;
  const result = await ciam.fetchToken(code);
  const { access_token, id_token } = result;
  const userInfo = await ciam.getUser();
  req.session.user = { ...userInfo, userInfo };
  res.redirect('/');
})
// 退出CIAM
app.get('/logout', async (req, res) => {
  if (!req.session.user) {
    res.redirect('/');
  }
  const url = await ciam.logout();
  req.session.destroy();
  res.redirect(url);
})
// 登录保护 查看用户信息
app.get('/userinfo', async (req, res) => {
  if (!req.session.user) {
    return res.redirect('/login')
  }
  res.send(JSON.stringify(req.session.user, null, 4))
})
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
