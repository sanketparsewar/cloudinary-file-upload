const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const streamifier = require("streamifier");

// Configure Multer for in-memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Cloudinary Direct Upload Helper
const uploadToCloudinary = (buffer, options) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(options, (error, result) => {
      if (result) resolve(result);
      else reject(error);
    });
    streamifier.createReadStream(buffer).pipe(stream);
  });
};

// Cloudinary configuration setup
const configureCloudinary = ({ cloud_name, api_key, api_secret }) => {
  cloudinary.config({ cloud_name, api_key, api_secret });
};

module.exports = { upload, uploadToCloudinary, configureCloudinary };
