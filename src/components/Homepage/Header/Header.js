import React from 'react';
import './Header.css';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NaviagtionMenu from 'material-ui/svg-icons/navigation/menu';

export default class Header extends React.Component{
	render(){
		return (
		    <Toolbar className="headerBar" style={{padding: '5px', height:'7vh'}}>
		    	<ToolbarGroup>
					<ToolbarTitle text="SemiColonCoder" />
				</ToolbarGroup>
				<ToolbarGroup>
					<ToolbarSeparator className="separator1"/>
					<div>Welcome Casey!</div>
		    		<IconMenu
				      iconButtonElement={<IconButton><NaviagtionMenu /></IconButton>}
				      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
				      targetOrigin={{horizontal: 'left', vertical: 'top'}}
				    >
				      <MenuItem primaryText="Portfolio" />
				      <MenuItem primaryText="Resume" />
				      <MenuItem primaryText="Settings" />
				      <MenuItem primaryText="Sign Out" />
				    </IconMenu>
				</ToolbarGroup>
		    </Toolbar>
		);
	}
}