import Navigation from './src/Navigation';
import Header from './src/header';
import Content from './src/Content';
import Footer from './src/footer';
import { startCase } from 'lodash';


var iterator = 0;

var home = {
    'title': 'Welcome to my Savvy Coders Website!'
};
var blog = {
    'title': 'Welcome to my blog'
};
var contact = {
    'title': 'Welcome to my contact page'
};
var projects = {
    'title': 'Welcome to my Projects'
};

var root = document.querySelector('#root');

function handleNavigation(event){
    var destination = startCase(event.target.textContent);

    event.preventDefault();


    render(State[event.target.textContent]);
}
var State = {
    
    'Home': {
        'links': [ 'Blog', 'Contact', 'Projects' ],
        'title': 'Welcome to Trevon\'s Savvy Coder Website'

    },
    'Blog': {
        'links': [ 'Home', 'Contact', 'Projects' ],
        'title': 'Read my words and what not.'

    },
    'Contact': {
        'links': [ 'Blog', 'Home', 'Projects' ],
        'title': 'Contact Trevon'
    },
    'Projects': {
        'links': [ 'Blog', 'Contact', 'Home' ],
        'title': 'Here are my projects'
    },

};


function render(state){
    root.innerHTML = `
    ${Navigation(state)}
    ${Content(state)}
    ${Header(state.title)}
    ${Footer(state)}
    `;


    while(iterator < links.length){
        links[0].addEventListener('click', function handleNavigation(event){
            event.preventDefault();
            render(State[event.target.textContent]);
        });

        links[1].addEventListener('click', function handleNavigation(event){
            event.preventDefault();

            render(State[event.target.textContent]);
        });

        links[2].addEventListener('click', function handleNavigation(event){
            event.preventDefault();

            render(State[event.target.textContent]);
        });
        iterator++;
    }
}


document.querySelector('navigation a');

render(State.Home);


render(State.Home);
// render(blog);
// render(contact);
// render(projects);
// nameChecker();
document.querySelector('#navigation a').addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target.href);
    render(home);
});

document.querySelector('#navigation li:nth-child(1) a').addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target.href);
    render(blog);
});

document.querySelector('#navigation li:nth-child(2) a').addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target.href);
    render(contact);
});

document.querySelector('#navigation li:nth-child(3) a').addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target.href);
    render(projects);
});