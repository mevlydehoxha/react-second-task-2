import React from 'react';
import {useState} from 'react';
import './About.css';
import image from './placeholder-image.jpg';
import ArticleContent from '../../ArticlesContent/ArticleContent';
import ArticleItems from '../../ArticlesContent/ArticlesItems';


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
                            <p>{article_data_length} aricles in this Topic</p>
                        </div>
                        </div>
                        <div className="about-symbol-top">&#10093; </div>
                    </div>
                    {showAbout && 
                    <div className="about-articles">
                    <p class="about-show"><ArticleContent/></p>
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
                            <p>{article_data_length} aricles in this Topic</p>
                        </div>
                        </div>
                        <div className="about-symbol-bottom">&#10093;</div>
                    </div>
                </div>   
             </div>
    )
}

export default About;