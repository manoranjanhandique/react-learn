import React from "react";
import ReactDOM from "react-dom/client" 
//core react
const parent= React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        [
            React.createElement("div",{id:"list1"},
                React.createElement("h1",{},"Hello From List1")
            ),
            React.createElement("div",{id:"list2"},
                React.createElement("h2",{},"Hello from List 2")
            )
        ]
    )
)
//using jSX
const jsxParent=(<div id="parent">
    <div id="child">
        <div id="list1">
            <h1>Hello from H1 JSX</h1>
        </div>
        <div id="list2">
            <h1>Hello from H2 JSX</h1>
        </div>        
    </div>
</div>);

//using functional component
const Heading = function (){
    return (
        <h1 className="head" tabIndex="5"> I am Heading and normal function</h1>
    )
}

const count=1;
const ParentDiv=()=>
    (<div id="parent">
        { Heading()}
        <Heading/>
        <Heading></Heading>
        <div id="child">
            <div id="list1">
                {count + 1}
                <h1>Hello from H1 Functional Components</h1>
            </div>
            <div id="list2">
                <h2>Hello from H2 Functional Components</h2>
            </div>        
        </div>
    </div>);
// console.log({ParentDiv})

const root= ReactDOM.createRoot(document.getElementById("parent"));

root.render(<ParentDiv/>)