const inputList = document.querySelector("#inputList")
const taskTitle = document.querySelector("#taskTitle")
const taskInfo = document.querySelector("#taskInfo")
const addBtn = document.querySelector("#addBtn")
const taskList = document.querySelector("#taskList")

inputList.addEventListener("submit", onSubmit)

function onSubmit(e) {
	e.preventDefault()

    console.log("this thing is called")

	const li = document.createElement("li")
	li.appendChild(
		document.createTextNode(`${taskTitle.value} \n ${taskInfo.value}`)
	)

	taskList.appendChild(li)

	taskTitle.value = ""
	taskInfo.value = ""
}
