//Get root HTML element
const rootHtmlElement = document.getElementById('root');

// Initialize root react element
const rootReactElement = ReactDOM.createRoot(rootHtmlElement);

// Create basic react element
const firstHeadingReactElement = React.createElement('h1', null, 'Hello JSX from React!');
const secondHeadingReactElement = React.createElement('h2', null, 'JSX is awesome!');

const headingReactSectionElement = React.createElement(
    'heading',
    null,
    firstHeadingReactElement,
    secondHeadingReactElement);

//Render content
rootReactElement.render(headingReactSectionElement);
s