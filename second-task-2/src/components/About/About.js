import React from 'react';
import {useState} from 'react';
import './About.css';
import image from './placeholder-image.jpg';
import ArticleContent from '../../pages/ArticlesContent/ArticleContent';
import ArticleItems from '../../pages/ArticlesContent/ArticlesItems';


const About=(props)=>{
    const {title}=props;
    const [showAbout,setShowAbout]=useState(false);
    const article_data_length = ArticleItems.length;

    if(showAbout===true){
        return (
            <div className="about-container">
                <div className="about-button">
                    <div onClick={()=>setShowAbout(!showAbout)} className="about-title_content">
                        <div className="about-title__content">
                            <div>
                                <img src={image} className="image" alt="image"/>
                            </div>
                        <div className="about-topic__content">
                            <div className="about-content">{title}</div>
                            <div className="article_length">{article_data_length} aricles in this Topic</div>
                        </div>
                        </div>
                        <div className="about-symbol-top">	&#x2303; </div>
                    </div>
                    {showAbout && 
                    <div className="about-articles">
                    <p className="about-show"><ArticleContent/></p>
                    </div>}
                </div>   
             </div>
        );
    }
    return (
        <div className="about-container">
                <div className="about-button">
                    <div onClick={()=>setShowAbout(!showAbout)} className="about-title_content">
                        <div className="about-title__content">
                            <div>
                                <img src={image} className="image" alt="image"/>
                            </div>
                            <div className="about-topic__content">
                                <div className="about-content">{title}</div>
                                <div className="article_length">{article_data_length} aricles in this Topic</div>
                            </div>
                        </div>
                        <div className="about-symbol-bottom">&#x2304;</div>
                    </div>
                </div>   
             </div>
        );
}

export default About;