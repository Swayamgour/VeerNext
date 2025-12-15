import React from "react";
import HeaderHome from "../Header"; // navbar / header
import Footer from "../Footer";         // footer
// import HeaderHome from "../Header";

const Layout = ({ children }) => {
    return (
        <>
            {/* Navbar */}
            <HeaderHome />

            {/* Page Content */}
            <main style={{ minHeight: "80vh" }}>
                {children}
            </main>

            {/* Footer */}
            <Footer />
        </>
    );
};

export default Layout;
