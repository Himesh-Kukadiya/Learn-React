import React from 'react';
import ReactDOM from 'react-dom';
const root = document.getElementById('root');

const heading = React.createElement("h1", {id: "Heading"}, "Wellcome back to Home Page")
const paragraph = React.createElement("p", {id: "about"}, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, libero a nesciunt dolore nulla harum modi tenetur dicta deserunt laboriosam odio et nobis, voluptates cumque minima ipsam atque natus esse. Officiis eius repudiandae quisquam?")

const tree = React.createElement("div", {id: "Home"}, [heading, paragraph])

ReactDOM.render(tree, root)