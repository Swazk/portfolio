function go(section){

const screens = document.querySelectorAll(".screen")

screens.forEach(s=>{
s.classList.remove("active")
})

const target = document.getElementById(section)

if(target){
target.classList.add("active")
}

history.pushState(
{page:section},
"",
"#"+section
)

}

/* ===============================
BROWSER BACK BUTTON
=============================== */

window.onpopstate = function(event){

const screens = document.querySelectorAll(".screen")

screens.forEach(s=>{
s.classList.remove("active")
})

let page="home"

if(event.state && event.state.page){
page=event.state.page
}
else if(location.hash){
page=location.hash.replace("#","")
}

const target=document.getElementById(page)

if(target){
target.classList.add("active")
}

}


window.onload=function(){

let page=location.hash.replace("#","")

if(!page){
page="home"
}

go(page)

initGalaxy()

initTimelineAnimation()

initProjectTilt()

}


function initGalaxy(){

const canvas=document.querySelector("#galaxy")

if(!canvas) return

const scene=new THREE.Scene()

const camera=new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
)

const renderer=new THREE.WebGLRenderer({
canvas:canvas,
alpha:true
})

renderer.setSize(window.innerWidth,window.innerHeight)

camera.position.z=5

const starsGeometry=new THREE.BufferGeometry()

const starCount=6000

const positions=[]

for(let i=0;i<starCount;i++){

positions.push((Math.random()-0.5)*300)
positions.push((Math.random()-0.5)*300)
positions.push((Math.random()-0.5)*300)

}

starsGeometry.setAttribute(
"position",
new THREE.Float32BufferAttribute(positions,3)
)

const starsMaterial=new THREE.PointsMaterial({
color:0xffffff,
size:0.7
})

const starMesh=new THREE.Points(starsGeometry,starsMaterial)

scene.add(starMesh)

function animate(){

requestAnimationFrame(animate)

starMesh.rotation.y+=0.0006
starMesh.rotation.x+=0.0003

renderer.render(scene,camera)

}

animate()

}


function initTimelineAnimation(){

const items=document.querySelectorAll(".timeline-content")

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){
entry.target.classList.add("show")
}

})

},{
threshold:0.3
})

items.forEach(item=>{
observer.observe(item)
})

}


function initProjectTilt(){

const cards=document.querySelectorAll(".card")

cards.forEach(card=>{

card.addEventListener("mousemove",e=>{

const rect=card.getBoundingClientRect()

const x=e.clientX-rect.left
const y=e.clientY-rect.top

const centerX=rect.width/2
const centerY=rect.height/2

const rotateX=(y-centerY)/10
const rotateY=(centerX-x)/10

card.style.transform=
`rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`

})

card.addEventListener("mouseleave",()=>{

card.style.transform="rotateX(0) rotateY(0)"

})

})

}


function toggleChat(){

const chat=document.getElementById("chatbot")

if(!chat) return

if(chat.style.display==="flex"){
chat.style.display="none"
}
else{
chat.style.display="flex"
}
}
```
