import React from 'react';

function Option({ category, value }) {
	return <option value={value}>{category}</option>;
}

export default Option;
