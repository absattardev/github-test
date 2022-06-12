let add = document.getElementById('add');

add.addEventListener('click', addedTask);


function addedTask() {
  let addTask = document.getElementById('addTask').value;

  if (addTask === undefined || addTask === "") {
    alert("Task shouldn't empty please input your task");
  } else {

    let OL = document.getElementById('addList');
    var LI = document.createElement('li');

    
      LI.innerHTML = addTask;


      OL.appendChild(LI);
      document.getElementById('addTask').value = "";

    }
  }


function removeTask(){
  
}
