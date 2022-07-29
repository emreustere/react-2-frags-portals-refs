import React, { useState, useRef } from "react";
import Card from "../ui/Card";
import classes from "./AddUser.module.css";
import Button from "../ui/Button";
import ErrorModal from "../ui/ErrorModal";
import Wrapper from "../helpers/Wrapper";

function AddUser(props) {
	const inputUsernameRef = useRef();
	const inputAgeRef = useRef();

	const [error, setError] = useState();
	const [enteredUsername, setEnteredUsername] = useState("");
	const [enteredAge, setEnteredAge] = useState("");

	function addUserHandler(event) {
		event.preventDefault();
		setEnteredUsername(inputUsernameRef.current.value);
		setEnteredAge(inputAgeRef.current.value);

		if (
			enteredUsername.trim().length === 0 ||
			enteredAge.trim().length === 0
		) {
			setError({
				title: "Invalid input.",
				message:
					"Please enter a valid name and age (non-empty values).",
			});
			return;
		}
		if (+enteredAge < 1) {
			setError({
				title: "Invalid input.",
				message: "Please enter a valid age (age > 1).",
			});
			return;
		}
		props.onAddUser(enteredUsername, enteredAge);
		setEnteredUsername("");
		setEnteredAge("");
	}

	function errorHandler() {
		setError(null);
	}

	function usernameChangeHandler(event) {
		setEnteredUsername(event.target.value);
	}
	function ageChangeHandler(event) {
		setEnteredAge(event.target.value);
	}

	return (
		<Wrapper>
			{error && (
				<ErrorModal
					onConfirm={errorHandler}
					title={error.title}
					message={error.message}
				/>
			)}
			<Card className={classes.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="username">Username</label>
					<input
						id="username"
						type="text"
						ref={inputUsernameRef}
						value={enteredUsername}
						onChange={usernameChangeHandler}
					/>
					<label htmlFor="age">Age (Years)</label>
					<input
						id="age"
						type="number"
						ref={inputAgeRef}
						value={enteredAge}
						onChange={ageChangeHandler}
					/>
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</Wrapper>
	);
}

export default AddUser;
