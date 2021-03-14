import React from 'react'
import '../App.css';

const Card = props => {
    return (
        <div className="card">
            <div className="container">
                <h4><b>{props.name}</b></h4>
                <h4>{props.phone}</h4>
                <input type="text" onChange={props.onChangeName} placeholder={props.name} />
                <p><button className="button button-red" onClick={props.onDelete}>Delete</button></p>
                <div>{props.children}</div>
            </div>
        </div>
    )
}

export default Card
