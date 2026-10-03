import fs from 'fs';
const h = fs.readFileSync('dist/es/fotos/index.html', 'utf8');
console.log('gallery-item count:', (h.match(/class="gallery-item"/g) || []).length);
console.log('ImageObject present:', h.includes('"@type":"ImageObject"'));
console.log('lightbox present:', h.includes('id="lightbox"'));
console.log('paisajes category:', h.includes('data-category="paisajes"'));
console.log('entrada category:', h.includes('data-category="entrada"'));
