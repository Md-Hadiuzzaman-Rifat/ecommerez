import React from "react";
import Blog from "../Blog/Blog";
import "./Blogs.scss";
import { useGetAllBlogQuery } from "../../features/Blog/BlogApi";

const Blogs = () => {
  const { data, isSuccess, isLoading } = useGetAllBlogQuery();

  return (
    <div className="Blogs">
      <div className="container">
        <p className="blogs-post">চোখের যত্নে করণীয়</p>
        <div className="blogs-heading">চোখ আপনার মুল্যবান সম্পদ</div>
        {!isLoading && isSuccess && (
          <div className="blogs-section">
            {data.map((item) => (
              <Blog key={item._id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
