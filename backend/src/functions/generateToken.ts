const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

export default function generateAccessToken(username: string) {
  return jwt.sign(username, process.env.TOKEN_SECRET, {expiresIn: "1800s"});
}
