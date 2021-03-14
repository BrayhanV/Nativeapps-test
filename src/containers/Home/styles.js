import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
	container: {
		padding: "25px 50px",
		backgroundColor: theme.palette.background.default,
		minHeight: "100vh"
	},
	infinite: {
		overflow: "hidden !important"
	},
	title: {
		marginBottom: 20
	},
	loadingContainer: {
		width: "100%",
		textAlign: "center",
		marginTop: 20
	}
}));