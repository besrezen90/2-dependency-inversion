import { ReactNode } from "react";

type TTasksListProps = {
	tasks: {
		id: string;
		title: string;
		done: boolean;
		ownerId?: string;
	}[];
	renderTask: (task: TTasksListProps["tasks"][number]) => ReactNode;
};

export function TasksList({ tasks, renderTask }: TTasksListProps) {
	return (
		<>
			{tasks.map((task) => (
				<div key={task.id}>{renderTask(task)}</div>
			))}
		</>
	);
}
