const intro = document.getElementById("screen-intro");
const main = document.getElementById("screen-main");
const startBtn = document.getElementById("start-btn");
const steps = [...document.querySelectorAll(".step")];

const herName = "KIRTI";
const yourName = "SWAPNIL";

document.addEventListener("DOMContentLoaded", () => {
  const herEl = document.getElementById("her-name");
  const yourEl = document.getElementById("your-name");

  if (herEl) herEl.textContent = herName;
  if (yourEl) yourEl.textContent = yourName;
});

const music = document.getElementById("music");
const heartbeat = document.getElementById("heartbeat");

let current = 0;

startBtn.addEventListener("click", () => {
  intro.classList.add("hidden");
  main.classList.remove("hidden");

  music.volume = 0;
  music.play().catch(()=>{});
  heartbeat.volume = 0.2;
  heartbeat.play().catch(()=>{});

  fadeMusic();
  petalRain();
  roseRain();
  startSteps();
});

function fadeMusic(){
  let v=0;
  const f=setInterval(()=>{
    if(v<0.6){v+=.04;music.volume=v}else clearInterval(f);
  },200);
}

function startSteps(){
  steps.forEach(s=>s.classList.remove("active"));
  current=0;
  steps[0].classList.add("active");
  setTimeout(nextStep,5000);
}

function nextStep(){
  steps[current].classList.remove("active");
  current++;
  if(steps[current]){
    steps[current].classList.add("active");
    setTimeout(nextStep,5000);
  }
}

document.querySelectorAll(".card").forEach(card=>{
  card.addEventListener("click",()=>{
    card.querySelectorAll(".hidden-text").forEach(t=>t.classList.add("show"));
  });

  card.addEventListener("mousemove",e=>{
    const r=card.getBoundingClientRect();
    const x=(e.clientX-r.left-r.width/2)/20;
    const y=(e.clientY-r.top-r.height/2)/20;
    card.style.transform=`rotateX(${-y}deg) rotateY(${x}deg)`;
  });
  card.addEventListener("mouseleave",()=>{
    card.style.transform="rotateX(0) rotateY(0)";
  });
});

/* 🌸 PETAL RAIN */
function petalRain(){
  setInterval(()=>{
    const p=document.createElement("div");
    p.className="petal";
    p.textContent="🌸";
    p.style.left=Math.random()*100+"vw";
    p.style.fontSize=16+Math.random()*18+"px";
    p.style.animationDuration=7+Math.random()*6+"s";
    document.body.appendChild(p);
    setTimeout(()=>p.remove(),13000);
  },500);
  
}

/* 🌹 ROSE RAIN */
function roseRain(){
  setInterval(()=>{
    const r = document.createElement("div");
    r.className = "rose";
    r.textContent = "🌹";
    r.style.left = Math.random()*100 + "vw";
    r.style.fontSize = 20 + Math.random()*22 + "px";
    r.style.animationDuration = 9 + Math.random()*6 + "s";
    document.body.appendChild(r);
    setTimeout(()=>r.remove(),16000);
  }, 900); // slower than petals = premium feel
}


/* ✨ SPARKLE */
let last=0;
document.addEventListener("mousemove",e=>{
  if(Date.now()-last<40)return;
  last=Date.now();
  const s=document.createElement("div");
  s.className="sparkle";
  s.style.left=e.clientX+"px";
  s.style.top=e.clientY+"px";
  document.body.appendChild(s);
  setTimeout(()=>s.remove(),1000);
});
