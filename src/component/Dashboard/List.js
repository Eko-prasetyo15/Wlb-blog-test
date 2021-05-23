import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import ModalCont from "../../partial/modal"
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import { deleteData, updateData } from "../../views/Dashboard/action";



const ListTable = (props) => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const [delet, setDelete] = useState(false)

    const [description, setDescription] = useState(props.body)

    const onChangeDescription = (e) => {
        setDescription(e.target.value)
    }

    const onSubmit = () => {
        dispatch(updateData(props.id, description))
        setOpen(false)
    }

    const handleOpen = (id) => {
        setOpen(true);
    };
    const handleDelete = () => {
        dispatch(deleteData(props.id))
    }

    const handleClose = () => {
        setOpen(false);
    };

    const FormEdit = [
        <div>
            <TextField
                id="outlined-full-width"
                label="Title"
                // style={{ margin: 4 }}
                placeholder="Input Title"
                // helperText="Full width!"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                defaultValue={props.title}
                disabled
            />
            <TextField
                id="outlined-multiline-static"
                label="Description"
                multiline
                fullWidth
                rows={12}
                // defaultValue="
                variant="outlined"
                // style={{ margin: 4 }}
                onChange={props.onChangeDescription}
                defaultValue={props.body}
            />
        </div>
    ]
                      
const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);
return (
    <>
        <StyledTableRow key={props.id}>
            <StyledTableCell align="left">{props.id}</StyledTableCell>
            <StyledTableCell align="left">{props.title}</StyledTableCell>
            <StyledTableCell align="left">{props.body}</StyledTableCell>
            <StyledTableCell align="left">
                <div>
                    <i className="fa fa-pencil mr-3" aria-hidden="true" onClick={handleOpen} style={{cursor: "pointer"}}></i>
                    <i className="fa fa-trash-o" aria-hidden="true" onClick={handleDelete} style={{ cursor: "pointer" }}></i>
                </div>
            </StyledTableCell>
        </StyledTableRow>
        <ModalCont
            id={props.id}
            title={props.title}
            body={props.body}
            header={"Edit Blog Detail"}
            open={open}
            delete={delet}
            handleOpen={handleOpen}
            onChangeDescription={onChangeDescription}
            onSubmit={onSubmit}
            handleClose={handleClose}
            body={FormEdit} />
    </>

)
}

export default ListTable