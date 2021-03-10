import React, { FunctionComponent } from 'react';

type CategoryOptionProps = {
	category: string;
	value: string;
};

const CategoryOption: FunctionComponent<CategoryOptionProps> = ({
	category,
	value,
}) => {
	return <option value={value}>{category}</option>;
};

export default CategoryOption;
