import { useState } from "react";

const OrderForm = ({onSubmit}) => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		console.log("handleChange")
		console.log("form prev state")
		console.log(formData)
		console.log("form update",name, value)
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const data = { ...formData }
		onSubmit(data)
		console.log(formData);
	};

	return (
		<div>
		<form onSubmit={handleSubmit}>
			<label>
				Name:
				<input
					type="text"
					name="name"
					value={formData.name}
					onChange={handleChange}
				/>
			</label>
			<br />
			<label>
				Email:
				<input
					type="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
				/>
			</label>
			<br />
			<label>
				Phone:
				<input
					type="tel"
					name="phone"
					value={formData.phone}
					onChange={handleChange}
				/>
			</label>
			<br />
			<button type="submit">Submit</button>
		</form>

		</div>
	);
};

export default OrderForm;
