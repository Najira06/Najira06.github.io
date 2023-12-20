// const { links } = require("express/lib/response")

// let menu = document.getElementById('menu-bar')
// let header = document.querySelector('header')

// menu.onclick = () =>{
//     menu.classList.toggle('fa-times')
//     header.classList.toggle('active')

// }

// window.onscroll = () =>{
//     menu.classList.remove('fa-times')
//     header.classList.remove('active')

// }

// let cursor1 = document.querySelector('.cursor-1')
// let cursor2 = document.querySelector('.cursor-2')

// window.onmousemove = (e) =>{
//     cursor1.style.top = e.pageY + 'px'
//     cursor1.style.left = e.pageX + 'px'
//     cursor2.style.top = e.pageY + 'px'
//     cursor2.style.left = e.pageX + 'px'

// }

// document.querySelectorAll('a').forEach(link =>{
//     links.onmouseover = () =>{
//         cursor1.classList.add('active');
//         cursor2.classList.add('active');

//     }

//     links.onmouseout = () =>{
//         cursor1.classList.remove('active');
//         cursor2.classList.remove('active');

//     }
// })

document.addEventListener('DOMContentLoaded', function () {
    let menu = document.getElementById('menu-bar');
    let header = document.querySelector('header');
    let cursor1 = document.querySelector('.cursor-1');
    let cursor2 = document.querySelector('.cursor-2');

    menu.onclick = () => {
        menu.classList.toggle('fa-times');
        header.classList.toggle('active');
    };

    window.onscroll = () => {
        menu.classList.remove('fa-times');
        header.classList.remove('active');
    };

    window.onmousemove = (e) => {
        cursor1.style.top = e.pageY + 'px';
        cursor1.style.left = e.pageX + 'px';
        cursor2.style.top = e.pageY + 'px';
        cursor2.style.left = e.pageX + 'px';
    };

    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor1.classList.add('active');
            cursor2.classList.add('active');
        });

        link.addEventListener('mouseleave', () => {
            cursor1.classList.remove('active');
            cursor2.classList.remove('active');
        });
    });
});
