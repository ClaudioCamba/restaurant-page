// a file called menu.js
// import kvImg from './../img/restaurant-kv2.jpg';


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
    const el = document.createElement('h1');
    el.innerText = 'Menu';
    return el;
};

export {
    menu
};