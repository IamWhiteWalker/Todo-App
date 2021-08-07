import React from 'react'
import './ListItem.css'


const ListItem = (props) => {
    const items = props.items
    const ListItems = items.map(item => (
        <div className = 'list' key={item.key}>
            <p>
                <input type="text" id={item.key} value={item.text} onChange={(e)=>{
             props.updateHandler(e,item.key)}}/>
            <span>
                <button className="icon"
                onClick={()=> props.deleteItem(item.key)}>Delete</button>
            </span>
            </p>
            </div>
    ))
    return(
        <div>{ListItems}</div>
    )
}

export default ListItem