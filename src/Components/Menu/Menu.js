import React from 'react';
import './Menu.scss';
import MenuLink from '../MenuLink';
import {
	faCalculator,
	faHome,
	faMoneyBillAlt,
} from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
	return (
		<nav className="menu">
			<MenuLink to="/budget" label="Logo" icon={faMoneyBillAlt} />
			<MenuLink to="/" label="Dashboard" icon={faHome} />
			<MenuLink to="/calculator" label="Calculator" icon={faCalculator} />
			<MenuLink to="/link3" label="LINK 3" icon={faHome} />
			<MenuLink to="/link4" label="LINK 4" icon={faHome} />
			<MenuLink to="/link5" label="LINK 5" icon={faHome} />
			<MenuLink to="/link6" label="LINK 6" icon={faHome} />
		</nav>
	);
};

export default Menu;
