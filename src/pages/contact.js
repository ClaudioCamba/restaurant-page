// a file called contact.js

import data from './../data/copy.csv';

// Convert array to object
const arrToObj = () => {
    const obj = {};
    for (const arr of data) {
        if (arr.length === 2) {
            obj[arr[0]] = arr[1];
        } else if (arr.length > 2) {
            obj[arr[0]] = [];
            for (let x = 1; x < arr.length; x++) {
                if (arr[x] !== '' && arr[x] !== undefined) {
                    obj[arr[0]].push(arr[x]);
                }
            }
        }
    }
    return obj;
}

const copy = arrToObj();

// build main title
const mainTitle = () => {
    const title = document.createElement('h1');
    title.innerText = copy['contact-title'];
    title.classList.add('title');
    return title;
}

// build intro paragraph
const introDesc = () => {
    const para = document.createElement('p');
    para.innerText = copy['contact-intro'];
    para.classList.add('desc');
    return para;
}

// Build home component
const contact = () => {
    const homeContent = document.createElement('div'); // create main wrapper
    homeContent.classList.add('home-wrap');
    const copyWrap = document.createElement('div'); // Copy wrap
    copyWrap.classList.add('copy-wrap');
    copyWrap.append(mainTitle(), introDesc())
    homeContent.appendChild(copyWrap); // building kv image
    return homeContent;
};

export { contact };