#ReactLearning

#React Element 
    React Element nothing but a object. 
    React.createElement("div",{id:"parent"},"Hi Its div") it will convert to object.
    After render to DOM it will become HTML elements.
    i.e. - React Element => Object => HTMLElement (render)
#React render
    For render we need to create root `ReactDOM.createRoot(document.getElementById("id"))` -> `render()`
    render(var) will replace HTML not append
#JSX
    JSX stands for JavaScript XML.
    JSX is not HTML in JavaScript, its `HTML like syntax`.
    JSX allows us to write HTML in React.
    JSX makes it easier to write and add HTML in React.
    JSX is not valid pure JavaScript , browser not understand. 
       ` So JSX transpiled before it reach to JS engine by Parcel using package name Babel`
       Babel is javascript compiler.
    HOW JSX work :(convert =>)
        `JSX => React.createElement => JS object => HTMLElements (render)`, so end of the day JSX is nothing but a React.createElement()
        `Babel` is converting this JSX
    in JSX we use <div className=""> unlike HTML class <div class=""></div>
        because `class` is a reserve word in JavaScript.
    JSX- whenever we write attributes in JSX we have to write in camelCase.
    JSX- whenever we write multiple line in Jsx we need to wrap inside first brackets (), so Babel will understand where jsx is start and where it end.
