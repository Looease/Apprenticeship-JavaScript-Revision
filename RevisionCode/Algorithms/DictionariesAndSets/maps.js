const myTodo = new Map();

function addTask(list, task){
  list.set(task, "in progress")
}
addTask(myTodo, "washing up");

function displayTask(list, task){
    if(list.has(task)){
        let result = list.get(task);
        console.log(task + " " + result)      
    }   
    else{
        console.log("Task not in list")
    }   
}
displayTask(myTodo, "cleaning"); // should output "washing up: completed"

function completeTask(list, task){
     list.set(task, "finished")
    //console.log(task + " " + complete);
}
completeTask(myTodo, "washing up");
displayTask(myTodo, "washing up"); // should output "washing up: in progress"



