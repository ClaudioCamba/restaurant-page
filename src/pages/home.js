// a file called home.js
// import kvImg from './../img/restaurant-kv2.jpg';
import data from './../data/copy.csv';


// Convert array to object
const obj = {};
for (const val of data) { obj[val[0]] = val[1]; }

// build main title
const mainTitle = () => {
    const title = document.createElement('h1');
    title.innerText = obj.Title;
    title.classList.add('title');
    return title;
}

// build intro paragraph
const introDesc = () => {
    const para = document.createElement('p');
    para.innerText = obj.Intro;
    para.classList.add('desc');
    return para;
}

// // build background img
// const bgImg = () => {
//     const img = new Image();
//     const div = document.createElement('div');
//     div.appendChild(img);
//     div.classList.add('img-wrap');
//     img.src = kvImg;
//     img.alt = obj.Title;
//     img.classList.add('bg-img');
//     return div;
// }

// Build home component
const home = () => {
    const homeContent = document.createElement('div'); // create main wrapper
    homeContent.classList.add('home-wrap');
    const copyWrap = document.createElement('div'); // Copy wrap
    copyWrap.classList.add('copy-wrap');
    copyWrap.append(mainTitle(), introDesc())
    homeContent.appendChild(copyWrap); // building kv image
    return homeContent;
};

export { home };