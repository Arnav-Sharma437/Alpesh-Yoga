const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(filePath));
    } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.md')) {
      results.push(filePath);
    }
  });
  return results;
}

const allFiles = walk(srcDir);
let replaceCount = 0;

allFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content.replace(/Dharamkot/g, 'Bhagsu Nag').replace(/dharamkot/g, 'bhagsu nag');
  
  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    replaceCount++;
    console.log(`Updated ${file}`);
  }
});

console.log(`Replaced Dharamkot in ${replaceCount} files!`);
