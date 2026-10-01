

// complete button function
function handleTaskComplete (id){

    const btn =document.getElementById(id)
btn.addEventListener("click", function(){
alert("Board updated successfully");


    const taskElement =document.getElementById("task");
    const value = parseInt(taskElement . innerText);

    
if(value <= 0){
        alert("No more tasks available!")
         return;
    }

    taskElement.innerText=value -1 ;

    const sumElement =document.getElementById("sum-element");
    const sumValue = parseInt(sumElement .innerText);
    sumElement.innerText=sumValue + 1 ;

    //btn disable
    btn.disabled = true;
    btn.style.opacity = "0.5";
    btn.style.cursor = "not-allowed";

    // notification 
    const currentTime = new Date().toLocaleTimeString();
    const container = document.getElementById("notification-container");
    const P= document.createElement("P");
    P.className = "mt-4 p-3 text-sm text-gray-700 ";
    P.innerText = `You have Complete The Task Add Dark Mode at ${currentTime}`

    container.appendChild(P);
})
 
}


handleTaskComplete("btn-1");
handleTaskComplete("btn-2");
handleTaskComplete("btn-3");
handleTaskComplete("btn-4");
handleTaskComplete("btn-5");
handleTaskComplete("btn-6");



// Discover

document.getElementById("discover").addEventListener("click",function(){
window.location.href="main.html";

})


// history clear

document.getElementById("btn-clear").addEventListener("click",function(){
const container = document.getElementById("notification");
const container1 = document.getElementById("notification-container");

 container.innerHTML =" ";
 container1.innerHTML =" ";
})



