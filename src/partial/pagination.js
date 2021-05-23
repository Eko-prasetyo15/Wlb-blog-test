import  React from 'react';

const Pagination = (props) => {

    return (
        <div className="container">
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className={`page-item + ${props.updatePage <= 0 ? "disabled" : ""}`}>
                        <a className="page-link disabled" href="" onClick={props.prev} >Previous</a>
                    </li>
                    {props.pageNum}
                    <li className={`page-item + ${props.updatePage >= props.Limitted ? "disabled" : ""}`}>
                        <a className="page-link" href="" onClick={props.next}>Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination