import React from 'react';
import "./Blog.scss"
import { Link } from 'react-router-dom';

const Blog = ({item}) => {
    const {image, paragraph, heading, _id}= item
    return (
        <div className='Blog'>
            <div className='blog-image'>
                <img src={image} alt="" />
            </div> 
            <div className="blog-content">
                <div className="heading">
                    <h4>{heading}</h4>
                </div>
                <div className="paragraph">
                    <p>{paragraph}</p>
                </div>
                <div className="blog-btn">
                    <Link to={`/blog/${_id}`}>
                    <button>Read More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Blog;