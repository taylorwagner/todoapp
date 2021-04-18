const form = document.querySelector('#to-do');
let list = document.querySelector('#do-list');

const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
for (let i = 0; i < savedTodos.length; i++) {
  const newListItem = document.querySelector('#item');
    const newLi = document.createElement('li');
    const newBtn = document.createElement('button');
    const newBtn1 = document.createElement('button');

    newLi.innerText = newListItem.value;
    newLi.isCompleted = false;
    newBtn.innerText = "Mark as Completed";
    newBtn.classList.add('cross');
    newBtn1.innerText = "Remove Item";
    newBtn1.classList.add('done');

    newBtn1.addEventListener('click', function(e){
        e.target.parentElement.remove();
    });

    newBtn.addEventListener('click', function(e){
      e.target.parentElement.style.textDecoration = "line-through";
    })


  
  newLi.innerText = savedTodos[i].task;

  newLi.isCompleted = savedTodos[i].isCompleted ? true : false;
  if (newLi.isCompleted) {
    newLi.style.textDecoration = "line-through";
  }
  newLi.append(newBtn, newBtn1);
  list.append(newLi);
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    const newListItem = document.querySelector('#item');
    const newLi = document.createElement('li');
    const newBtn = document.createElement('button');
    const newBtn1 = document.createElement('button');

    newLi.innerText = newListItem.value;
    newLi.isCompleted = false;
    newBtn.innerText = "Mark as Completed";
    newBtn.classList.add('cross');
    newBtn1.innerText = "Remove Item";
    newBtn1.classList.add('done');

    newBtn1.addEventListener('click', function(e){
        e.target.parentElement.remove();
    });

    newBtn.addEventListener('click', function(e){
      e.target.parentElement.style.textDecoration = "line-through";
    })

    form.reset();
    newLi.append(newBtn, newBtn1);
    list.append(newLi);
    
    savedTodos.push({ task: newLi.innerText, isCompleted: false });
    localStorage.setItem("todos", JSON.stringify(savedTodos));
});
