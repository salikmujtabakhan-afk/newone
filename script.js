/*=========================================================
THE JOURNEY TO JULY 19 🌻
Made with 🤍 by Salik
=========================================================*/


/*=========================================================
ELEMENTS
=========================================================*/

const scenes = document.querySelectorAll(".scene");

let currentScene = 0;

const music = document.getElementById("bgMusic");

const loader = document.getElementById("loader");

const yearInput = document.getElementById("yearInput");

const unlockButton = document.getElementById("unlockButton");

const response = document.getElementById("response");

const heart = document.getElementById("heart");

const continueHeart = document.getElementById("continueHeart");

const poem = document.getElementById("poem");

const isThatYou = document.getElementById("isThatYou");

const yesButtons = document.querySelectorAll(".yesButton");



/*=========================================================
LOADER
=========================================================*/

window.addEventListener("load",()=>{

setTimeout(()=>{

loader.style.opacity="0";

loader.style.pointerEvents="none";

setTimeout(()=>{

loader.remove();

},1000);

},3000);

});



/*=========================================================
SCENE MANAGER
=========================================================*/

function showScene(index){

scenes.forEach(scene=>{

scene.classList.remove("active");

});

currentScene=index;

scenes[index].classList.add("active");

window.scrollTo({

top:0,

behavior:"smooth"

});

}



/*=========================================================
NEXT
=========================================================*/

function nextScene(){

showScene(currentScene+1);

}



/*=========================================================
MUSIC
=========================================================*/

function startMusic(){

music.volume=0;

music.play();

let volume=0;

const fade=setInterval(()=>{

volume+=0.02;

music.volume=Math.min(volume,1);

if(volume>=1){

clearInterval(fade);

}

},120);

}



/*=========================================================
PUZZLE
=========================================================*/

function wrongAnswer(){

response.style.color="#ff8080";

response.innerHTML="You know... Think harder. 🤍";

yearInput.value="";

yearInput.animate([

{

transform:"translateX(-8px)"

},

{

transform:"translateX(8px)"

},

{

transform:"translateX(-8px)"

},

{

transform:"translateX(8px)"

},

{

transform:"translateX(0)"

}

],

{

duration:400

});

}



function correctAnswer(){

response.style.color="#9bff9b";

response.innerHTML="Correct 🤍";

unlockButton.disabled=true;

unlockButton.style.opacity=".6";

startMusic();

goldFlash();

setTimeout(()=>{

showScene(1);

},1700);

}



function checkPuzzle(){

const answer=yearInput.value.trim();

if(answer==="2018"){

correctAnswer();

}

else{

wrongAnswer();

}

}



unlockButton.addEventListener("click",checkPuzzle);

yearInput.addEventListener("keypress",(e)=>{

if(e.key==="Enter"){

checkPuzzle();

}

});



/*=========================================================
GOLD FLASH
=========================================================*/

function goldFlash(){

const flash=document.createElement("div");

flash.style.position="fixed";

flash.style.left=0;

flash.style.top=0;

flash.style.width="100%";

flash.style.height="100%";

flash.style.background="rgba(255,215,0,.35)";

flash.style.zIndex="999";

flash.style.pointerEvents="none";

document.body.appendChild(flash);

flash.animate([

{

opacity:0

},

{

opacity:1

},

{

opacity:0

}

],{

duration:1200

});

setTimeout(()=>{

flash.remove();

},1200);

}



/*=========================================================
HEART
=========================================================*/

heart.addEventListener("click",()=>{

heart.style.pointerEvents="none";

heart.animate([

{

transform:"scale(1)"

},

{

transform:"scale(1.4)"

},

{

transform:"scale(.2)"

}

],{

duration:1200,

fill:"forwards"

});

setTimeout(()=>{

heart.classList.add("sunflower");

heart.innerHTML="🌻";

heart.style.transform="scale(1)";

},1100);

setTimeout(()=>{

continueHeart.classList.remove("hidden");

},2200);

});



/*=========================================================
CONTINUE HEART
=========================================================*/

continueHeart.addEventListener("click",()=>{

showScene(2);

setTimeout(()=>{

poemAnimation();

},500);

});



/*=========================================================
POEM
=========================================================*/

function poemAnimation(){

const lines=document.querySelectorAll(".poem-line");

lines.forEach((line,index)=>{

setTimeout(()=>{

line.style.opacity=1;

line.style.transform="translateY(0)";

},index*1800);

});

setTimeout(()=>{

isThatYou.classList.remove("hidden");

},8500);

}



/*=========================================================
POEM BUTTONS
=========================================================*/

yesButtons.forEach(button=>{

button.addEventListener("click",()=>{

showScene(3);

});

});
/*=========================================================
BABY PHOTO
=========================================================*/

const babyPhoto = document.getElementById("babyPhoto");
const kissEmoji = document.getElementById("kissEmoji");
const continueBaby = document.getElementById("continueBaby");

if(babyPhoto){

let kissed = false;

babyPhoto.addEventListener("click",()=>{

if(kissed) return;

kissed = true;

kissEmoji.style.display = "block";

babyPhoto.animate([

{
transform:"scale(1)"
},

{
transform:"scale(1.06)"
},

{
transform:"scale(1)"
}

],{

duration:600

});

setTimeout(()=>{

continueBaby.classList.remove("hidden");

},1200);

});

}

continueBaby?.addEventListener("click",()=>{

showScene(4);

showLifeCards();

});



/*=========================================================
HER JOURNEY
=========================================================*/

const lifeCards = document.querySelectorAll(".lifeCard");

const continueLife = document.getElementById("continueLife");

function showLifeCards(){

lifeCards.forEach(card=>{

card.style.display="none";

});

let index=0;

function reveal(){

if(index>=lifeCards.length){

continueLife.classList.remove("hidden");

return;

}

lifeCards[index].style.display="block";

lifeCards[index].animate([

{
opacity:0,
transform:"translateY(40px)"
},

{
opacity:1,
transform:"translateY(0)"
}

],{

duration:700,

fill:"forwards"

});

index++;

setTimeout(reveal,2500);

}

reveal();

}

continueLife?.addEventListener("click",()=>{

showScene(5);

showJourneyCards();

});



/*=========================================================
OUR JOURNEY
=========================================================*/

const journeyCards=document.querySelectorAll(".memoryCard");

const continueJourney=document.getElementById("continueJourney");

function showJourneyCards(){

journeyCards.forEach(card=>{

card.classList.remove("show");

});

let current=0;

function nextCard(){

if(current>=journeyCards.length){

continueJourney.classList.remove("hidden");

return;

}

journeyCards[current].classList.add("show");

journeyCards[current].scrollIntoView({

behavior:"smooth",

block:"center"

});

current++;

setTimeout(nextCard,3000);

}

nextCard();

}

continueJourney?.addEventListener("click",()=>{

showScene(6);

});



/*=========================================================
LETTER
=========================================================*/

const envelope=document.getElementById("envelope");

const letter=document.getElementById("letterPaper");

const continueLetter=document.getElementById("continueLetter");

if(envelope){

envelope.addEventListener("click",()=>{

const flap=document.querySelector(".envelope-flap");

flap.style.transform="rotateX(180deg)";

setTimeout(()=>{

letter.classList.remove("hidden");

typeLetter();

},800);

});

}



/*=========================================================
TYPEWRITER
=========================================================*/

function typeLetter(){

const paragraphs=document.querySelectorAll("#typedLetter p");

paragraphs.forEach(p=>{

const
/*=========================================================
PHOTO GALLERY
=========================================================*/

const photoCards = document.querySelectorAll(".photoCard");
const continueGift = document.getElementById("continueGift");

function revealPhotos(){

    photoCards.forEach(card=>{

        card.style.opacity="0";
        card.style.transform="translateY(50px) rotate(-8deg)";

    });

    photoCards.forEach((card,index)=>{

        setTimeout(()=>{

            card.animate([

                {
                    opacity:0,
                    transform:"translateY(40px) rotate(-8deg)"
                },

                {
                    opacity:1,
                    transform:"translateY(0) rotate(0deg)"
                }

            ],{

                duration:700,
                fill:"forwards"

            });

        },index*500);

    });

}

revealPhotos();

continueGift?.addEventListener("click",()=>{

    showScene(8);

    saveProgress();

});



/*=========================================================
GIFT
=========================================================*/

const giftBox=document.getElementById("giftBox");

const giftReveal=document.getElementById("giftReveal");

giftBox?.addEventListener("click",()=>{

    giftBox.animate([

        {

            transform:"scale(1)"

        },

        {

            transform:"scale(1.2) rotate(12deg)"

        },

        {

            transform:"scale(.9)"

        },

        {

            transform:"scale(1)"

        }

    ],{

        duration:900

    });

    setTimeout(()=>{

        giftReveal.classList.remove("hidden");

        createConfetti();

        createPetals();

    },800);

});



/*=========================================================
CONFETTI
=========================================================*/

function createConfetti(){

    for(let i=0;i<150;i++){

        const confetti=document.createElement("div");

        confetti.className="confetti";

        confetti.style.left=Math.random()*100+"%";

        confetti.style.animationDelay=Math.random()*2+"s";

        confetti.style.background=

        `hsl(${Math.random()*360},80%,60%)`;

        document.body.appendChild(confetti);

        setTimeout(()=>{

            confetti.remove();

        },6000);

    }

}



/*=========================================================
SUNFLOWER PETALS
=========================================================*/

function createPetals(){

    for(let i=0;i<30;i++){

        const petal=document.createElement("div");

        petal.innerHTML="🌻";

        petal.style.position="fixed";

        petal.style.left=Math.random()*100+"%";

        petal.style.top="-50px";

        petal.style.fontSize=

        (20+Math.random()*20)+"px";

        petal.style.pointerEvents="none";

        petal.style.zIndex="999";

        document.body.appendChild(petal);

        petal.animate([

            {

                transform:"translateY(-50px) rotate(0deg)"

            },

            {

                transform:

                `translate(${Math.random()*250-120}px,

                110vh)

                rotate(${Math.random()*720}deg)`

            }

        ],{

            duration:5000+

            Math.random()*3000,

            easing:"linear"

        });

        setTimeout(()=>{

            petal.remove();

        },8000);

    }

}



/*=========================================================
SAVE PROGRESS
=========================================================*/

function saveProgress(){

    localStorage.setItem(

        "birthdayScene",

        currentScene

    );

}



/*=========================================================
RESTORE
=========================================================*/

window.addEventListener("load",()=>{

    const saved=

    localStorage.getItem(

        "birthdayScene"

    );

    if(saved!==null){

        showScene(

            Number(saved)

        );

    }

});



/*=========================================================
SAVE ON CHANGE
=========================================================*/

const observer=new MutationObserver(()=>{

    saveProgress();

});

observer.observe(document.body,{

    subtree:true,

    childList:true

});



/*=========================================================
KEYBOARD
=========================================================*/

document.addEventListener("keydown",(e)=>{

    if(e.key==="ArrowRight"){

        if(currentScene<scenes.length-1){

            showScene(currentScene+1);

        }

    }

    if(e.key==="ArrowLeft"){

        if(currentScene>0){

            showScene(currentScene-1);

        }

    }

});



/*=========================================================
ENDING
=========================================================*/

setTimeout(()=>{

    console.log(

        "%cMade with 🤍 by Salik",

        "font-size:20px;color:#F5C542;"

    );

},1000);