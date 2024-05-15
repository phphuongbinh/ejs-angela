import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thurday",
  "Friday",
  "Saturday",
];

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const today = new Date();
  const dayOrder = today.getDay();
  let dayType = "a weekday";
  let advice = "it's time to work hard";

  if (dayOrder == 0 || dayOrder == 6) {
    dayType = "a weekend";
    advice = "it's time to play something";
  }
  res.render("index.ejs", {
    dayType,
    advice,
  });
});

app.listen(3000, () => {
  console.log(`Listening on port 3000}`);
});
