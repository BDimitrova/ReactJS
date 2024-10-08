//Get root HTML element
const rootHtmlElement = document.getElementById('root');

// Initialize root react element
const rootReactElement = ReactDOM.createRoot(rootHtmlElement);

const headingReactSectionElement = (
    <header className="react-section">
        <h1>Hello JSX from React!</h1>
        <h2>JSX is awesome!</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </header>
);

// Create components without JSX

function Main(props) {
    return React.createElement(
        'main',
        {},
        React.createElement(
            'h3',
            {},
            props.title
        ),
        React.createElement(
            'ul',
            {},
            React.createElement(
                'li',
                {},
                'The Matrix'
            ),
            React.createElement(
                'li',
                {},
                'Man of Steel'
            )
        ));
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

const siteContent = (
    <div>
        {headingReactSectionElement}
        <Main title='Best Movies:'/>
    </div>
)

// Render content (only one react element)
rootReactElement.render(siteContent);
