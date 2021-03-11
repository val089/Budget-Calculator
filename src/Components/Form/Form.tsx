import React, { useState, FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import categories from '../../Data/categories';
import CategoryOption from '../CategoryOption';

type FormData = {
	radioType: string;
	name: string;
	cash: string;
	category: string;
	id: string;
};

type FormProps = {
	addHandle(parameter: object): void;
};

const Form: FunctionComponent<FormProps> = ({ addHandle }) => {
	const { register, handleSubmit, errors } = useForm<FormData>();
	const [data, setData] = useState({
		radioType: '',
		name: '',
		cash: 0,
		category: '',
	});

	const handleRadioType = (e: React.ChangeEvent<HTMLInputElement>): void => {
		data.radioType = e.currentTarget.value;
		setData({ ...data });
	};

	const onSubmit = handleSubmit((values, e: any) => {
		values.id = uuidv4();
		addHandle(values);
		e.target.reset();
	});

	return (
		<form className="form" onSubmit={onSubmit} noValidate>
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
};

export default Form;
