import React from 'react';
import "./Blog.scss"
import BlogTable from '../../AdminPannel/components/BlogTable/BlogTable';

const Blog = ({item}) => {
    const {image, paragraph, heading}= item
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
                    <button>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Blog;