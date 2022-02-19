import React from 'react';

const NavItemsComponent = function(){
    return (
    <ul className ="nav-list-items">
        <li>Pricing</li>
        <li>Contact Us</li>
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

export {NavBarComponent as HeaderComponent};