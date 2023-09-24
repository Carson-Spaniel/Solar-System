import planets from './planets.js'
const container1 = document.querySelector('.container.one');
const image1 = document.querySelector(".container.one #image-container");
const name1 = document.querySelector(".container.one #planetName");
const mass1 = document.querySelector(".container.one #planetMass");
const rings1 = document.querySelector(".container.one #rings");
const des1 = document.querySelector(".container.one #des");
const planetIMGs = document.querySelectorAll(".header img");
const ufo = document.querySelector("#ufo1");

const btnPrev = document.querySelector(".btn.previous");
const btnNext = document.querySelector(".btn.next");

let counter2 = 0;

function showItem(side) {
    const item1 = planets[counter2];
    planetIMGs.forEach(planet=>{
        if(planet.id == counter2+1){
            planet.classList.add('active');
        }
        else{
            planet.classList.remove('active');
        }
    })

    container1.style.opacity = '1';
    container1.classList.add(side + '-hidden');
    
    setTimeout(() => {
        // Update image properties after transition
        image1.src = item1.image;
        name1.textContent = item1.name;
        if (item1.mass) {
            mass1.style.display = "block";
            mass1.textContent = "Mass: " + item1.mass;
        } else {
            mass1.style.display = "none";
        }
        if (item1.hasRings === "Yes") {
            rings1.style.display = "block";
            rings1.textContent = "Rings: " + item1.hasRings;
        } else {
            rings.style.display = "none";
        }
        des1.textContent = item1.description;
        container1.style.opacity = '0';
        
        
        if (side === "left") {
            container1.classList.remove('left-hidden');
            container1.classList.add('right-hidden');
        } 
        else {
            container1.classList.remove('right-hidden');
            container1.classList.add('left-hidden');
        }
        
        setTimeout(() => {
            container1.style.opacity = '1';
            
            if (side === "left") {
                container1.classList.remove('right-hidden');
            } else {
                container1.classList.remove('left-hidden');
            }
            setTimeout(() => {
                ufo.classList.remove('animate')
            }, 600);
        }, 600);
            
        
    }, 600);
}

document.addEventListener("DOMContentLoaded", () => {
    showItem("left");
});

btnPrev.addEventListener('click', ()=>{
    setTimeout(() => {
        ufo.classList.add('animate')
    }, 200);
    counter2--;
    if (counter2 < 0){
        counter2 = planets.length -1;
        showItem("left");
    }
    else{
        showItem("right");
    }
});

btnNext.addEventListener('click', ()=>{
    ufo.classList.add('animate')
    counter2++;
    if (counter2 > planets.length-1){
        counter2 = 0;
        showItem("right");
    }
    else{
        showItem("left");
    }
    
});

planetIMGs.forEach(planet=>planet.addEventListener('click',()=>{
    ufo.classList.add('animate')
    let counterBefore = counter2;
    counter2 = (planet.id-1);
    if (counterBefore > counter2){
        showItem('right');
    }
    else if (counterBefore == counter2){
        setTimeout(() => {
            ufo.classList.remove('animate')
            setTimeout(() => {
                ufo.classList.add('animate')
            }, 3600);
        }, 200);
    }
    else{
        showItem('left');
    }
}));