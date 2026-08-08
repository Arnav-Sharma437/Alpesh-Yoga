const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const galleryDir = path.join(__dirname, 'public', 'gallery');

// Get all authentic images
const files = fs.readdirSync(galleryDir);
const galleryImages = files
  .filter(file => {
    const isImage = file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.jpeg');
    const isThumb = file.startsWith('thumbs');
    const isDuplicate = file.includes('-nggid');
    return isImage && !isThumb && !isDuplicate;
  })
  .map(file => `/gallery/${file}`);

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(filePath));
    } else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
      results.push(filePath);
    }
  });
  return results;
}

const allFiles = walk(srcDir);
const regex = /https:\/\/images\.unsplash\.com\/[^"'\s`)]+/g;

let replaceCount = 0;

allFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content.replace(regex, (match) => {
    // Pick a random image
    const randomImage = galleryImages[Math.floor(Math.random() * galleryImages.length)];
    replaceCount++;
    return randomImage;
  });
  
  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log(`Updated ${file}`);
  }
});

console.log(`Replaced ${replaceCount} unsplash images!`);
