import { TasksList } from "./tasks/ui/tasks-list";
import { useTasks } from "./tasks/model/use-tasks.ts";
import { CreateTaskForm } from "./tasks/ui/create-task-from.tsx";
import { TaskItem } from "./tasks/ui/task-item.tsx";
import { UserSelect } from "./user/ui/user-select.tsx";
import { getFromStorage, saveToStorage } from "./lib/storage.ts";
import { DeleteButton } from "./tasks/ui/delete-button.tsx";
import { TaskCheckbox } from "./tasks/ui/task-checkbox.tsx";

const STORAGE_KEY = "tasks";

export function App() {
	const { addTask, tasks, toggleCheckTask, removeTask, updateOwner } = useTasks({
		getDefaultTasks: () => getFromStorage(STORAGE_KEY, []),
		saveToStorage: (tasks) => saveToStorage(STORAGE_KEY, tasks),
	});

	return (
		<>
			<CreateTaskForm onCreate={addTask} />
			<TasksList
				tasks={tasks}
				renderTask={(task) => (
					<TaskItem
						actions={
							<>
								<TaskCheckbox done={task.done} onToggleDone={() => toggleCheckTask(task.id)} />
								<DeleteButton onClick={() => removeTask(task.id)} text={"Delete task"} />
								<UserSelect
									userId={task.ownerId}
									onChangeUserId={(ownerId) => updateOwner(task.id, ownerId)}
								/>
							</>
						}
						title={task.title}
					/>
				)}
			/>
		</>
	);
}
