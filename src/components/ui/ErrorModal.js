import classes from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

function ErrorModal(props) {
	return (
		<div>
			<div className={classes.backdrop} onClick={props.onHandleError} />
			<Card className={classes.modal}>
				<header className={classes.header}>
					<h2>{props.title}</h2>
				</header>
				<div className={classes.content}>
					<p>{props.message}</p>
				</div>
				<footer className={classes.actions}>
					<Button onClick={props.onHandleError}>Okay</Button>
				</footer>
			</Card>
		</div>
	);
}

export default ErrorModal;
