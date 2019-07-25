import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

export const navigationStyle = (theme) => ({
	navRoot: {
		flexGrow: 1
	}
});

export const theme = createMuiTheme({
	palette: {
		primary: { main: blue[100] },
		secondary: { main: '#11cb5f' } // This is just green.A700 as hex.
	}
});
