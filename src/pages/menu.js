// a file called menu.js
// import kvImg from './../img/restaurant-kv2.jpg';
import data from './../data/copy.csv';

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

let copy = arrToObj();

// build main title
const mainTitle = () => {
    const title = document.createElement('h2');
    title.innerText = copy['menu-title'];
    title.classList.add('title');
    return title;
}

// Build menu sections
const menuSection = () => {
    const div = document.createElement('div');
    div.classList.add('menu-options');
    const sections = ['start-title', 'main-title', 'dessert-title'];

    for (const sec of sections) {
        // Subtitle
        const h2 = document.createElement('h2');
        h2.innerText = copy[sec][0];

        // Option list
        const ul = document.createElement('ul');
        for (let i = 0; i < parseInt(copy[sec][2]); i++) {
            const option = copy[copy[sec][1] + i];
            const li = document.createElement('li');
            for (const val of option) {
                const p = document.createElement('p');
                p.innerText = val;
                li.appendChild(p);
            }
            ul.appendChild(li);
        }
        div.appendChild(h2);
        div.appendChild(ul);
    }
    console.log(copy);
    return div
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




const menu = () => {
    const menuContent = document.createElement('div'); // create main wrapper
    menuContent.classList.add('menu-wrap');
    menuContent.append(mainTitle(), menuSection()); // building kv image
    return menuContent;
};

export {
    menu
};