import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
	container: {
		height: 450,
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
		backgroundSize: "cover"
	},
	content: {
		backgroundColor: "#000000a6",
		height: "100%",
		color: "#fff",
		verticalAlign: "center",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		opacity: 0,
		transition: "opacity 0.4s",

		"&:hover": {
			opacity: 1,
			transition: "opacity 0.4",
		}
	}
});