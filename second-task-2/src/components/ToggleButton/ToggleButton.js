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
                        <div className="toggle-symboldown">	&#x2303; </div>
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
                    <div className="toggle-symbolup">&#x2304; </div>
                    {show && <div><hr/><p className="toggle-show">{content}</p></div>}
            </div>   
        </div>
    );
}

export default ToggleButton;