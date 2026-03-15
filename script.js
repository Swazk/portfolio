function go(id){

document.querySelectorAll(".screen")
.forEach(s=>s.classList.remove("active"))

document.getElementById(id).classList.add("active")

}

function openCert(file){

window.open(file)

}

GitHubCalendar(".calendar","Swazk")

const icon=document.getElementById("chatIcon")
const chat=document.getElementById("chatWindow")

icon.onclick=()=>{

chat.style.display=
chat.style.display==="block"?"none":"block"

}

const input=document.getElementById("chatInput")

input.addEventListener("keypress",async function(e){

if(e.key==="Enter"){

let text=input.value

document.getElementById("chatMessages").innerHTML+=
"<p><b>You:</b>"+text+"</p>"

const res=await fetch("http://localhost:3000/chat",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
message:text
})

})

const data=await res.json()

document.getElementById("chatMessages").innerHTML+=
"<p><b>AI:</b>"+data.reply+"</p>"

input.value=""

}

})
