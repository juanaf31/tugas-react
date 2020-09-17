import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import logo from '../img/logo2.png';

const Nav = () => {
	const navStyle = {
		color: 'black',
		textDecoration: 'none',
		fontSize: '20px',
		marginTop: '20px'
	};
	return (
		<nav className="mynav" style={navStyle}>
			<img src={logo} style={{ width: '70px' }} />
			<ul className="nav-links">
				<Link to="/">
					<li style={navStyle}>Home</li>
				</Link>
				<Link to="/history">
					<li style={navStyle}>History</li>
				</Link>
				<Link to="/live">
					<li style={navStyle}>Live Currency</li>
				</Link>
				<Link to="/data">
					<li style={navStyle}>Data</li>
				</Link>
			</ul>
		</nav>
	);
};

export default Nav;
