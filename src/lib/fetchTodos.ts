//  Server action for displaying all the Todos in the available {Also a kind of Get method}

export default async function fetchTodos() {

    try {
        const res = await fetch("http://127.0.0.1:3500/todos")

        const todos: Todo[] = await res.json()

        return todos
    } catch (err) {
        if (err instanceof Error) {console.log(err.stack); console.log(err.message)}
    }
}