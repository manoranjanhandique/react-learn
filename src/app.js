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

const root= ReactDOM.createRoot(document.getElementById("parent"));

root.render(parent)