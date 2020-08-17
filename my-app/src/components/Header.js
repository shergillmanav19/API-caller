import React from 'react'

function Header(props) {
    return(
        <div>
        <input 
        value = {props.data.topText}
        name = "topText"
        placeholder = "--Enter here--"
        onChange={props.handleChange}
        />
        <button onClick={props.handleClick} value={props.data.topText}> Search!</button>
        <br />
        { props.data.Images.map(pic =>(
            <img src = { pic.urls.small} alt="Problem"/>
        ))
        }
        
        </div>
    )
    
}
export default Header