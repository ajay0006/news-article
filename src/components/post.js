import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {DateTime} from "luxon";
import {getPostsById} from "../reducers/thunk";
import { clearArticleState } from "../reducers/postsReducer";
import {Spinner} from "react-bootstrap";

const Post = () => {
    const posts = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    let params = useParams().id;

    useEffect(() =>{
        dispatch(getPostsById(params))
        // eslint-disable-next-line
    },[])

    useEffect(() => {
        return () => {
            dispatch(clearArticleState())
        }
        // eslint-disable-next-line
    },[])

    return(
        <>
            { posts.article ?
                <div className='article_container'>
                    <h1> {posts.article.title}</h1>
                    <div
                    style={{
                        background: `url(${posts.article.imageXl})`
                    }}
                    className='image'>
                    </div>
                    <div className='author'>
                        Created by: <span>{posts.article.author} - {(DateTime.fromISO(posts.article.createdAt).toLocaleString({
                        month: 'long',
                        day: 'numeric'
                    }))}</span>
                    </div>
                    <div className='mt-3 content'>
                        <div dangerouslySetInnerHTML={{
                            __html: posts.article.content
                        }}></div>
                    </div>
                    {posts.loading ?
                        <div style={{ textAlign: "center"}}>
                            <Spinner animation='border' role='status'>
                                <span className= 'visually-hidden'> Loading ... </span>
                            </Spinner>

                        </div>
                        :null}

                </div>
                :null}

        </>
    )
}

export default Post