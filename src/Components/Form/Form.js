import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import categories from '../../Data/categories';
import CategoryOption from '../CategoryOption';

function Form({ addHandle }) {
	const { register, handleSubmit, errors } = useForm();
	const [data, setData] = useState({
		radioType: '',
		name: '',
		cash: 0,
		category: '',
	});

	const handleRadioType = (e) => {
		data.radioType = e.target.value;
		setData({ ...data });
	};

	const onSubmit = (values, e) => {
		values.id = Math.random();
		values.cash = Math.abs(parseFloat(values.cash));
		addHandle(values);
		e.target.reset();
	};

	return (
		<form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
			<div className="form__radio">
				<label htmlFor="radioType">Expense</label>
				<input
					type="radio"
					name="radioType"
					value="expense"
					onChange={handleRadioType}
					ref={register({ required: true })}
				/>
			</div>

			<div className="form__radio">
				<label htmlFor="radioType">Income</label>
				<input
					type="radio"
					name="radioType"
					value="income"
					onChange={handleRadioType}
					ref={register({ required: true })}
				/>
			</div>
			{errors.radioType && (
				<p className="error">Choose expense or income</p>
			)}

			<div className="form__group">
				<label htmlFor="name">Name:</label>
				<input
					type="text"
					name="name"
					ref={register({ required: true })}
				/>
			</div>
			{errors.name && (
				<p className="error">Describe your expense or income</p>
			)}

			<div className="form__group">
				<label htmlFor="cash">Cash:</label>
				<input
					type="number"
					name="cash"
					ref={register({ required: true })}
				/>
			</div>
			{errors.cash && <p className="error">{'Enter the amount'}</p>}

			<select
				className="form__select__categories"
				name="category"
				ref={register({ required: true })}
			>
				<option value="">Choose a category...</option>
				{categories.map(
					(el) =>
						el.type === data.radioType && (
							<CategoryOption
								key={`category-${el.id}`}
								value={el.category}
								category={el.category}
							/>
						)
				)}
			</select>
			{errors.category && <p className="error">{'Choose a category'}</p>}

			<button type="submit">ADD</button>
		</form>
	);
}

export default Form;
