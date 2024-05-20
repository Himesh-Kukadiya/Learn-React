const element1 = document.createElement('h1');
element1.innerHTML = 'Hello, Himesh!';

const element2 = document.createElement('p');
element2.innerHTML = 'Himesh is good person and he learn something about react';

const root = document.getElementById('root');
root.appendChild(element1);
root.appendChild(element2);