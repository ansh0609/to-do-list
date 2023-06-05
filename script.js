let input = document.getElementById("input")
let addButton = document.getElementById("addButton")
let addList = document.getElementById("addList")
let err = document.getElementById('err_msg');
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
// console.log(getLI)

let msg = document.createElement("p");
        msg.setAttribute("class", "para")
        msg.innerHTML = "Enter your task of the day....";
        msg.style.textAlign = 'center'
        msg.style.color = 'red'
        addList.appendChild(msg)

itemsArray.forEach(task)
function task(data){
        let createLI = document.createElement("li")
        createLI.setAttribute("id", data)
        createLI.innerHTML= data + "<button class='abc' onclick='rm(this)'>Remove</button>";
        addList.appendChild(createLI)
    }
    
addButton.addEventListener("click", (c)=>{
if(input.value == ""){
    alert("Please enter a correct To-Do")
} 
else{
    itemsArray.push(input.value)
    localStorage.setItem('items', JSON.stringify(itemsArray))
    task(input.value)
    document.title = input.value
    input.value = "";
    // let p_elem = document.querySelector("p")
    // if(p_elem){
    //     let removeMsg = document.querySelector(".para")
    //     removeMsg.remove()
    // }
    // let getLI = document.querySelectorAll("ul li")
    //     console.log(getLI[0].innerHTML)

}

})

function rm(e){
    e.parentNode.remove()

    let abc = JSON.parse(localStorage.getItem("items"))

    let task = e.parentNode.getAttribute("id")
    if(abc.indexOf(task) > -1 ){
        itemsArray.splice(task, 1)
    }
    
    localStorage.setItem('items', JSON.stringify(itemsArray))
    
}
