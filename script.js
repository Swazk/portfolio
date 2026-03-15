function go(id){

document.querySelectorAll(".screen")
.forEach(s=>s.classList.remove("active"))

document.getElementById(id).classList.add("active")

}

function openCert(file){
window.open(file)
}

GitHubCalendar(".calendar","Swazk")

const scene=new THREE.Scene()

const camera=new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
)

const renderer=new THREE.WebGLRenderer({
canvas:document.querySelector('#galaxy'),
alpha:true
})

renderer.setSize(window.innerWidth,window.innerHeight)

camera.position.z=5

const starsGeometry=new THREE.BufferGeometry()

const stars=4000

const positions=[]

for(let i=0;i<stars;i++){

positions.push((Math.random()-0.5)*200)
positions.push((Math.random()-0.5)*200)
positions.push((Math.random()-0.5)*200)

}

starsGeometry.setAttribute(
'position',
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

starMesh.rotation.y+=0.0005

renderer.render(scene,camera)

}

animate()

const icon=document.getElementById("chatIcon")
const chat=document.getElementById("chatWindow")

icon.onclick=()=>{
chat.style.display=chat.style.display==="block"?"none":"block"
}

const input=document.getElementById("chatInput")

input.addEventListener("keypress",function(e){

if(e.key==="Enter"){

let text=input.value.toLowerCase()

document.getElementById("chatMessages").innerHTML+=
"<p><b>You:</b>"+text+"</p>"

let reply="I can tell you about Swathi's projects, skills, certificates or contact."

if(text.includes("project"))
reply="Swathi built AI chatbot, fraud detection system and MERN freelancing platform."

if(text.includes("skill"))
reply="Python, Java, JavaScript, React, Node, Cloud and AI."

if(text.includes("certificate"))
reply="She has certifications from AWS, Cisco, Oracle, TCS, Deloitte and JPMorgan."

if(text.includes("contact"))
reply="Email: [swathisenthilkumar017@gmail.com](mailto:swathisenthilkumar017@gmail.com)"

document.getElementById("chatMessages").innerHTML+=
"<p><b>AI:</b>"+reply+"</p>"

input.value=""

}

})
