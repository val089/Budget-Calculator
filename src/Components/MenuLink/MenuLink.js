import React from 'react';
import { NavLink } from 'react-router-dom';
import './MenuLink.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MenuLink = ({ label, to, icon }) => {
	return (
		<NavLink
			exact
			to={to}
			className="menu-link"
			activeClassName="menu-link--active"
		>
			<span className="menu-link__icon">
				<FontAwesomeIcon icon={icon} />
			</span>
			<span className="menu-link__title">{label}</span>
		</NavLink>
	);
};

export default MenuLink;
