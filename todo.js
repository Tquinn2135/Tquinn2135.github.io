const todos = JSON.parse(localStorage.getItem('todos')) || []
const addButton = document.getElementById('addButton')
const newTodoInput = document.getElementById('new-todo')
const todoList = document.querySelector('.todo-list')

const renderTodos = () => {
    todoList.innerHTML = ''
    todos.forEach(todo => {
        const li = document.createElement('li')
        li.textContent = todo.Text
        todoList.append(li)
    })
}
renderTodos()

addButton.addEventListener('click', () => {
    const newTodoText = newTodoInput.value
    if (newTodoText !== '') {
        const newTodo = { Text: newTodoText, Completed: false }
        todos.push(newTodo)
        localStorage.setItem('todos', JSON.stringify(todos))
        renderTodos()
        newTodoInput.value = ''
    }
})