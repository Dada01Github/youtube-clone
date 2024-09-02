const fs = require('fs');
const path = require('path');

const buildPath = path.join(__dirname, 'build');
const docsPath = path.join(__dirname, 'docs');

if (fs.existsSync(buildPath)) {
  fs.renameSync(buildPath, docsPath);
  console.log('Build folder renamed to docs');
} else {
  console.log('Build folder does not exist');
}