import React from 'react';
import {useState} from 'react';
import './About.css';
import image from './placeholder-image.jpg';
import Article from '../Article/Article';


const About=(props)=>{
    const [showAbout,setShowAbout]=useState(false);
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
                            <div className="about-content">About Us</div>
                            <p>4 aricles in this Topic</p>
                        </div>
                        </div>
                        <div className="about-symbol">&#8743; </div>
                    </div>
                    {showAbout && 
                    <div>
                    <p class="about-show"><Article/></p>
                    <p class="about-show"><Article/></p>
                    <p class="about-show"><Article/></p>
                    <p class="about-show"><Article/></p>
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
                            <div className="about-content">About Us</div>
                            <p>4 aricles in this Topic</p>
                        </div>
                        </div>
                        <div className="about-symbol">;&#8744;</div>
                    </div>
                    {showAbout && 
                    <div>
                    <p class="about-show"><Article/></p>
                    <p class="about-show"><Article/></p>
                    <p class="about-show"><Article/></p>
                    <p class="about-show"><Article/></p>
                    </div>}
                </div>   
             </div>
    )
}

export default About;