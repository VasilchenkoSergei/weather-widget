import React from "react";

function Layout(props) {
    return (
        <main className="base-layout">
            {props.children}
        </main>
    );
}

export default Layout;
