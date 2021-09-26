const isAuth = (req, res, next) => {
  let today = new Date();
  let time = today.getHours();
  let day = today.getDay();
  // if ((time >= 9) & (time < 16) & (day > 0) & (day < 1)) {
  //   auth = true;
  // } else {
  //   auth = false;
  // }

  if ((time >= 9) & (time < 20) & (day >= 0) & (day < 2)) {
    console.log("authorised");
    next();
  } else {
    res.status(401).sendFile(__dirname.slice(0, -11) + "/public/error.html");
  }
};

module.exports = isAuth;
