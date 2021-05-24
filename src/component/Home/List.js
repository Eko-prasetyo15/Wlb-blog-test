import React from "react" 
import './list.css'

const ListHome = (props) => {
    return (
        <div className="row mr-3 ml-3">
            <div className="col-lg-12">
                <ul className="event-list">
                    <li>
                        <num>
                            <span className="day">#{props.id}</span>
                        </num>
                        <div className="info">
                            <h2 className="title">{props.title}</h2>
                            <p className="desc">{props.body}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ListHome