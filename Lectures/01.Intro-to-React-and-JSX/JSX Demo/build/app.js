//Get root HTML element
var rootHtmlElement = document.getElementById('root');

// Initialize root react element
var rootReactElement = ReactDOM.createRoot(rootHtmlElement);

var headingReactSectionElement = React.createElement(
    "header",
    { className: "react-section" },
    React.createElement(
        "h1",
        null,
        "Hello JSX from React!"
    ),
    React.createElement(
        "h2",
        null,
        "JSX is awesome!"
    )
);

rootReactElement.render(headingReactSectionElement);