const listContainer = document.getElementById('list-container');
const btn = document.getElementById('btn');
const inputbox = document.getElementById('input-box');


btn.addEventListener('click', () => {
    if(inputbox.value === ''){
        alert("It's empty!!!, You must write a task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listContainer.appendChild(li);
        inputbox.value = '';
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span);
        console.log(inputbox.value)
        
    }
    saveData();

})

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();

    }
}, false)
const saveData = () => {
    localStorage.setItem("data",listContainer.innerHTML)
}
const showTask = () => {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();