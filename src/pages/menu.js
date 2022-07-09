// a file called menu.js
import data from './../data/copy.csv'; // Importing copy data

// Converting copy data into object
const arrToObj = (() => {
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
})();

// Importing all images
const allImages = (ctx => {
    let keys = ctx.keys();
    let values = keys.map(ctx);
    return keys.reduce((o, k, i) => { o[k] = values[i]; return o; }, {});
})(require.context('./../img', true, /.*/));

// build main title
const mainTitle = () => {
    const title = document.createElement('h2');
    title.innerText = arrToObj['menu-title'];
    title.classList.add('title');
    return title;
}

// Build menu sections
const menuSection = () => {

    // console.log(allImages)

    const div = document.createElement('div');
    div.classList.add('menu-options');
    const sections = ['start-title', 'main-title', 'dessert-title'];

    for (const sec of sections) {
        // Subtitle
        const h2 = document.createElement('h2');
        h2.innerText = arrToObj[sec][0];

        const img = document.createElement('img');

        // Option list
        const ul = document.createElement('ul');
        for (let i = 0; i < parseInt(arrToObj[sec][2]); i++) {

            const option = arrToObj[arrToObj[sec][1] + i];
            const li = document.createElement('li');

            for (const val of option) {
                if (val.indexOf('.jpg') > -1) {
                    const img = document.createElement('img');
                    img.src = allImages['./' + val];
                    img.alt = option[0];
                    li.appendChild(img);
                } else {
                    const p = document.createElement('p');
                    p.innerText = val;
                    li.appendChild(p);
                }
            }
            ul.appendChild(li);
        }
        div.appendChild(h2);
        div.appendChild(ul);
    }
    // console.log(arrToObj);
    return div
}

const menu = () => {
    const menuContent = document.createElement('div'); // create main wrapper
    menuContent.classList.add('menu-wrap');
    menuContent.append(mainTitle(), menuSection()); // building kv image
    return menuContent;
};

export {
    menu
};