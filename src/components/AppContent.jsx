import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import styles from "../styles/modules/app.module.scss";

function AppContent() {
  const todoList = useSelector((state) => state.todo.todoList);
  const filterStatus = useSelector((state) => state.todo.filterStatus);

  const sortedTodList = [...todoList];
  sortedTodList.sort((a, b) => new Date(b.time) - new Date(a.time));

  const filteredTodoList = sortedTodList.filter((item) => {
    if (filterStatus === "all") {
      return true;
    }

    return item.status === filterStatus;
  });

  return (
    <div className={styles.content__wrapper}>
      {filteredTodoList && filteredTodoList.length > 0 ? (
        filteredTodoList.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      ) : (
        <p className={styles.emptyText}>No Todos</p>
      )}
    </div>
  );
}

export default AppContent;
