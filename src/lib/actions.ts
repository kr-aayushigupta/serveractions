'use server'

import { revalidatePath } from "next/cache"


// Add todo server action

export async function addTodo(data: FormData) {

    const title = data.get("title")

    await fetch('http://127.0.0.1:3500/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId: 1, title, completed: false,
        })
    })

    revalidatePath('/') // revalidating so that newer data is displayed immediately {basically handling caching}
}


// Delete todo server action

export async function deleteTodo(
    todo: Todo
) {
    const res = await fetch(`http://127.0.0.1:3500/todos/${todo.id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: todo.id
        })
    })

    await res.json()
    revalidatePath('/') // revalidating so that newer data is displayed immediately {basically handling caching}
}


// Update todo server action

export async function updateTodo(
    todo: Todo
) {
    const res = await fetch(`http://127.0.0.1:3500/todos/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ...todo, completed: !todo.completed
        })
    })

    await res.json()
    revalidatePath('/') // revalidating so that newer data is displayed immediately {basically handling caching}
}
