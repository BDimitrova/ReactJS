import "./App.css";
import UncontrolledForm from "./components/UncontrolledForm";
import ControlledForm from "./components/ControlledForm";
import RefDemo from "./components/RefDemo";

function App() {
    return (
        <>
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
            <UncontrolledForm />
            <ControlledForm />
            <RefDemo />
        </>
    );
}

export default App;
