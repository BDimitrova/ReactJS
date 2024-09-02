//Get root HTML element
var rootHtmlElement = document.getElementById('root');

// Initialize root react element
var rootReactElement = ReactDOM.createRoot(rootHtmlElement);

// Create basic react element
var firstHeadingReactElement = React.createElement('h1', null, 'Hello JSX from React!');
var secondHeadingReactElement = React.createElement('h2', null, 'JSX is awesome!');

var headingReactSectionElement = React.createElement('heading', null, firstHeadingReactElement, secondHeadingReactElement);

//Render content
rootReactElement.render(headingReactSectionElement);
s;