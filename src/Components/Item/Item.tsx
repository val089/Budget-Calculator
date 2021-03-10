import React, { FunctionComponent } from 'react';

type ItemProps = {
	category: string;
	name: string;
	cash: number;
	onClick: () => void;
};

const Item: FunctionComponent<ItemProps> = (props) => {
	return (
		<div className="Item">
			<div className="Item__container">
				<section className="Item__header">
					<p>
						<span>Category: </span>
						{props.category}
					</p>
				</section>
				<section className="Item__info">
					<p>{props.name}</p>
					<p>{props.cash} zł</p>
				</section>
			</div>
			<button onClick={props.onClick}>DELETE</button>
		</div>
	);
};

export default Item;
