const todoInput = document.querySelector('#todo-input')

const button = document.querySelector('#add-todo')
const todoListElement = document.querySelector('#todo-list')

const todoList = [
  { title : 'Study More', isCompleted : true},
  { title : 'Stay on your plan', isCompleted : false}
]

button.addEventListener('click', addTodo)

function addTodo(){
  const newTodo = {
    title: todoInput.value ,
    isCompleted: false
  }
  todoList.push(newTodo)
  todoInput.value = ''

  render()
}

function setCompleted(index) {
  todoList[index].isCompleted = !todoList[index].isCompleted
}

function removeTodo(index) {
  todoList.splice(index,1)
  render()
}

function render(){
  todoListElement.innerHTML = ''
  todoList.forEach((todoItem, index) => {
    
    const todoElement = document.createElement('li')

    const checkBox = makeCheckbox(todoItem, index)
    const removeBtn = makeRemoveButton(index)

    todoElement.innerText = todoItem.title
    todoElement.append(checkBox, removeBtn)
    todoListElement.append(todoElement)
  })
}

function makeCheckbox(todoItem, index){

  const checkBox = document.createElement('input')
  checkBox.type = 'checkbox'
  checkBox.checked = todoItem.isCompleted
  checkBox.addEventListener('change', () => setCompleted(index))
  return checkBox
}

function makeRemoveButton(index) {
  const removeBtn = document.createElement('button')
  removeBtn.innerText = 'Remove'
  removeBtn.classList.add('remove')
  removeBtn.addEventListener('click',() => removeTodo(index))

  return removeBtn
}

render()


// const todoInput = document.querySelector('#todo-input')
// const button = document.querySelector('#add-todo')
// const todoListElement = document.querySelector('#todo-list')

// const todoList = [
//     { title: 'Build me', isCompleted: true },
//     { title: 'I should show on the screen', isCompleted: false },
// ]

// button.addEventListener('click', addTodo)

// function addTodo() {
//     const newTodo = {
//         title: todoInput.value,
//         isCompleted: false
//     }

//     todoList.push(newTodo)
//     todoInput.value = ''

//     render()
// }

// function removeTodo(index) {
//     todoList.splice(index, 1)
//     render()
// }

// function setCompleted(index) {
//     todoList[index].isCompleted = !todoList[index].isCompleted
//     render()
// }

// function render() {
//     todoListElement.innerHTML = ''
//     todoList.forEach((todoItem, index) => {
//         const todoElement = document.createElement('li')

//         const checkbox = makeCheckbox(todoItem, index)
//         const removeBtn = makeRemoveButton(index)

//         todoElement.innerText = todoItem.title
//         todoElement.append(checkbox)
//         todoElement.append(removeBtn)
//         todoListElement.append(todoElement)
//     })
// }

// function makeCheckbox(todoItem, index) {
//     const checkbox = document.createElement('input')
//     checkbox.type = 'checkbox'
//     checkbox.checked = todoItem.isCompleted
//     checkbox.addEventListener('change', () => setCompleted(index))
//     return checkbox
// }

// function makeRemoveButton(index) {
//     const removeBtn = document.createElement('button')
//     removeBtn.innerText = 'Remove'
//     removeBtn.classList.add('remove')
//     removeBtn.addEventListener('click', () => removeTodo(index))
//     return removeBtn
// }
