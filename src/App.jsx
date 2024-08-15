import React, { useCallback, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Input from "./Input";


function App(){
    const [items, setItems] = useState([])
   
    function addItem(title, content) {
    
        setItems([...items, {title, content}])
        
    };

    function deleteItem(id) {
        setItems(items => {return items.filter((items, index) => {
            return index !== id
        })})
    }

    return (<div>
        <Header></Header>
        <Input onAdds={addItem}/>
        {items.map((note, index) => {
            return <Note 
                    key={index}
                    id={index}
                    title={note.title} 
                    content={note.content} 
                    deleteNote={deleteItem}/>
        })} 
     
     
        <Footer></Footer>
    </div>)
}

export default App;