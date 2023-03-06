// После загрузки страницы вывести в консоль информацию о всех
// ссылках, якорях, изображениях на странице.

// И изображения, и ссылки
let allLinks = Array.from(document.getElementsByTagName("a"));

let allImages = Array.from(document.getElementsByTagName("img"));

console.log('All links and anchors:')
allLinks.forEach((item, index) => {
	console.log(`${index}: <a href=${item.href} target=${item.target}></a>`);
})

console.log('All images:')
allImages.forEach((item, index) => {
	console.log(`${index}: <img src=${item.src} alt=${item.alt}>`);
})