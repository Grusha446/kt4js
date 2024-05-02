
import React,{ useState } from "react";
import MyInput from "./UI/button/input/MyInput";
import MyButton1 from "./UI/button/MyButton1";

const PostForm = ({create}) => {
    const [post,setPost] = useState({title: '',body: ''})


    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
        ...post, id: Date.now()
        }
        create(newPost);
        setPost({title:'',body: ''})
}

return (
    <form>
        <MyInput
        value={post.title}
        onChange={e => setPost({...post,title: e.target.value})}
         type="text" 
         placeholder="Название поста"
         />
        <MyInput 
        value={post.body}
        onChange={e => setPost({...post,body: e.target.value})}
        type="text" 
        placeholder="Описание поста"
        />
        <MyButton1 onClick={addNewPost}>Создать пост</MyButton1>
      </form>
);

};

export default PostForm