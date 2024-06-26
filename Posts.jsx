import React, {useEffect,useMemo,useState } from 'react';
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from './components/UI/button/select/PostFilter';
import MyModal from './components/UI/button/input/MyModal/MyModal';
import MyButton1 from "./components/UI/button/MyButton1";
import { usePosts } from './components/hooks/usePosts';
import PostService from './API/PostService';
import Loader from './components/UI/Loader/Loader';
import { useFetching } from './components/hooks/useFetching';
import { getPageCount, getPagesArray } from './utlis/pages';
import Pagination from './components/pagination/Pagination';

function Posts() {
    const [posts,setPosts] = useState([])
    const [filter,setFilter] = useState({sort: '',query: ''})
    const[modal,setModal] = useState(false);
    const[totalPages,setTotalPages] = useState(0);
    const[limit,setLimit] = useState(10);
    const[page,setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts,filter.sort,filter.query);
  
  
    const[fetchPosts,isPostsLoading,postError] = useFetching(async (limit,page) => {
      const response = await PostService.getAll(limit,page);
      setPosts(response.data)
      const totalCount = response.headers['x-total-count']
      setTotalPages(getPageCount(totalCount,limit))
    })
  
     useEffect(() => {
          fetchPosts(limit,page)
     }, [])
  
     const createPost = (newPost) => {
      setPosts([...posts,newPost])
      setModal(false)
     }
  
     const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id))
     }
  
     const changePage = (page) => {
      setPage(page)
      fetchPosts(limit,page)
     }
  
    return (
      <div className="App">
        <button onClick={fetchPosts}>GET POSTS</button>
        <MyButton1 style={{marginTop: 30}} onClick={() => setModal(true)}>
          Создать пользователя
        </MyButton1>
        <MyModal visible={modal} setVisible={setModal}>
            <PostForm create={createPost}/>
        </MyModal>
        <hr style={{margin: "15px 0"}}/>
        <PostFilter
            filter={filter}
            setFilter={setFilter}
        />
        {postError &&
            <h1>Произошла ошибка ${postError}</h1>
        }
        {isPostsLoading
            ? <div style={{display: "flex",justifyContent: "center",marginTop: 50}}><Loader /></div>
            : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS"/>
        }
        <Pagination
        page={page}
        changePage={changePage}
        totalPages={totalPages}
        />
    </div>
    );
  }
export default Posts;