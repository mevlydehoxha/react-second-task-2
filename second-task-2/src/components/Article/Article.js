import React from 'react';
import {useState} from 'react';
import './Article.css';


const Article=(props)=>{
    const [showArticle,setShowArticle]=useState(false);
    if(showArticle===true){
        return (
            <div className="article-container">
                <div className="article-button">
                            <div className="article-title_content" onClick={()=>setShowArticle(!showArticle)}>
                                <div className="article-content">How does Parkname seprate itself from other domain name parking companies ?</div>
                                <div className="article-symbol">&#8743; </div>
                            </div>
                        {showArticle && <div><p class="article-show">Your domains are valuable online property. As in any investment, you want the most efficent, easy way to make sure your property is going to be profitable. Do you own more than 1,000 domains? Ad a professional domainer you will find everything you need through Parkname to generate maximum profits from your domain portfolio. </p></div>}
                </div>   
             </div>
        );
    }
    else{
        return (
            <div className="article-container">
                <div className="article-button">
                            <div className="article-title_content" onClick={()=>setShowArticle(!showArticle)}>
                                <div className="article-content">How does Parkname seprate itself from other domain name parking companies ?</div>
                                <div className="article-symbol">&#10093;</div>
                            </div>
                        {showArticle && <div><p class="article-show">Your domains are valuable online property. As in any investment, you want the most efficent, easy way to make sure your property is going to be profitable. Do you own more than 1,000 domains? Ad a professional domainer you will find everything you need through Parkname to generate maximum profits from your domain portfolio. </p></div>}
                </div> 
            </div>
        );
    }


}

export default Article;