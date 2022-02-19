import React from 'react';
import ReactDOM from 'react-dom';

const NavItemsComponent = function(){
    return (
    <ul>
        <li>Pricing</li>
        <li>Contact</li>
        <li>About Us</li>
    </ul>);
}

const NavBarComponent =function(){
    return (
        <nav>
            <h1>Hotel 101</h1>
            <NavItemsComponent/>
        </nav>
    );
};

ReactDOM.render(
    <div>
    <NavBarComponent/>
    <p>Copyright 2100 (c)</p>
    </div>,
    //selector
    document.getElementById("root")
);