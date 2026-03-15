function go(section){

document.querySelectorAll(".screen")
.forEach(s=>s.classList.remove("active"))

document.getElementById(section)
.classList.add("active")

history.pushState({page:section},"","#"+section)

}

window.onpopstate=function(e){

let page="home"

if(e.state){
page=e.state.page
}

document.querySelectorAll(".screen")
.forEach(s=>s.classList.remove("active"))

document.getElementById(page)
.classList.add("active")

}

function openCert(file){

window.open(file,"_blank")

}


const chatIcon=document.getElementById("chatIcon")
const chatWindow=document.getElementById("chatWindow")
const chatInput=document.getElementById("chatInput")
const chatMessages=document.getElementById("chatMessages")

chatIcon.onclick=()=>{

chatWindow.style.display=
chatWindow.style.display==="flex"?"none":"flex"

}

chatInput.addEventListener("keypress",function(e){

if(e.key==="Enter"){

let msg=chatInput.value

chatMessages.innerHTML+=
"<div><b>You:</b> "+msg+"</div>"

let reply="You can ask about Swathi's projects, skills, internships, or certifications."

chatMessages.innerHTML+=
"<div><b>Bot:</b> "+reply+"</div>"

chatInput.value=""

}

})


const canvas=document.querySelector("#galaxy")

const scene=new THREE.Scene()

const camera=new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
)

const renderer=new THREE.WebGLRenderer({
canvas:canvas
})

renderer.setSize(window.innerWidth,window.innerHeight)

camera.position.z=5

const starsGeometry=new THREE.BufferGeometry()

const starCount=3000

const pos=[]

for(let i=0;i<starCount;i++){

pos.push((Math.random()-0.5)*200)
pos.push((Math.random()-0.5)*200)
pos.push((Math.random()-0.5)*200)

}

starsGeometry.setAttribute(
"position",
new THREE.Float32BufferAttribute(pos,3)
)

const starsMaterial=new THREE.PointsMaterial({
color:0xffffff,
size:0.7
})

const stars=new THREE.Points(starsGeometry,starsMaterial)

scene.add(stars)

function animate(){

requestAnimationFrame(animate)

stars.rotation.y+=0.0004

renderer.render(scene,camera)

}

animate()


GitHubCalendar(".calendar", "Swazk", {

responsive: true

});
