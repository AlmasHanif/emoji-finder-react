import { React, useState } from 'react'
import data from "./emojisData.json"

function List(props) {

    const filteredData = data.filter((el) => {

        if (props.input === '') {
            return el;
        }

        else {
            return el.text.toLowerCase().includes(props.input)
        }
    })
    return (
        <div className='data'>
            {filteredData.map((item) => (
                <div className='emojis' key={item.id}>{item.text}</div>
            ))}
        </div>
    )
}

export default List