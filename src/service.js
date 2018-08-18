import store from 'store';


class TodoService {
    static NAMESPACE = 'todo::' // prefix 用于区分业务的前缀
    todos = []

    create(title) {
        const todo = {
            key: TodoService.NAMESPACE + (new Date()).valueOf(), // 确保key的唯一即可
            title: title,
            completed: false
        };

        this.todos.push(todo);
        store.set(todo.key, todo);
    }
}