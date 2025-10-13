// Get the list from local storage
const todos = JSON.parse(localStorage.getItem('todo-list')) || []

// Add a new item to the list
todos.push({ text: input.value, completed: false })

// Save the list to local storage
localStorage.setItem('todo-list', JSON.stringify(todos))

// Clear the li's before we recreate them
todoList.innerHTML = ''

// Create and add new list items to the DOM
const li = document.createElement('li')
li.textContent = todo.text
todoList.append(li)

const toDoItems = [
    { text: 'Learn JavaScript', completed: false },
    { text: 'Build a to-do app', completed: false },
    { text: 'Profit!', completed: false }
]

toDoItems.forEach(toDoItems => console.log(toDoItems))



// store items in local storage
localStorage.setItem('todo-list', JSON.stringify(todos))

