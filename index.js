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

//jsx element descriptor that can be rendered directly
const pageJSXObject = <div>
    <NavBarComponent/>
    <p>Copyright 2100 (c)</p>
    </div>;

console.log(pageJSXObject);

ReactDOM.render(
    pageJSXObject,
    //selector
    document.getElementById("root")
);