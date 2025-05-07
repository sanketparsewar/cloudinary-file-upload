const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:    process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/**
 * Returns a multer upload middleware configured for Cloudinary
 * @param {string} folder - Cloudinary folder name
 */
function getCloudinaryUploader(folder = 'uploads') {
  const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder,
      allowed_formats: ['jpg', 'png', 'jpeg', 'webp', 'pdf'],
      transformation: [{ width: 500, height: 500, crop: 'limit' }],
    },
  });

  return multer({ storage });
}

module.exports = getCloudinaryUploader;
