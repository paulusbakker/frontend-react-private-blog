import React from 'react';
import posts from '../data/posts.json';
import {Link, Redirect, useParams} from "react-router-dom";

function BlogpostPage({isAuthenticated}) {
    const {id} = useParams();
    return (
        <>
            {isAuthenticated ?
                <div className="page-container">
                    <br/>
                    <h3>{posts[id - 1].title}</h3><br/>
                    <h3>{posts[id - 1].date}</h3><br/>
                    <h3>{posts[id - 1].content}</h3><br/>
                    <div className='underlined-red-link'>
                        <Link to={"/"}>Terug naar home</Link>
                    </div>
                </div> : <Redirect to='/'/>}
        </>

    );
}

export default BlogpostPage