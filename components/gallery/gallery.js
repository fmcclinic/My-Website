// gallery.js
const gallery = document.getElementById('gallery');

// Add event listeners or other functionalities to the gallery
gallery.addEventListener('click', () => {
  console.log('Gallery clicked!');
});

// Example: Dynamically create image elements
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

images.forEach(image => {
  const img = document.createElement('img');
  img.src = image;
  gallery.appendChild(img);
});