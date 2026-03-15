function go(id){

document.querySelectorAll(".screen")
.forEach(s=>s.classList.remove("active"))

document.getElementById(id).classList.add("active")

}

function openCert(file){

window.open(file)

}

GitHubCalendar(".calendar","Swazk")


const canvas=document.querySelector("#galaxy")

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

const starGeometry=new THREE.BufferGeometry()

const stars=5000

const positions=[]

for(let i=0;i<stars;i++){

positions.push((Math.random()-0.5)*200)
positions.push((Math.random()-0.5)*200)
positions.push((Math.random()-0.5)*200)

}

starGeometry.setAttribute(
"position",
new THREE.Float32BufferAttribute(positions,3)
)

const starMaterial=new THREE.PointsMaterial({
color:0xffffff,
size:0.7
})

const starMesh=new THREE.Points(starGeometry,starMaterial)

scene.add(starMesh)

function animate(){

requestAnimationFrame(animate)

starMesh.rotation.y+=0.0005

renderer.render(scene,camera)

}

animate()


const sphereCanvas=document.getElementById("sphere")

if(sphereCanvas){

const scene2=new THREE.Scene()

const camera2=new THREE.PerspectiveCamera(
75,
window.innerWidth/500,
0.1,
1000
)

const renderer2=new THREE.WebGLRenderer({
canvas:sphereCanvas,
alpha:true
})

renderer2.setSize(window.innerWidth,500)

camera2.position.z=5

const geometry=new THREE.SphereGeometry(1.5,32,32)

const material=new THREE.MeshBasicMaterial({
wireframe:true,
color:0x38bdf8
})

const sphere=new THREE.Mesh(geometry,material)

scene2.add(sphere)

function animateSphere(){

requestAnimationFrame(animateSphere)

sphere.rotation.y+=0.01

sphere.rotation.x+=0.003

renderer2.render(scene2,camera2)

}

animateSphere()

}


const icon=document.getElementById("chatIcon")
const chat=document.getElementById("chatWindow")

icon.onclick=()=>{

chat.style.display=
chat.style.display==="block"?"none":"block"

}

const input=document.getElementById("chatInput")

input.addEventListener("keypress",function(e){

if(e.key==="Enter"){

let text=input.value.toLowerCase()

document.getElementById("chatMessages").innerHTML+=
"<p><b>You:</b>"+text+"</p>"

let reply="I can help you explore Swathi's portfolio."

if(text.includes("project"))
reply="Swathi built AI chatbot, fraud detection system, MERN freelancing platform and a Google GenAI health assistant."

else if(text.includes("skill"))
reply="She works with Python, Java, JavaScript, React, Node.js, AI and Cloud."

else if(text.includes("certificate"))
reply="She holds certifications from AWS, Cisco, Oracle, TCS, Infosys, JPMorgan and Deloitte."

else if(text.includes("contact"))
reply="You can contact Swathi using the icons in the contact section."

document.getElementById("chatMessages").innerHTML+=
"<p><b>Bot:</b>"+reply+"</p>"

input.value=""

}

})


const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show")

}

})

})

document.querySelectorAll(".timeline-content")
.forEach(el=>observer.observe(el))
