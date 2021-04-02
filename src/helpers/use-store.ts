import { useContext } from 'react';
import { StoreContext } from './store-context';
import {TodoList} from "../stores/todo-list";

export const useStore = (): TodoList => useContext(StoreContext);