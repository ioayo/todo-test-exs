import React from 'react';
import TodoItem from './TodoItem';
import type { Todos, Id } from '../types/todos';

export type Props = {
  todos: Todos,
  onChangeClick: (id: Id) => void,
  onCheckTodoClick: (id: Id) => void,
  onRemoveClick: (id: Id) => void,
};

const TodoList = ({
  todos, onChangeClick, onCheckTodoClick, onRemoveClick,
}: Props) => (
  <ul className="list-group">
    {todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        onChangeClick={onChangeClick}
        onCheckTodoClick={onCheckTodoClick}
        onRemoveClick={onRemoveClick}
      />
    ))}
  </ul>
);
export default TodoList;
