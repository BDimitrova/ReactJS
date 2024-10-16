import { Link, Outlet } from "react-router-dom";


export default function AboutUs() {
    return (
        <>
            <nav className="p-20 flex items-center justify-center lg:flex lg:gap-x-12">
                <Link to="mission" className="text-sm font-semibold leading-6 text-gray-900">
                    Contact Form
                </Link>
                <Link to="stats" className="text-sm font-semibold leading-6 text-gray-900">
                    Stats
                </Link>
                <Link to="our-mission" className="text-sm font-semibold leading-6 text-gray-900">
                    Our Mission
                </Link>
            </nav>

            <Outlet/>
        </>
    );
}
