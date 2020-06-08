const aws = require('aws-sdk');
// const multer = require('multer');
// const multerS3 = require('multer-s3');
const dotenv = require('dotenv');
dotenv.config();

aws.config.update({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: 'ap-south-1'
});

const s3 = new aws.S3();

const myBucket = 'hemanth1508';
let myKey = '';
function deleteFile(previous) {
    // var bucketInstance = new AWS.S3();
    let temp = previous.split('/');
    myKey = temp[temp.length - 1];
    console.log("Deleting file name : " + myKey);
    let params = {
        Bucket: myBucket,
        Key: myKey
    };
    s3.deleteObject(params, function (err, data) {
        if (data) {
            console.log("File deleted successfully");
        }
        else {
            console.log("Check if you have sufficient permissions : " + err);
        }
    });
}

module.exports = {
    deleteFile: deleteFile
}