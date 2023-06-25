var rootElement = document.getElementById("root");

var root = ReactDOM.createRoot(rootElement);

// var headingElement = React.createElement("h1", {}, "Hello From React!");
// var secondHeadingElement = React.createElement("h2", {}, "Some slogan here...");
// var headerElement = React.createElement("header", {}, headingElement, secondHeadingElement);

//Use JSX Syntax
var headerElement = React.createElement(
  "header",
  null,
  React.createElement(
    "h1",
    { className: "header-container" },
    "Hello From React!"
  ),
  React.createElement(
    "h2",
    null,
    "Some slogan here..."
  ),
  React.createElement(
    "p",
    null,
    "My name is..."
  )
);

root.render(headerElement);