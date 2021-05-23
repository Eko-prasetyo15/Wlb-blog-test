import React from "react"

const Filter = (props) => {

    return (
        <div className="form-group">
            <div className="col-lg-4">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    // onChange={props.onChange}
                    // value={props.val}
                />
            </div>
        </div>
    )
}

export default Filter