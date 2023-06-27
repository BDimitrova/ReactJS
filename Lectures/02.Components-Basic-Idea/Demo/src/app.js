var rootElement = document.getElementById("root");

var root = ReactDOM.createRoot(rootElement);

// var headingElement = React.createElement("h1", {}, "Hello From React!");
// var secondHeadingElement = React.createElement("h2", {}, "Some slogan here...");
// var headerElement = React.createElement("header", {}, headingElement, secondHeadingElement);

//Use JSX Syntax
const headerElement = (
  <header>
    <h1 className="header-container">Hello From React!</h1>
    <h2>Some slogan here...</h2>
    <p>My name is...</p>
  </header>
);

root.render(headerElement);
