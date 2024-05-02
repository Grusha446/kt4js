import React, { useState } from 'react';
import MyButton1 from './UI/button/MyButton1';

const PostItem = (props) => {
    return (
        <div className="post">
        <div className="post__content">
        <strong>{props.post.id}.{props.post.title}</strong>
            <div>
                  {props.post.body}
            </div>
            <div className="post__btns">
                  <MyButton1 onClick={()=>props.remove(props.post)}>
                      Открыть
                  </MyButton1>
            <div className="post__btns">
                  <MyButton1 onClick={()=>props.remove(props.post)}>
                      Удалить
                  </MyButton1>
            </div>
        </div>
    </div>
    </div>
    );
};
export default PostItem;