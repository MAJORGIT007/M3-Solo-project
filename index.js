const washBtn = document.getElementById("wash-btn")
const mowBtn = document.getElementById("mow-btn")
const pullBtn = document.getElementById("pull-btn")
const removeBtn = document.getElementById("remove-btn")
const sendBtn = document.getElementById("send-btn")
const ulEl = document.getElementById("taskSelected")
const paymentMethodsEl = document.getElementById("paymentMethods")
let totalAmtEl = document.getElementById("totalAmount")
let sum = 0
let taskArr = []
let taskNameArr = []
/*let taskArray = []
let taskObject = {
    taskName: "",
    taskCost: 0
}*/

washBtn.addEventListener("click", function () {
    if (taskNameArr.includes("Wash Car")) {

    } else {
        taskArr.push(washBtn.value)
        taskNameArr.push("Wash Car")
        render(taskNameArr, taskArr)
    }
    /*taskObject.taskName = "Wash Car"
    taskObject.taskCost = washBtn.value
    console.log(taskObject)
    taskArray.push(taskObject)
    renderObj(taskArray)*/
})
mowBtn.addEventListener("click", function () {
    if (taskNameArr.includes("Mow Lawn")) {

    } else {
        taskArr.push(mowBtn.value)
        taskNameArr.push("Mow Lawn")
        render(taskNameArr, taskArr)
    }
    /*taskObject.taskName = "Mow Lawn"
    taskObject.taskCost = mowBtn.value
    console.log(taskObject)
    taskArray.push(taskObject)
    renderObj(taskArray)*/
})
pullBtn.addEventListener("click", function () {
    if (taskNameArr.includes("Pull Weeds")) {

    } else {
        taskArr.push(pullBtn.value)
        taskNameArr.push("Pull Weeds")
        render(taskNameArr, taskArr)
    }
    /*taskObject.taskName = "Pull Weeds"
    taskObject.taskCost = pullBtn.value
    console.log(taskObject)
    taskArray.push(taskObject)
    renderObj(taskArray)*/
})

//removeBtn.addEventListener("click", function () {
//    console.log(indexOf)
//})

sendBtn.addEventListener("click", function () {
    totalAmtEl.innerHTML = "$0"
    taskArr = []
    taskNameArr = []
    taskArray = []
    render(taskArr, taskNameArr)
    //renderObj(taskArray)
    paymentMethodsEl.innerHTML = ""
})

function render(arrOne, arrTwo) {
    ulEl.innerHTML = ""
    sum = 0
    for (let i = 0; i < arrOne.length; i++) {
        ulEl.innerHTML += `
            <li class="taskList">
                <div class="taskList-left">
                <p>${arrOne[i]}</p>
                <button class="remove-btn" id="remove-btn">Remove</button>
                </div>
                <p><span class="greyOut">$</span>${arrTwo[i]}</p>
            </li>
        `
        sum += parseInt(arrTwo[i])
        totalAmtEl.innerHTML = `
            $${sum}
        `
    }
    paymentMethodsEl.innerHTML = "We accept cash, credit card, or Paypal"
    console.log(arrOne)
}

/*function renderObj(arr) {
    ulEl.innerHTML = ""
    sum = 0
    for (let i = 0; i < arr.length; i++) {
        ulEl.innerHTML += `
            <li class="taskList">
                <div class="taskList-left">
                <p>${arr[i].taskName}</p>
                <button class="remove-btn" id="remove-btn">Remove</button>
                </div>
                <p><span class="greyOut">$</span>${arr[i].taskCost}</p>
            </li>
        `
        sum += parseInt(arr[i].taskCost)
        totalAmtEl.innerHTML = `
            $${sum}
        `
    }
    paymentMethodsEl.innerHTML = "We accept cash, credit card, or Paypal"
    console.log(arr)
}
*/
