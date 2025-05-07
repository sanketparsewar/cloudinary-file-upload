# 🌩️ Cloudinary File Upload

A simple Node.js middleware package for uploading files to [Cloudinary](https://cloudinary.com) using [Multer](https://github.com/expressjs/multer) and [multer-storage-cloudinary](https://github.com/affanshahid/multer-storage-cloudinary).

---

## 📦 Installation

Install the package and its required dependency:

```bash
npm install cloudinary-file-upload multer-storage-cloudinary


## Usage Example
//Create an Express server using this package for file uploads:
// index.js or app.js
const express = require('express');
const dotenv = require('dotenv');
const getUploader = require('cloudinary-file-upload');

dotenv.config();

const app = express();
const PORT = 8000;

// Set up the uploader middleware with desired Cloudinary folder
const upload = getUploader('my-folder-name');

// Single file upload route
app.post('/upload', upload.single('file'), (req, res) => {
  res.json({
    message: 'File uploaded successfully!',
    url: req.file.path,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


##How to Test
Run the server:
```bash
node index.js


Open Postman or use curl.
Send a POST request to:
http://localhost:8000/upload

Use form-data body:

Key: file
Value: (Upload any image or file)

##You will get a JSON response like:

{
  "message": "File uploaded successfully!",
  "url": "https://res.cloudinary.com/your_cloud_name/image/upload/v1234567890/test-folder/filename.jpg"
}
