export const TaskCheckbox = (props: { done: boolean; onToggleDone: VoidFunction }) => {
	return (
		<label>
			<input type="checkbox" checked={props.done} onChange={props.onToggleDone} />
			done
		</label>
	);
};
