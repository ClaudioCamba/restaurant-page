// a file called home.js
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