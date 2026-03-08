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


// Open Modal
function openModal(src, text) {
    const modal = document.getElementById("gifModal");
    const modalImg = document.getElementById("fullSizeGif");
    
    // Debug: If this logs 'undefined', your path is wrong
    console.log("Loading image from:", src); 
    
    modalImg.src = src; 
    document.getElementById("caption").innerText = text;
    modal.style.display = "flex";
}

function closeModal() {
    // 5. Hide the modal
    document.getElementById("gifModal").style.display = "none";
}

// 6. Close when clicking background
window.onclick = function(event) {
    const modal = document.getElementById("gifModal");
    if (event.target == modal) {
        closeModal();
    }
}
