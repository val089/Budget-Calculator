import React, { useState, useEffect } from 'react';
import Form from '../Form';
import Item from '../Item';

const exampleData = [
	{
		id: '1',
		radioType: 'expense',
		name: 'Trek X-caliber 9',
		cash: 5899,
		category: 'hobby',
	},
	{
		id: '2',
		radioType: 'income',
		name: 'salary',
		cash: 15000,
		category: 'work',
	},
	{
		id: '3',
		radioType: 'expense',
		name: 'food',
		cash: 700,
		category: 'food',
	},
	{
		id: '4',
		radioType: 'expense',
		name: 'whisky',
		cash: 180,
		category: 'alcohol',
	},
];

function Calculator() {
	const countTotal = (data: any) => {
		const total = data.reduce(
			(total: number, item: any) =>
				item.radioType === 'income'
					? total + item.cash
					: total - item.cash,
			0
		);
		return total;
	};

	const [data, setData] = useState<any[]>([...exampleData]);
	const [total, setTotal] = useState<number>(countTotal(exampleData));

	const styles = {
		color: total >= 0 ? 'rgb(12, 173, 12)' : 'red',
	};

	//non-null assertion operator
	useEffect(() => {
		const json = localStorage.getItem('dataStorage');
		if (localStorage.getItem('dataStorage') === null) {
			setData([...exampleData]);
		} else {
			setData(JSON.parse(json!));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('dataStorage', JSON.stringify(data));
	}, [data]);

	useEffect(() => {
		setTotal(countTotal(data));
	}, [total, data]);

	const addHandle = (values: any) => {
		values.cash = Math.abs(parseFloat(values.cash));
		console.log(values);
		setData([...data, values]);
		values.radioType === 'expense'
			? setTotal(total - values.cash)
			: setTotal(total + values.cash);
	};

	const deleteItem = (id: string) => {
		const newData = data.filter((item) => item.id !== id);
		setData(newData);
		setTotal(countTotal(newData));
	};

	if (data) {
		return (
			<div className="Calculator">
				<div className="total">
					<h2 style={styles}>{total} zł</h2>
				</div>
				<Form addHandle={addHandle} />
				<div className="expenses-container">
					<h3>EXPANSES</h3>
					{data.map(
						(el) =>
							el.radioType === 'expense' && (
								<Item
									key={`expense-${el.id}`}
									category={el.category}
									name={el.name}
									cash={el.cash}
									onClick={() => deleteItem(el.id)}
								/>
							)
					)}
				</div>
				<div className="incomes-container">
					<h3>INCOMES</h3>
					{data.map(
						(el) =>
							el.radioType === 'income' && (
								<Item
									key={`income-${el.id}`}
									category={el.category}
									name={el.name}
									cash={el.cash}
									onClick={() => deleteItem(el.id)}
								/>
							)
					)}
				</div>
			</div>
		);
	}
}

export default Calculator;
