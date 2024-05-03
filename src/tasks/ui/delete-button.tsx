export const DeleteButton = (props: { onClick: VoidFunction; text: string }) => {
	return <button onClick={props.onClick}>{props.text}</button>;
};
