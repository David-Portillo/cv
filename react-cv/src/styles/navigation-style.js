import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

export const navigationStyle = (theme) => ({
	navRoot: {
		flexGrow: 1
	}
});

export const theme = createMuiTheme({
	palette: {
		primary: { main: purple[500] }, // Purple and green play nicely together.
		secondary: { main: '#11cb5f' } // This is just green.A700 as hex.
	}
});
