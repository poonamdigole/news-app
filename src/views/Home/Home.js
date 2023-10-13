import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import NewsArticle from "../../components/NewsArticle/NewsArticle";

export default function Home() {
    const [news, setNews] = useState([]);
    const [searchQuery, setSearchQuery] = useState("apple");

    const loadNews = async () => {
        try {

            const response = await axios.get(`https://newsapi.org/v2/everything?q=${searchQuery}&from=2023-09-13&sortBy=publishedAt&apiKey=${process.env.REACT_APP_API_KEY}`);
            console.log(response)
            setNews(response.data.articles);
        }

        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        loadNews();
    }, []);

    useEffect(() => {
        loadNews();
    }, [searchQuery])

    return (
        <div>
            <h1 className="text-center">News App</h1>
            <input type="text" className="search-input" placeholder="Search"
                value={searchQuery}
                onChange={(e) => {
                    setSearchQuery(e.target.value)
                }} />


            <div className="news-container">
                {
                    news.map((newsArticle, index) => {
                        const { author, title, description, content, publishedAt, url, urlToImage } = newsArticle;

                        return (
                            <NewsArticle author={author} description={description} title={title} url={url} urlToImage=
                                {urlToImage} content={content} publishedAt={publishedAt} />
                        )

                    })
                }

            </div>
        </div>
    )
}