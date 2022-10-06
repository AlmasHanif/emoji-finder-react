import { React, useState } from 'react'
import data from "./emojisData.json"

function List(props) {

    const filteredData = data.filter((el) => {

        if (props.input === '') {
            return el;
        }

        else {
            return el.name.toLowerCase().includes(props.input)
        }
    })
    return (
        <div className='container'>
            <div className='row mt-5 d-flex align-item-center justify-content-center'>
                {filteredData.map((item) => (
                    <div className='col-lg-3 col-md-4 col-sm-2 col-xs-6 emojis' key={item.name}>{item.name}</div>
                ))}
            </div>
        </div>
    )
}

export default List