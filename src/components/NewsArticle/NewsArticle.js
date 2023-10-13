import React from "react";
import './NewsArticle.css'
export default function NewsArticle({author, title , description, content , publishedAt , url , urlToImage}) {

    return (
        <div className="news-article-card">
        <img src={urlToImage} className="news-article-img"/>
        <h3>{title}</h3>
        <div className="article-info">
            <p>{author}</p>
            <p>{publishedAt} </p>
        </div>
        <p>{description} </p>

        <a href={url} target="blank" className="read-more-link">Read More</a>
        </div>
    )
}