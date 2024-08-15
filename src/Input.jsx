import React, { useState } from "react";


function Input(props){
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    function inputText(e) {
        const value = e.target.value
        if (e.target.name === "content") {
            setContent(value)
        } else {
            setTitle(value)
        }
        
    }

    return (<div className="input">
        <input onChange={inputText} value={title} name="input" type="text" placeholder="Title" />
        <textarea  onChange={inputText} value={content} placeholder="Take Note..." name="content" rows="4" cols="10" maxLength="100"></textarea>
        <button onClick={() => {
            props.onAdds(title, content)
            setTitle('')
            setContent('')
        }}>Add</button>
    </div>)
}

export default Input;