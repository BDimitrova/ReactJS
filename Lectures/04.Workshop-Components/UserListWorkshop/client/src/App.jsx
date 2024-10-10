import Header from "./components/header/Header";
import UserSection from "./components/user-section/UserSectionk";
import Footer from "./components/footer/Footer";
import "./index.css";

function App() {
    return (
        <>
            <Header />
                <main className="main">
                    <UserSection/>
                </main>
            <Footer />
        </>
    );
}

export default App;
