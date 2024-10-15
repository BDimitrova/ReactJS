import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Pricing from "./components/Pricing";

function App() {
    return (
        <>
            <div className="bg-white">
                <Header />

                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/pricing" element={<Pricing />}></Route>
                </Routes>

            </div>
        </>
    );
}

export default App;
