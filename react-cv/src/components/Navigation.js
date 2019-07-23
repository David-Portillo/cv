import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { navigationStyle, theme } from '../styles/navigation-style';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider } from '@material-ui/core/styles';

const Navigation = (props) => {
	const { classes } = props;
	return (
		<MuiThemeProvider theme={theme}>
			<div className={classes.root}>
				<AppBar position="static" color="primary">
					<Toolbar>
						<Typography variant="h6" color="inherit">
							My Bio Application
						</Typography>
					</Toolbar>
				</AppBar>
			</div>
		</MuiThemeProvider>
	);
};

Navigation.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(navigationStyle)(Navigation);
