import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Pricing from "./components/Pricing";
import AboutUs from "./components/AboutUs";
import Project from "./components/Project";
import Articles from "./components/Articles";
import ArticleDetails from "./components/ArticleDetails";
import ErrorPage from "./components/ErrorPage";

function App() {
    return (
        <>
            <div className="bg-white">
                <Header />

                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/pricing" element={<Pricing />}></Route>
                    <Route path="/project" element={<Project />}></Route>
                    <Route path="/about" element={<AboutUs />}></Route>
                    <Route path="/articles" element={<Articles />}></Route>
                    <Route path='/articles/:articleId' element={<ArticleDetails/>}></Route>
                    <Route path='/error-page' element={<ErrorPage />}></Route>
                </Routes>

            </div>
        </>
    );
}

export default App;
