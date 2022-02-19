import React from 'react';
import ReactDOM from 'react-dom';

const NavItemsComponent = function(){
    return (
    <ul className ="nav-list-items">
        <li>Pricing</li>
        <li>Contact</li>
        <li>About Us</li>
    </ul>);
}

const NavBarComponent = function(){
    return (
        <header>
            <nav className="nav">
                <NavItemsComponent/>
            </nav>
        </header>
    );
};

const MainComponent = function(){
    return (
        <div>
            <h1>Hello, world.</h1>
        </div>
    );
}

const FooterComponent = function(){
    return (
        <footer className="footer">
            <small>© Sujal Mandal - 2022 </small>
        </footer>
    );
}

const rootElem = document.getElementById("root");

ReactDOM.render(
    <div>
    <NavBarComponent/>
    <MainComponent/>
    <FooterComponent/>
    </div>,
    rootElem
);
