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

const root= ReactDOM.createRoot(document.getElementById("parent"));

root.render(jsxParent)