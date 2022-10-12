import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import {Button, Spinner} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'
import Masonry from "react-masonry-css";
import {DateTime} from "luxon";
import {getPosts} from "../reducers/thunk";

const Posts = () => {
    const posts = useSelector((state) => state.posts)
    const dispatch = useDispatch();

    useEffect(() => {
       // if (posts.articles.items.length <= 0) {
            dispatch(getPosts({}))
            // eslint-disable-next-line
        //}
    }, [])


    return (
        <>
            <Masonry
                breakpointCols={{default: 3, 800: 2, 400: 1}}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {posts.articles ?
                    posts.articles.items.map((item) => (
                        <div key={item.id}>
                            <img
                                style={{width: '100%', height: '200px'}}
                                src={`${item.image}?${item.id}`}
                                alt='placeholder'
                            />
                            <div className='author'>
                                <span>{item.author} - {(DateTime.fromISO(item.createdAt).toLocaleString({
                                    month: 'long',
                                    day: 'numeric'
                                }))}</span>
                            </div>
                            <div className='content'>
                                <div className='title'> {item.title}</div>
                                <div className='excerpt'> {item.excerpt}</div>
                                <LinkContainer to={`/article/${item.id}`} className='mt-3'>
                                    <Button variant='light'> Read More </Button>
                                </LinkContainer>
                            </div>
                        </div>
                    ))
                    : null}

            </Masonry>
        </>
    )
}

export default Posts