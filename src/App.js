import React, { useRef, useState } from "react";
import "./components/styles/style.css";
// import Counter from "./components/Counter";
// import Value from "./components/Value";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
function App() {
    const [posts, setPosts] = useState([
      {id: 1, title: 'карнавал', body: "description"},
      {id: 2, title: 'карнавал 2', body: "description"},
      {id: 3, title: 'карнавал 3', body: "description"},
    ])
    // const [posts2, setPosts2] = useState([
    //   {id: 1, title: 'маскарад', body: "description"},
    //   {id: 2, title: 'маскарад 2', body: "description"},
    //   {id: 3, title: 'маскарад 3', body: "description"},
    // ])
  
    // const bodyInputRef = useRef()
    const createPost = (newPost) => {
      setPosts([...posts, newPost])
    }


  return (
    <div className="App">
      {/* <Counter />
      <Value /> */}
      {/* <PostList posts={posts2} title={"Список постов 2"}/> */}
      <PostForm create={createPost} />
      <PostList posts={posts} title={"Список постов 1"}/>
    </div>
  );
}

export default App;