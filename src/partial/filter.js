import React from "react"

const Filter = (props) => {

    return (
                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Search"
                    onChange={props.onChange}
                    value={props.val}
                />
    )
}

export default Filter