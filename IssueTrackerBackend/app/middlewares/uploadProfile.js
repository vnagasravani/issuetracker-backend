const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const dotenv = require('dotenv');
dotenv.config();
aws.config.update({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: 'ap-south-1'
});

const s3 = new aws.S3();
const upload = multer({
    storage: multerS3({
        acl: 'public-read',
        s3,
        bucket: 'hemanth1508',
        key: function (req, file, cb) {
            var date = new Date();
            var timestamp = date.getTime();

            req.file = timestamp + "_" + file.originalname;
            cb(null, timestamp + "_" + file.originalname);
        }
    })
});
module.exports = upload;