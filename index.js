const jsxElement = <div className = "header">Hi there</div>
//javascript object that describes a DOM element - not the element itself!
console.log(jsxElement);

const jsElement = document.createElement("div");
jsElement.className = "header";

//a javascript DOM element
console.log(jsElement);

ReactDOM.render(
    jsxElement
    ,
    //selector
    document.getElementById("root")
);