import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';

const ModalCont = (props) => {
    const modalStyles = makeStyles((theme) => ({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }));

    const classes = modalStyles();
    return (
        <Modal
            key={props.Id}
            id={props.Id}
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={props.handleOpen ? props.open : props.delet}
            onClose={props.handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={props.open} key={props.Id}>
                <div className={classes.paper}>
                    <i className="fa fa-times-circle justify-content-right" aria-hidden="true" onClick={props.handleClose} style={{ cursor: "pointer" }}></i>
                    <h2 className="text-center mb-3" id="transition-modal-title">{props.header}</h2>
                    {props.body}
                    <Button variant="outlined" color="primary" onClick={props.onSubmit} style={{ margin: 8 }}>
                        Send
                    </Button>
                </div>
            </Fade>
        </Modal>
    )
}

export default ModalCont