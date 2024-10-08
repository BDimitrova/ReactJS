//Get root HTML element
var rootHtmlElement = document.getElementById('root');

// Initialize root react element
var rootReactElement = ReactDOM.createRoot(rootHtmlElement);

var headingReactSectionElement = React.createElement(
    'header',
    { className: 'react-section' },
    React.createElement(
        'h1',
        null,
        'Hello JSX from React!'
    ),
    React.createElement(
        'h2',
        null,
        'JSX is awesome!'
    ),
    React.createElement(
        'p',
        null,
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    )
);

// Create components without JSX

function Main(props) {
    return React.createElement('main', {}, React.createElement('h3', {}, props.title), React.createElement('ul', {}, React.createElement('li', {}, 'The Matrix'), React.createElement('li', {}, 'Man of Steel')));
}

// noJSX
// const siteContent = React.createElement(
//     'div',
//     {},
//     headingReactSectionElement,
//     React.createElement(
//         Main,
//         {title: 'Best Movies:'},
//     ),
// );

// With JSX

var siteContent = React.createElement(
    'div',
    null,
    headingReactSectionElement,
    React.createElement(Main, { title: 'Best Movies:' })
);

// Render content
rootReactElement.render(siteContent);