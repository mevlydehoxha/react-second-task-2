import React from 'react';
import {useState} from 'react';
import './ToggleButton.css';


const ToggleButton=(props)=>{
    const {title, content}=props;
    const [show,setShow]=useState(false);
    if(show===true){
        return (
            <div className="toggle-container">
                <div className="toggle-button"
                    onClick={()=>setShow(!show)}>
                        <div className="toggle-content">{title}</div>
                        <div className="toggle-symbol_up">&#10093; </div>
                        {show && <div><hr/><p className="toggle-show">{content}</p></div>}
                </div>   
             </div>
        );
    }
    return (
        <div className="toggle-container">
            <div className="toggle-button"
                onClick={()=>setShow(!show)}>
                    <div className="toggle-content">{title}</div>
                    <div className="toggle-symbol_down"> &#10093;</div>
                    {show && <div><hr/><p className="toggle-show">{content}</p></div>}
            </div> 
        </div>
    );
}

export default ToggleButton;