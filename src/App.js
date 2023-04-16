import React, { useRef, useState } from "react";
import "./components/styles/style.css";
// import Counter from "./components/Counter";
// import Value from "./components/Value";
import PostList from "./components/PostList";
import Button from "./components/UI/button/Button";
import Input from "./components/UI/input/Input";
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
    const [title, setTitle] = useState()
    const bodyInputRef = useRef()

    const addNewPost = (e) => {
      e.preventDefault()
      console.log(title)
      console.log(bodyInputRef.current.value)
    }

  return (
    <div className="App">
      {/* <Counter />
      <Value /> */}
      {/* <PostList posts={posts2} title={"Список постов 2"}/> */}

      <form>
{/* УПРАВЛЯЕМЫЙ КОМПОНЕНТ */}
        <Input
          value={title}
          type="text"
          placeholder="Название поста" 
          onChange={e => setTitle(e.target.value)}
        />
{/* НЕУПРАВЛЯЕМЫЙ КОМПОНЕНТ */}
        <Input
          type="text"
          placeholder="Описание поста"
          ref={bodyInputRef}
        />
        <Button onClick={addNewPost} >Создать пост</Button>
      </form>
      <PostList posts={posts} title={"Список постов 1"}/>
    </div>
  );
}

export default App;