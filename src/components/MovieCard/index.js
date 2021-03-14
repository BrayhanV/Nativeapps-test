import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import PropTypes from "prop-types";

export const MovieCard = ({ data }) => {
	const classes = useStyles();

    
	return (
		<Card className={classes.container} style={{backgroundImage: `url(${data.Poster})`}}>
			<CardContent className={classes.content}>
				<Typography align="center" variant="h5">{data.Title}</Typography>
				<Typography align="center" variant="body1">{data.Type}</Typography>
				<Typography align="center" variant="body1">{data.Year}</Typography>
			</CardContent>
		</Card>
	);
};

MovieCard.propTypes = {
	data: PropTypes.object
};