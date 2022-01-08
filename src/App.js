// import { useRef } from "react";
import "./App.css";

export default function App() {
    // const resValue = useRef();

    return (
        <div className="App">
            <article>This is so stupid to be honest...</article>
            <form onSubmit={filterSlug}>
                <input type="text" id="input-slug" autofocus />
                <button type="submit">GENERATE</button>
                <input id="result"></input>
            </form>
        </div>
    );
}

function filterSlug(e) {
    e.preventDefault();

    let slug = document.querySelector("#input-slug");
    let res = document.querySelector("#result");

    if (slug.value === "") {
        alert("You must insert a value!");
    } else {
        res.value = slug.value
            .toLowerCase()
            .replace(
                /!|@|#|\$|%|\^|&|\*|\(|\)|_|=|\+|\[|\]|{|}|\||\\|:|;|'|"|,|\.|<|>|\/|\?|`|~/g,
                ""
            )
            .replace(/\s/g, "-");
    }
}
