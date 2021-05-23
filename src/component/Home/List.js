import React from "react" 
import './list.css'

const ListHome = (props) => {
    return (
        <div className="row mr-3 ml-3">
            <div className="col-lg-12">
                <ul className="event-list">
                    <li>
                        <num>
                            <span className="day">#{props.index}</span>
                        </num>
                        <div className="info">
                            <h2 className="title">{props.title}</h2>
                            <p className="desc">{props.body}</p>
                        </div>
                        {/* <div className="social">
                            <ul>
                                <li className="facebook" style={{width:'33%'}}><a href="#facebook"><span className="fa fa-facebook"></span></a></li>
                                <li className="twitter" style={{width:'34%'}}><a href="#twitter"><span className="fa fa-twitter"></span></a></li>
                                <li className="google-plus" style={{width:'33%'}}><a href="#google-plus"><span className="fa fa-google-plus"></span></a></li>
                            </ul>
                        </div> */}
                    </li>
                </ul>
            </div>
        </div>
        // <div classNameName="row">
        //     <div classNameName="col-sm-2">
        //         <span>{props.index}</span>
        //     </div>
        //     <div classNameName="col-sm-5">
        //         <p>{props.title}</p>
        //     </div>
        //     <div classNameName="col-sm-5">
        //         <p>{props.body}</p>
        //     </div>
        // </div>
    )
}

export default ListHome