# Cloudinary File Upload

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

## How to Test
### Using Postman or curl
1. Start the server:

```javascript
node index.js

```

2. Open Postman or any API testing tool.
3. Send a POST request to:

```javascript
http://localhost:8000/upload

```
4. In the Body, choose form-data.
* Key: file (make sure type is set to File)
* Value: Choose any image or file to upload.


## Example JSON Response
```json
{
  "message": "File uploaded successfully!",
  "url": "https://res.cloudinary.com/your_cloud_name/image/upload/v1234567890/my-folder-name/filename.jpg"
}
```


## Author

[Sanket parsewar](https://github.com/sanketparsewar) ([sanket.parsewar97@gmail.com](mailto:sanket.parsewar97@gmail.com))
