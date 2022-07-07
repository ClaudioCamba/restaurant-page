import './css/style.css';
import { home } from './pages/home';
import { menu } from './pages/menu';
import { contact } from './pages/contact';

const content = document.querySelector('#content'); // Content wrap

// Build Navigation
const navbar = () => {
    const ul = document.createElement('ul');
    const header = document.createElement('header');
    header.appendChild(ul);
    ul.classList.add('content-nav')
    const pages = {
        copy: ['Home', 'Menu', 'Contact'],
        func: [home(), menu(), contact()]
    }

    for (let i = 0; i < 3; i++) {
        const li = document.createElement('li');

        li.innerText = pages.copy[i];

        li.addEventListener('click', e => {
            if (!e.target.classList.contains('active')) {
                ul.childNodes.forEach(function (el) { el.classList.remove('active') })
                content.innerHTML = '';
                content.appendChild(pages.func[i]);
                e.target.classList.add('active');
            }
        });
        ul.appendChild(li);
    }
    ul.childNodes[0].classList.add('active')
    return header;
};

document.body.prepend(navbar()); // Append Navigation onload
content.appendChild(menu()); // Append Home onload

