import React, { useEffect } from "react";
import "./Article.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useGetSingleBlogQuery } from "../../features/Blog/BlogApi";

const Article = () => {
  const { id } = useParams();
  const navigate= useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {data, isLoading, isError } = useGetSingleBlogQuery(id);

  const previousPage=()=>{
    navigate(-1)
  }

  return (
    <div className="article">
      <div className="container">
        
        <button onClick={previousPage}>Back</button>
        {!isLoading && !isError && data && (
        <div >
            <div className="top_section">
                <img src={data.image} alt="" />
                <h2>{data.heading}</h2>
            </div>
            <div className="description">
                <p>{data.paragraph}</p>
            </div>
            </div>)}
      </div>
    </div>
  );
};

export default Article;
