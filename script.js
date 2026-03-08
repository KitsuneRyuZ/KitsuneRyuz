const tabs=document.querySelectorAll(".tab")
const contents=document.querySelectorAll(".tab-content")

tabs.forEach(tab=>{

tab.onclick=()=>{

tabs.forEach(t=>t.classList.remove("active"))
contents.forEach(c=>c.classList.remove("active"))

tab.classList.add("active")

document.getElementById(tab.dataset.tab).classList.add("active")

}

})


function createParticle(){

const p=document.createElement("div")

p.classList.add("particle")

p.style.left=Math.random()*100+"vw"

p.style.animationDuration=5+Math.random()*5+"s"

document.body.appendChild(p)

setTimeout(()=>{

p.remove()

},8000)

}

setInterval(createParticle,250)
