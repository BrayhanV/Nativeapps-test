import Axios from "axios";
const { REACT_APP_API_KEY } = process.env;

export const getLoveMovies = async ({ year, keyword, page }) => {
	let response = null;

	try {
		response = await Axios.get(`http://www.omdbapi.com/?apikey=${REACT_APP_API_KEY}&s=${keyword}&y=${year}&page=${page}`);
	}catch(error){
		return { message: error.message };
	}

	const { data } = response;
	return { data: data.Search, total: data.totalResults };
};