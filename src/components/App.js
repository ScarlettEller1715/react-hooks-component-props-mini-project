import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import NewAbout from "./NewAbout"
import ArticleList from "./ArticleList";



function App() {
  return (
    <div className="App">
      <Header name={blogData.name}/>
      <NewAbout about={blogData.about} src={blogData.image}/>
      <ArticleList posts={blogData.posts} />;
    </div>
  );
};

export default App;
