import React from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";
import { useStyles } from "./styles";
import PropTypes from "prop-types";

export const ErrorModal = ({open, handleClose, errorMessage}) => {
	const classes = useStyles();
    
	return (
		<Dialog onClose={handleClose} open={open}>
			<DialogTitle>No se ha podido listar las peliculas</DialogTitle>
			<DialogContent>
				<DialogContentText>{errorMessage}</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button className={classes.button} onClick={handleClose} color="primary">
                    Ok
				</Button>
			</DialogActions>
		</Dialog>
	);
};

ErrorModal.propTypes = {
	open: PropTypes.bool,
	handleClose: PropTypes.func,
	errorMessage: PropTypes.string
};