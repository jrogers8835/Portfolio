import React from 'react';
import Header from './Header/Header.js';
import Main from './Main/Main.js';
import Footer from './Footer/Footer.js';
import customDarkTheme from '../../customDarkTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './Homepage.css'
export default class Homepage extends React.Component{
	render(){
		return (
  			<MuiThemeProvider muiTheme={getMuiTheme(customDarkTheme)}>
				<div class="homepage">
					<Header />
					<Main />
					<Footer />
				</div>
			</MuiThemeProvider>
		);
	}
}