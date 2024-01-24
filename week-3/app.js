const express = require("express");
const app = express();

require("dotenv").config();
const cookieParser = require("cookie-parser");

// middleware
app.use(express.static("public"));
app.use(cookieParser(process.env.SECRET_COOKIE_KEY));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/sum", (req, res) => {
  res.sendFile(__dirname + "/public/sum/sum.html");
});

app.get("/getData", (req, res) => {
  // 要注意 query sting 拿到的 value 會是 String
  const { number } = req.query;
  let html;
  const redirect = `<a href="/sum"><button>redirect</button></a>`;
  let sum = 0;

  if (!number) {
    html = `<h2>Lack of Parameter<h2>`;
    return res.send(html + redirect);
  }
  if (isNaN(number)) {
    html = `<h2>Wrong Parameter</h2>`;
    return res.send(html + redirect);
  }
  if (!Number.isInteger(Number(number))) {
    html = `<h2>Must be an Integer</h2>`;
    return res.send(html + redirect);
  }
  if (number < 1) {
    html = `<h2>Must be a Positive Integer</h2>`;
    return res.send(html + redirect);
  }

  for (i = 1; i <= number; i++) {
    sum += i;
  }
  html = `<h2>The sum of numbers is ${sum}</h2>`;
  res.send(html + redirect);
});

app.get("/myName", (req, res) => {
  const { name } = req.signedCookies;

  if (!name) {
    return res.sendFile(__dirname + "/public/myName/myName.html");
  }

  const html = `<h1>Your name is ${name}</h1>`;
  const home = `<a href="/"><button>home</button></a>`;
  res.send(html + home);
});

app.get("/trackName", (req, res) => {
  const { name } = req.query;
  let html;
  const redirect = `<a href="/myName"><button>redirect</button></a>`;

  if (!name) {
    html = `<h2>You must provide your name</h2>`;
    return res.send(html + redirect);
  }

  res.cookie("name", name, {
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
    secure: process.env.NODE_ENV === "production",
    signed: true,
  });

  html = `<h2>Cookie has been set</h2>`;
  res.send(html + redirect);
});

app.all("*", (req, res) => {
  res.status(404).send("page not found");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
