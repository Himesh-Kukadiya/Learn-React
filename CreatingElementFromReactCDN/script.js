// Rendering HTML Using React
// mathod - 1
// const element = React.createElement("h2", {id: "heading"}, "I am a heading from mathod 1");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root);
// console.log(element) // it is JS object
// root.render(element) // it is also JS object

// // mathod - 2
// const element = React.createElement("h2", {id: "heading"}, "I am a heading from method 2");
// ReactDOM.render(element, document.getElementById("root"));

// mathod - 3 (Render nested elements)
// const element = React.createElement(
//     "div", {id: "parent"}, 
//     React.createElement(
//         "div", {id: "child"}, 
//         React.createElement("h2", {}, "I am a heading from method 3 with some dom tree")    
//     )
// )
// ReactDOM.render(element, document.getElementById("root"));


// mathod - 4 (Render complex elements tree)
const element = React.createElement(
    "div", {id: "boxes"}, 
    [React.createElement(
        "div", {id: "box1", className: "box", key: "1"},
        [React.createElement("h2", {id: "Heading", key: "11"}, "Heading of Box 1"),
        React.createElement("hr", {key: "12"}),
        React.createElement("p", {id: "content", key: "13"}, "content of Box 1")]
    ),
    React.createElement(
        "div", {id: "box2", className: "box", key: "2"},
        [React.createElement("h2", {id: "Heading", key: "21"}, "Heading of Box 2"),
        React.createElement("hr", {key: "22"}),
        React.createElement("p", {id: "content", key: "23" }, "content of Box 2 ")]
    )]
);
ReactDOM.render(element, document.getElementById("root"));