import React from "react";

function Article(props) {
    return (
        <article>
            <h3>{props.name}</h3>
            <small>{props.date}</small>
            <p>{props.preview}</p>
        </article>
    )
}

export default Article;