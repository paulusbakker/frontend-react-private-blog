import React from 'react';
import posts from '../data/posts.json';
import {Link} from "react-router-dom";


function BlogPosts() {

    console.log(posts);


    return (
        <>
            <div className="page-container">
                <h2>Blog overzichtspagina</h2><br/>
                <h2>Aantal blogposts: {posts.length}</h2>
                <ul>
                    {
                        posts.map((blogItem =>
                                <li className="underlined-red-link" key={blogItem.id}>
                                    <Link to={`/blog/${blogItem.id}`}>{blogItem.title}
                                    </Link>
                                </li>
                        ))
                    }
                </ul>
            </div>

        </>

    );
}

export default BlogPosts