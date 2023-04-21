import React, { useState } from "react";
import Input from "./UI/input/Input";
import Button from "./UI/button/Button";

const PostForm = ({create}) => {

const [post, setPost] = useState({title: "", body: ""})
const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
        ...post, id: Date.now()
    }
    create(newPost)
    // setPosts([...posts, {...post, id: Date.now()}])
    setPost({title: "", body: ""})
    // console.log(bodyInputRef.current.value)
  }
    return (
        <form>
        {/* УПРАВЛЯЕМЫЙ КОМПОНЕНТ */}
                <Input
                  value={post.title}
                  type="text"
                  placeholder="Название поста" 
                  onChange={e => setPost({...post, title: e.target.value})}
                />
        {/* УПРАВЛЯЕМЫЙ КОМПОНЕНТ */}
                <Input
                  value={post.body}
                  type="text"
                  placeholder="Описание поста"
                  onChange={e => setPost({...post, body: e.target.value})}
                />
                <Button onClick={addNewPost} >Создать пост</Button>
              </form>
    );
}
 
export default PostForm;