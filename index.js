
// history clear

document.getElementById("btn-clear").addEventListener("click",function(){


})



// complete button function
function handleTaskComplete (id

){
    const btn =document.getElementById(id)
btn.addEventListener("click", function(){
alert("Board updated successfully");

    const taskElement =document.getElementById("task");
    const value = parseInt(taskElement . innerText);
    taskElement.innerText=value -1 ;

    const sumElement =document.getElementById("sum-element");
    const sumValue = parseInt(sumElement .innerText);
    sumElement.innerText=sumValue + 1 ;

    btn.disabled = true;
    btn.style.opacity = "0.5";
    btn.style.cursor = "not-allowed";


    if(taskElement > 0){
        alert("always positive")
         return;
    }
})
 
}


handleTaskComplete("btn-1");
handleTaskComplete("btn-2");
handleTaskComplete("btn-3");
handleTaskComplete("btn-4");
handleTaskComplete("btn-5");
handleTaskComplete("btn-6");








// document.getElementById("complete-btn").addEventListener("click",function(){
//      alert("Board update successfully")
//   if(value="123"){
//     const result=document.getElementById("task").innerText;
//     const converted = parseInt(result);
//     const final= converted  - 1;
    
//     document.getElementById("task").innerText = final ;
    
//     const add = document.getElementById("sum-element").innerText;
//     const convertedvalu = parseInt(add);
//     const sum= convertedvalu + 1; 

//     document.getElementById("sum-element").innerText = sum ;

//      const btn = document.getElementById("complete-btn");
//      btn.disabled = true;
//     btn.style.opacity = "0.5";
//     btn.style.cursor = "not-allowed";
//   }
//    else{
//     alert("error");
//    }

// })

