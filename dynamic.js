const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

// const button=document.querySelector.("button");/

function addTask(){
    if(inputBox.value==""){
        alert('Please enter a task');
}
else{
    let li = document.createElement("li") ;  
    li.innerHTML=inputBox.value;
    listContainer.appendChild(li);

    let span=document.createElement("span")
    span.innerHTML="\u00d7"
    li.appendChild(span);
}

}

 listContainer.addEventListener("click", (e)=>{
            if(e.target.tagname === "LI"){
                e.target.classList.toggle("checked");
            }
            else if(e.target.tagName === "SPAN"){
                e.target.parentElement.remove();
            }
 },false);
