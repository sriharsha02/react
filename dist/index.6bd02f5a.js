const heading = React.createElement("h1", {
    id: "heading",
    xyz: "abc"
}, "Hello World from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
console.log(heading);
//Exercise problem
/*

div id = parent
  div id = child
      h1
  div
div


*/ const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, React.createElement("h2", {}, "Hello from h2 tag")));
const root2 = ReactDOM.createRoot(document.getElementById("root"));
root2.render(parent);
console.log(parent);
/*

div id = parent
  div id = child
      h1
      h2
  div
div

*/ const parent2 = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {}, "Hello from h1 tag"),
    React.createElement("h2", {}, "I am from h2 tag")
]));
const root3 = ReactDOM.createRoot(document.getElementById("root"));
root2.render(parent2);
console.log(parent2);
/*
div id = parent
  div id = child
      h1
      h2
  div
div
div id = parent
  div id = child
      h1
      h2
  div
div




*/ const parent3 = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "Hello from h1 tag"),
        React.createElement("h2", {}, "I am from h2 tag")
    ]),
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "Hello from h1 tag"),
        React.createElement("h2", {}, "I am from h2 tag")
    ])
]);
const root4 = ReactDOM.createRoot(document.getElementById("root"));
root2.render(parent2);
console.log(parent2);

//# sourceMappingURL=index.6bd02f5a.js.map
