import React from 'react';
import {useState} from 'react';
import './Article.css';

const Article=(props)=>{
    const {article_title, article_description, article_length}=props;
    const [showArticle,setShowArticle]=useState(false);
    if(showArticle===true){
        return (
            <div className="article-container">
                <div className="article-button">
                            <div className="article-title_content" onClick={()=>setShowArticle(!showArticle)}>
                                <div className="article-content">{article_title}</div>
                                <div className="article-symbol-rotated">&#10093; </div>
                            </div>
                        {showArticle && <div><p class="article-show">{article_description} </p></div>}
                </div>   
             </div>
        );
    }
    else{
        return (
            <div className="article-container">
                <div className="article-button">
                            <div className="article-title_content" onClick={()=>setShowArticle(!showArticle)}>
                                <div className="article-content">{article_title}</div>
                                <div className="article-symbol">&#10093;</div>
                            </div>
                        {showArticle && <div><p class="article-show">{article_description}</p></div>}
                </div> 
            </div>
        );
    }


}

export default Article;