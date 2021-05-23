import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { postData } from "./action"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Add = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const onChangeTitle = (e) => {
        setTitle(e.target.value)
    }
    const onChangeDescription = (e) => {
        setDescription(e.target.value)
    }

    const onSubmit = () => {
        dispatch(postData(title, description))
    }

    return (
        <>
            <h2 className="text-center mb-5">Post Your Blog Details</h2>
            <div className="container">
                <div>
                    <TextField
                        id="outlined-full-width"
                        label="Title"
                        style={{ margin: 8 }}
                        placeholder="Input Title"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        onChange={onChangeTitle}
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        fullWidth
                        rows={12}
                        variant="outlined"
                        style={{ margin: 8 }}
                        onChange={onChangeDescription}
                    />

                </div>
                <Button variant="outlined" color="primary" onClick={onSubmit} style={{ margin: 8}} >
                    Submit
                </Button>
            </div>
        </>

    )
}

export default Add