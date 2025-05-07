# Cloudinary File Upload

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Test Coverage][coveralls-image]][coveralls-url]


A simple Node.js middleware package for uploading files to [Cloudinary](https://cloudinary.com) using [Multer](https://github.com/expressjs/multer) and [multer-storage-cloudinary](https://github.com/affanshahid/multer-storage-cloudinary).


## Installation

Install the package and its required dependency:

```bash
npm install cloudinary-file-upload multer-storage-cloudinary

```

## Usage

### Simple Usage (Create file index.js or app.js)

```javascript
const express = require('express');
const dotenv = require('dotenv');
const getUploader = require('cloudinary-file-upload');

dotenv.config();

const app = express();
const PORT = 8000;

// Set up the uploader middleware with your desired Cloudinary folder
const upload = getUploader('my-folder-name');

// File upload endpoint
app.post('/upload', upload.single('file'), (req, res) => {
  res.json({
    message: 'File uploaded successfully!',
    url: req.file.path,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

```

### Setup (Create a .env file in your root directory:)

```javascript
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

```

### 

```javascript
```

For details on the effect of each CORS header, read [this](http://www.html5rocks.com/en/tutorials/cors/) article on HTML5 Rocks.


## Author

[Sanket parsewar](https://github.com/sanketparsewar) ([sanket.parsewar97@gmail.com](mailto:sanket.parsewar97@gmail.com))
