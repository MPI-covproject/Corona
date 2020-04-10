
var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

/* Looping through images */
for (var i = 1; i < 5; i++)
  {
  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'merch_' + i + '.jpg');
  thumbBar.appendChild(newImage);
}
function displayImage(imgsrc) {
  displayedImage.setAttribute('src', imgsrc)
}
  