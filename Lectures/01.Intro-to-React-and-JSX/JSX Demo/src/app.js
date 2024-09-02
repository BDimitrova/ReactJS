//Get root HTML element
const rootHtmlElement = document.getElementById('root');

// Initialize root react element
const rootReactElement = ReactDOM.createRoot(rootHtmlElement);

const headingReactSectionElement = (
    <header className="react-section">
        <h1>Hello JSX from React!</h1>
        <h2>JSX is awesome!</h2>
    </header>
)

rootReactElement.render(headingReactSectionElement);
