const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "upload"),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});

module.exports = multer({ storage });