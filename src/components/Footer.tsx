import cn from 'classnames';
import { useTodo } from '../context/AppContext';

export const Footer = () => {
  const {
    counter, filter, todos, handleDelete, setFilter,
  } = useTodo();

  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="TodosCounter">
        {`${counter} items left`}
      </span>

      {/* Active filter should have a 'selected' class */}
      <nav className="filter" data-cy="Filter">
        <a
          href="#/"
          className={cn('filter__link', { selected: filter === 'All' })}
          data-cy="FilterLinkAll"
          onClick={() => setFilter('All')}
        >
          All
        </a>

        <a
          href="#/active"
          className={cn('filter__link',
            { selected: filter === 'Active' })}
          data-cy="FilterLinkActive"
          onClick={() => setFilter('Active')}
        >
          Active
        </a>

        <a
          href="#/completed"
          className={cn('filter__link',
            { selected: filter === 'Completed' })}
          data-cy="FilterLinkCompleted"
          onClick={() => setFilter('Completed')}
        >
          Completed
        </a>
      </nav>

      {/* don't show this button if there are no completed todos */}
      <button
        type="button"
        className="todoapp__clear-completed"
        data-cy="ClearCompletedButton"
        onClick={() => todos.forEach(todo => {
          if (todo.completed) {
            handleDelete(todo);
          }
        })}
        // hidden={!todos.some(todo => todo.completed === true)}
        disabled={!todos.some(todo => todo.completed === true)}
      >
        Clear completed
      </button>
    </footer>
  );
};
