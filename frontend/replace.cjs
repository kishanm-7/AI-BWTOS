const fs = require('fs');
const path = require('path');

const srcDir = 'c:/Users/kisha/OneDrive/Desktop/mini project (2)/mini project/website/frontend/src';

const replacements = {
  'bg-background': 'bg-white',
  'text-foreground': 'text-black',
  'bg-secondary': 'bg-gray-50',
  'text-primary': 'text-blue-600',
  'bg-primary': 'bg-blue-600',
  'border-primary': 'border-blue-600',
  'ring-primary': 'ring-blue-600'
};

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.css') || fullPath.endsWith('.js')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let newContent = content;
      for (const [key, val] of Object.entries(replacements)) {
        newContent = newContent.split(key).join(val);
      }
      if (newContent !== content) {
        fs.writeFileSync(fullPath, newContent, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

walk(srcDir);
