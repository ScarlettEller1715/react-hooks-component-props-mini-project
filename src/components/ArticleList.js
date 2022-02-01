import React from "react"
import Article from "./Article";

function ArticleList(props) {
    console.log(props)
    const articles = props.posts.map((post) => {
        return <Article 
            key={post.id}
            name={post.title}
            date={post.date}
            preview={post.preview}
        />
    })
    return (
        <main>
            {articles}
        </main>
    )
}

export default ArticleList;