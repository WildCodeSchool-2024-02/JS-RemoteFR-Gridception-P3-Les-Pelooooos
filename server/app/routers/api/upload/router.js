const multer = require("multer");
const express = require("express");

const router = express.Router();
const fs = require("fs");
const path = require("path");

const port = process.env.APP_PORT;

const storage = multer.diskStorage({
  destination(request, file, callback) {
    callback(null, path.join(__dirname, "../../../../public/tmp"));
  },
  filename(request, file, callback) {
    callback(null, "data.json");
  },
});

const upload = multer({ storage });

router.post("/", upload.single("file"), (request, res) => {
  fs.readFile(request.file.path, (err) => {
    if (err) {
      console.info("Erreur :", err);
      return res.status(500).json({ error: err });
    }

    return res.status(201).json({
      status: "success",
      filename: `http://localhost:${port}/files/${request.file.filename}`,
    });
  });
});

router.get("/:filename", (req, res) => {
  const filePath = path.join(
    __dirname,
    "../../../../public/tmp",
    req.params.filename
  );

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.write("Fichier non trouvé");
      return res.end();
    }

    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(content);
    return res.end();
  });
});

module.exports = router;
