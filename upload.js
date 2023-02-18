// Set the region and bucket name
const AWS = require('aws-sdk');

AWS.config.update({
  accessKeyId: 'AKIAWPE7CTVOX6DWJ2MJ',
  secretAccessKey: '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',
  region: 'us-east-1'
});

var bucketName = 'applesoft1';

// Create a new S3 object
var s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  params: { Bucket: bucketName }
});

// Get the file input element and progress bar element
var fileInput = document.getElementById('file');
var progressBar = document.getElementById('progress-bar');

// Function to upload the file to S3
function uploadFile() {
  var file = fileInput.files[0];

  if (!file) {
    alert('Please choose a file to upload.');
    return;
  }

  // Set the key to be the filename
  var key = file.name;

  // Set the progress bar to 0%
  progressBar.style.width = '0%';

  // Create a new upload object and configure it with the file, key, and progress bar
  var upload = new AWS.S3.ManagedUpload({
    params: { Bucket: bucketName, Key: key, Body: file },
    // Set the progress bar to show the percentage of bytes uploaded
    onProgress: function(data) {
      var progress = parseInt((data.loaded * 100) / data.total);
      progressBar.style.width = progress + '%';
    }
  });

  // Start the upload and handle errors
  upload.promise().then(
    function(data) {
      alert('Video successfully uploaded to S3!');
      // Reset the file input and progress bar
      fileInput.value = '';
      progressBar.style.width = '0%';
    },
    function(err) {
      alert('Error uploading video to S3: ' + err.message);
      // Reset the file input and progress bar
      fileInput.value = '';
      progressBar.style.width = '0%';
    }
  );
}
