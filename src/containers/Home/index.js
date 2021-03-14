import React from "react";
import { Box, CircularProgress, Grid, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useStyles } from "./styles";
import InfiniteScroll from "react-infinite-scroll-component";
import { getLoveMovies } from "../../api/api";
import { MovieCard } from "../../components/MovieCard";
import { ErrorModal } from "../../components/ErrorModal";

export const Home = () => {
	const [year] = useState(2020);
	const [keyword] = useState("Love");
	const [movies, setMovies] = useState([]);
	const [total, setTotal] = useState(0);
	const [page, setPage] = useState(1);
	const [open, setOpen] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const classes = useStyles();

	const handleClose = () => {
		setOpen(false);
		setErrorMessage("");
	};

	const getMovies = async () => {
		const response = await getLoveMovies({ year, keyword, page });

		if(response.message){
			setOpen(true);
			setErrorMessage(response.message);
			return;
		}

		if(!movies.length) {
			setTotal(response.total);
		}
    
		setMovies(prev => [...prev, ...response.data]);
		setPage(prev => ++prev);
	};

	useEffect(() => {
		getMovies();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<Box className={classes.container}>
			<Typography className={classes.title} color="textPrimary" variant="h3" align="center">Navapps Test</Typography>

			<InfiniteScroll
				className={classes.infinite}
				dataLength={movies.length}
				next={getMovies}
				hasMore={total / movies.length !== 1}
				loader={
					<Box className={classes.loadingContainer}>
						<CircularProgress />
					</Box>
				}
			>
				<Grid container spacing={2}>
					{movies?.map((elem, i) => (
						<Grid key={`${elem.imdbID}-${i}`} item xs={12} sm={6} md={4} lg={3}>
							<MovieCard data={elem} />
						</Grid>
					))}
				</Grid>
			</InfiniteScroll>
			<ErrorModal open={open} errorMessage={errorMessage} handleClose={handleClose} />
		</Box>
	);
};
