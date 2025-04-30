import {Outlet} from "react-router";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

function Layout() {
    return (
        <div className="mx-auto">
                <Navbar/>

            <main >
                <Outlet/>
            </main>

            <footer className="mx-auto">
                <Footer/>
            </footer>
        </div>
    );
}

export default Layout;