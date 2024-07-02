const fs = require("fs");

const API_URL = import.meta.env.VITE_API_URL;

const UploadController = (req, res) => {
  fs.rename(req.file.path, `public/tmp/${req.file.originalname}`, (err) => {
    if (err) {
      res.status(400).send("Error while uploading");
    } else {
      res.status(203).json({
        msg: "Upload success",
        url: `${API_URL}/public/tmp/${req.file.originalname}`,
      });
    }
  });
};

module.exports = {
  UploadController,
};
