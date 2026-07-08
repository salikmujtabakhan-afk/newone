// ==================================================
// THE JOURNEY TO JULY 19
// JavaScript Version 3.0
// Core Engine
// ==================================================



document.addEventListener(
    "DOMContentLoaded",
    () => {



        // ==========================================
        // GLOBAL VARIABLES
        // ==========================================


        const Journey = {


            currentScene:0,


            totalScenes:9,


            locked:false,


            musicStarted:false,


        };





        // ==========================================
        // SELECTORS
        // ==========================================


        const scenes =
            document.querySelectorAll(".scene");


        const loader =
            document.getElementById("loader");


        const beginButton =
            document.getElementById("beginJourney");


        const musicButton =
            document.getElementById("musicButton");





        // ==========================================
        // LOADER
        // ==========================================


        window.addEventListener(
            "load",
            ()=>{


                setTimeout(()=>{


                    loader.style.opacity="0";


                    setTimeout(()=>{


                        loader.style.display="none";


                    },1500);



                },4000);



            }
        );





        // ==========================================
        // SCENE SYSTEM
        // ==========================================


        function goToScene(number){


            if(Journey.locked)
                return;



            Journey.locked=true;



            scenes.forEach(
                scene=>{


                    scene.classList.remove(
                        "active"
                    );


                }
            );



            setTimeout(()=>{


                const target =
                document.getElementById(
                    `scene${number}`
                );


                if(target){

                    target.classList.add(
                        "active"
                    );


                    Journey.currentScene =
                    number;


                }



                Journey.locked=false;



            },800);



        }






        // ==========================================
        // INTRO BUTTON
        // ==========================================


        beginButton.addEventListener(
            "click",
            ()=>{


                startMusic();


                goToScene(2);


            }
        );





        // ==========================================
        // MUSIC SYSTEM
        // ==========================================


        const ambientAudio =
        document.getElementById(
            "ambientAudio"
        );



        function startMusic(){


            if(
                Journey.musicStarted
            )
            return;



            if(ambientAudio){


                ambientAudio.volume=.25;


                ambientAudio.play()
                .catch(()=>{});


            }


            Journey.musicStarted=true;


        }




        // ==========================================
        // MUSIC BUTTON
        // ==========================================


        let musicPlaying=true;



        musicButton.addEventListener(
            "click",
            ()=>{


                if(!ambientAudio)
                return;



                if(musicPlaying){


                    ambientAudio.pause();


                    musicButton.innerHTML="🔇";


                }

                else{


                    ambientAudio.play();


                    musicButton.innerHTML="♫";


                }


                musicPlaying =
                !musicPlaying;



            }
        );





    }

);
// ==========================================
// SCENE 2 : MEMORY PUZZLE SYSTEM
// ==========================================


const yearInput =
document.getElementById("yearInput");


const unlockButton =
document.getElementById("unlockButton");


const puzzleResponse =
document.getElementById("puzzleResponse");



const correctYear = "2018";



if(unlockButton){


unlockButton.addEventListener(
"click",
()=>{


    const answer =
    yearInput.value.trim();



    if(answer === correctYear){



        puzzleResponse.innerHTML =
        "✨ Memory unlocked...";



        createGoldenBurst();



        setTimeout(()=>{


            goToScene(3);


        },2500);



    }


    else{



        puzzleResponse.innerHTML =
        "Not this chapter... try another memory 🌙";



        yearInput.classList.add(
        "puzzleError"
        );



        setTimeout(()=>{


            yearInput.classList.remove(
            "puzzleError"
            );


        },600);



    }



});


}





// ==========================================
// ENTER KEY SUPPORT
// ==========================================


if(yearInput){


yearInput.addEventListener(
"keypress",
(e)=>{


    if(e.key==="Enter"){


        unlockButton.click();


    }


});


}





// ==========================================
// GOLDEN PARTICLE EFFECT
// ==========================================


function createGoldenBurst(){



    for(
        let i=0;
        i<40;
        i++
    ){



        const particle =
        document.createElement(
        "span"
        );



        particle.className =
        "goldParticle";



        particle.style.left =
        "50%";



        particle.style.top =
        "50%";



        particle.style.setProperty(
        "--x",
        `${(Math.random()-0.5)*400}px`
        );



        particle.style.setProperty(
        "--y",
        `${(Math.random()-0.5)*400}px`
        );



        document.body.appendChild(
        particle
        );



        setTimeout(()=>{


            particle.remove();


        },1500);



    }



}
// ==========================================
// SCENE 3 : HEART TO SUNFLOWER
// ==========================================


const whiteHeart =
document.getElementById("whiteHeart");


const sunflowerReveal =
document.getElementById("sunflowerReveal");


const continueTimeline =
document.getElementById("continueTimeline");


const heartHint =
document.getElementById("heartHint");



let heartOpened = false;



if(whiteHeart){


whiteHeart.addEventListener(
"click",
()=>{


    if(heartOpened)
    return;



    heartOpened=true;



    // Remove hint

    if(heartHint){

        heartHint.innerHTML =
        "A new memory blooms...";

    }




    // Heart transformation

    whiteHeart.style.animation =
    "none";


    whiteHeart.style.transform =
    "scale(0)";


    whiteHeart.style.opacity =
    "0";



    createHeartExplosion();



    setTimeout(()=>{


        if(sunflowerReveal){


            sunflowerReveal.classList.add(
                "show"
            );


        }



        createPetals();



    },1200);





    setTimeout(()=>{


        if(continueTimeline){


            continueTimeline.disabled=false;


        }



    },3500);



});


}





// ==========================================
// HEART LIGHT EXPLOSION
// ==========================================


function createHeartExplosion(){



    const flash =
    document.createElement("div");



    flash.className =
    "heartFlash";



    document.body.appendChild(
    flash
    );



    setTimeout(()=>{


        flash.remove();


    },1500);



}





// ==========================================
// SUNFLOWER PETALS
// ==========================================


function createPetals(){



    for(
        let i=0;
        i<35;
        i++
    ){



        const petal =
        document.createElement(
        "div"
        );



        petal.className =
        "fallingPetal";



        petal.style.left =
        Math.random()*100+"%";



        petal.style.animationDelay =
        Math.random()*3+"s";



        document.body.appendChild(
        petal
        );



        setTimeout(()=>{


            petal.remove();


        },6000);



    }


}





// ==========================================
// CONTINUE BUTTON
// ==========================================


if(continueTimeline){


continueTimeline.addEventListener(
"click",
()=>{


    goToScene(4);



});


}
// ==========================================
// SCENE 4 : HER JOURNEY TIMELINE
// ==========================================


const timelineImage =
document.getElementById("timelineImage");


const timelineTitle =
document.getElementById("timelineTitle");


const timelineDescription =
document.getElementById("timelineDescription");


const previousMemory =
document.getElementById("previousMemory");


const nextMemory =
document.getElementById("nextMemory");


const timelineDots =
document.querySelectorAll(
"#scene4 .timelineDots span"
);


const continueConstellation =
document.getElementById(
"continueConstellation"
);



const memories = [


{

image:"assets/images/01.jpg",

title:"A Little Sunshine",

text:
"Every smile begins somewhere. Long before I met you, you were already making the world a little brighter."

},


{

image:"assets/images/02.jpg",

title:"Growing Dreams",

text:
"Every dream, every little step, every moment helped create the person you are today."

},


{

image:"assets/images/03.jpg",

title:"Becoming You",

text:
"A beautiful soul is created through countless little moments."

},


{

image:"assets/images/04.jpg",

title:"A Story Waiting",

text:
"Somewhere along the way, life was quietly preparing a beautiful chapter."

},


{

image:"assets/images/05.jpg",

title:"The Beginning Of Us",

text:
"Two paths that were once separate slowly found their way toward each other."

}


];



let currentMemory = 0;



function updateTimeline(){



    const memory =
    memories[currentMemory];



    if(timelineImage){

        timelineImage.src =
        memory.image;

    }



    if(timelineTitle){

        timelineTitle.innerHTML =
        memory.title;

    }



    if(timelineDescription){

        timelineDescription.innerHTML =
        memory.text;

    }



    timelineDots.forEach(
    (dot,index)=>{


        dot.classList.toggle(
            "active",
            index===currentMemory
        );


    });


}




if(nextMemory){


nextMemory.addEventListener(
"click",
()=>{


    if(currentMemory <
       memories.length-1){



        currentMemory++;


        updateTimeline();



    }



});


}




if(previousMemory){


previousMemory.addEventListener(
"click",
()=>{


    if(currentMemory>0){


        currentMemory--;


        updateTimeline();


    }


});


}




if(continueConstellation){


continueConstellation.addEventListener(
"click",
()=>{


    goToScene(5);



});


}



updateTimeline();
// ==========================================
// SCENE 5 : CONSTELLATION OF MEMORIES
// ==========================================


const memoryStars =
document.querySelectorAll(
".memoryStar"
);



const memoryModal =
document.getElementById(
"memoryModal"
);



const memoryPhoto =
document.getElementById(
"memoryPhoto"
);



const memoryTitle =
document.getElementById(
"memoryTitle"
);



const memoryText =
document.getElementById(
"memoryText"
);



const closeMemory =
document.getElementById(
"closeMemory"
);



const memoryCount =
document.getElementById(
"memoryCount"
);



const continueMusic =
document.getElementById(
"continueMusic"
);



let foundMemories = [];



const constellationMemories = [


{

image:"assets/images/memory1.jpg",

title:"A Beautiful Moment",

text:
"Some moments look ordinary at first, but become priceless when we look back."

},


{

image:"assets/images/memory2.jpg",

title:"A Little Happiness",

text:
"Small smiles often become the memories we keep forever."

},


{

image:"assets/images/memory3.jpg",

title:"A Special Day",

text:
"Some days stay in our hearts long after they end."

},


{

image:"assets/images/memory4.jpg",

title:"A Favorite Memory",

text:
"Every picture carries a story that words cannot fully explain."

},


{

image:"assets/images/memory5.jpg",

title:"Another Chapter",

text:
"Another beautiful page in a story worth remembering."

},


{

image:"assets/images/memory6.jpg",

title:"A Hidden Smile",

text:
"The little moments are often the ones that mean the most."

},


{

image:"assets/images/memory7.jpg",

title:"A Precious Memory",

text:
"Some memories shine brighter than others."

},


{

image:"assets/images/memory8.jpg",

title:"Our Constellation",

text:
"Eight memories. One beautiful story."

}

];





// ==========================================
// STAR CLICK
// ==========================================


memoryStars.forEach(
(star,index)=>{


star.addEventListener(
"click",
()=>{


    if(foundMemories.includes(index))
    return;



    foundMemories.push(index);



    star.classList.add(
    "found"
    );



    openMemory(
    constellationMemories[index]
    );



    updateMemoryCount();



});


});





function openMemory(memory){



    if(!memoryModal)
    return;



    memoryPhoto.src =
    memory.image;



    memoryTitle.innerHTML =
    memory.title;



    memoryText.innerHTML =
    memory.text;



    memoryModal.classList.add(
    "show"
    );



}





if(closeMemory){


closeMemory.addEventListener(
"click",
()=>{


    memoryModal.classList.remove(
    "show"
    );


});


}





function updateMemoryCount(){



    if(memoryCount){

        memoryCount.innerHTML =
        `${foundMemories.length} / 8`;

    }



    if(foundMemories.length===8){



        if(continueMusic){


            continueMusic.disabled=false;


        }



        createHeartConstellation();



    }


}





// ==========================================
// HEART CONSTELLATION EFFECT
// ==========================================


function createHeartConstellation(){



    const sky =
    document.getElementById(
    "nightSky"
    );



    if(!sky)
    return;



    sky.classList.add(
    "complete"
    );



}





if(continueMusic){


continueMusic.addEventListener(
"click",
()=>{


    goToScene(6);



});


}
// ==========================================
// SCENE 6 : MUSIC BOX EXPERIENCE
// ==========================================


const musicBox =
document.getElementById(
"musicBox"
);



const openMusicBox =
document.getElementById(
"openMusicBox"
);



const floatingPhotos =
document.getElementById(
"floatingPhotos"
);



const continueLetter =
document.getElementById(
"continueLetter"
);



const birthdaySong =
document.getElementById(
"birthdaySong"
);



let musicBoxOpened = false;





if(openMusicBox){


openMusicBox.addEventListener(
"click",
()=>{


    if(musicBoxOpened)
    return;



    musicBoxOpened=true;



    if(musicBox){


        musicBox.classList.add(
        "open"
        );


    }



    playBirthdayMusic();



    createFloatingPhotos();



    setTimeout(()=>{


        if(continueLetter){


            continueLetter.disabled=false;


        }


    },6000);



});


}





// ==========================================
// PLAY MUSIC
// ==========================================


function playBirthdayMusic(){



    if(!birthdaySong)
    return;



    birthdaySong.volume=.35;



    birthdaySong.play()
    .catch(()=>{});



}





// ==========================================
// FLOATING MEMORY PHOTOS
// ==========================================


function createFloatingPhotos(){



    const photos = [


    "assets/images/01.jpg",

    "assets/images/02.jpg",

    "assets/images/03.jpg",

    "assets/images/04.jpg",

    "assets/images/05.jpg"


    ];



    photos.forEach(
    (photo,index)=>{


        setTimeout(()=>{


            const card =
            document.createElement(
            "div"
            );



            card.className =
            "floatingPhoto";



            card.innerHTML = `

            <img src="${photo}">

            <p>
            Memory ${index+1}
            </p>

            `;



            card.style.left =
            Math.random()*80+"%";



            if(floatingPhotos){


                floatingPhotos.appendChild(
                card
                );


            }



            setTimeout(()=>{


                card.remove();


            },12000);



        },index*1200);



    });


}





if(continueLetter){


continueLetter.addEventListener(
"click",
()=>{


    goToScene(7);



});


}
// ==========================================
// SCENE 7 : ROYAL LOVE LETTER
// ==========================================


const openLetter =
document.getElementById(
"openLetter"
);



const envelope =
document.getElementById(
"envelope"
);



const waxSeal =
document.getElementById(
"waxSeal"
);



const letterPaper =
document.getElementById(
"letterPaper"
);



const typewriterLetter =
document.getElementById(
"typewriterLetter"
);



const continueCake =
document.getElementById(
"continueCake"
);



let letterOpened = false;



const letterText = `

Before there was us,

there was you.



A person with your own dreams,

your own stories,

your own little moments

that made you who you are.



I hope you always remember

how special you are.



Thank you for allowing me

to become a small part

of your beautiful journey.



Happy Birthday ❤️



`;





if(openLetter){


openLetter.addEventListener(
"click",
()=>{


    if(letterOpened)
    return;



    letterOpened=true;



    // Seal disappears

    if(waxSeal){


        waxSeal.style.transform =
        "scale(0)";


        waxSeal.style.opacity =
        "0";


    }




    setTimeout(()=>{


        if(envelope){


            envelope.style.opacity =
            "0";


        }



    },800);





    setTimeout(()=>{


        if(letterPaper){


            letterPaper.classList.add(
            "show"
            );


        }



        startTypingLetter();



    },1500);



});


}







// ==========================================
// TYPEWRITER EFFECT
// ==========================================


function startTypingLetter(){



    if(!typewriterLetter)
    return;



    let index=0;



    typewriterLetter.innerHTML="";



    const typing =
    setInterval(
    ()=>{


        typewriterLetter.innerHTML +=
        letterText[index];



        index++;



        if(index >= letterText.length){


            clearInterval(
            typing
            );



            unlockCakeButton();



        }



    },
    45);



}





function unlockCakeButton(){



    setTimeout(()=>{


        if(continueCake){


            continueCake.disabled=false;



        }


    },1000);



}






if(continueCake){


continueCake.addEventListener(
"click",
()=>{


    goToScene(8);



});


}
// ==========================================
// SCENE 8 : BIRTHDAY CAKE EXPERIENCE
// ==========================================


const makeWish =
document.getElementById(
"makeWish"
);



const flame =
document.querySelector(
".flame"
);



const wishMessage =
document.getElementById(
"wishMessage"
);



const continueFinal =
document.getElementById(
"continueFinal"
);



const candleAudio =
document.getElementById(
"candleAudio"
);



let wishMade = false;





if(makeWish){


makeWish.addEventListener(
"click",
()=>{


    if(wishMade)
    return;



    wishMade=true;



    // Blow candle


    if(flame){


        flame.style.animation =
        "none";


        flame.style.opacity =
        "0";


        flame.style.transform =
        "scale(0)";


    }





    if(candleAudio){


        candleAudio.volume=.4;


        candleAudio.play()
        .catch(()=>{});


    }





    createConfetti();





    setTimeout(()=>{


        if(wishMessage){


            wishMessage.classList.add(
            "show"
            );


        }



    },1200);





    setTimeout(()=>{


        if(continueFinal){


            continueFinal.disabled=false;


        }



    },4000);



});


}







// ==========================================
// CONFETTI EFFECT
// ==========================================


function createConfetti(){



    for(
        let i=0;
        i<80;
        i++
    ){



        const piece =
        document.createElement(
        "div"
        );



        piece.className =
        "confetti";



        piece.style.left =
        Math.random()*100+"%";



        piece.style.animationDelay =
        Math.random()*2+"s";



        piece.style.transform =
        `rotate(${Math.random()*360}deg)`;



        document.body.appendChild(
        piece
        );



        setTimeout(()=>{


            piece.remove();


        },5000);



    }


}







if(continueFinal){


continueFinal.addEventListener(
"click",
()=>{


    goToScene(9);



});


}
// ==========================================
// SCENE 9 : FINAL CINEMATIC REVEAL
// ==========================================


const finalScene =
document.getElementById(
"scene9"
);



const loveReveal =
document.getElementById(
"loveReveal"
);



const finalMessage =
document.getElementById(
"finalMessage"
);



const signature =
document.getElementById(
"signature"
);



const restartJourney =
document.getElementById(
"restartJourney"
);



const secretMessage =
document.getElementById(
"secretMessage"
);



let finalStarted=false;





function startFinalReveal(){



    if(finalStarted)
    return;



    finalStarted=true;



    createFinalPetals();


    createFireflies();



}







// ==========================================
// FINAL PETALS
// ==========================================


function createFinalPetals(){



    for(
        let i=0;
        i<50;
        i++
    ){



        const petal =
        document.createElement(
        "div"
        );



        petal.className =
        "finalPetal";



        petal.style.left =
        Math.random()*100+"%";



        petal.style.animationDelay =
        Math.random()*5+"s";



        document.body.appendChild(
        petal
        );



        setTimeout(()=>{


            petal.remove();


        },12000);



    }


}







// ==========================================
// FIREFLIES
// ==========================================


function createFireflies(){



    for(
        let i=0;
        i<30;
        i++
    ){



        const light =
        document.createElement(
        "span"
        );



        light.className =
        "firefly";



        light.style.left =
        Math.random()*100+"%";



        light.style.top =
        Math.random()*70+"%";



        document.body.appendChild(
        light
        );



    }


}







// Start when entering Scene 9


const originalGoToScene =
goToScene;



goToScene=function(number){


    originalGoToScene(number);



    if(number===9){


        setTimeout(()=>{


            startFinalReveal();


        },2000);



    }


};







// ==========================================
// SECRET MESSAGE
// ==========================================


if(secretMessage){


secretMessage.addEventListener(
"click",
()=>{


    secretMessage.innerHTML =
    `

    <p>

    Some stories are written in words.

    </p>

    <p>

    Ours is written in moments.

    </p>

    <strong>

    NGI × STROKPO

    </strong>

    `;



});


}







// ==========================================
// RESTART JOURNEY
// ==========================================


if(restartJourney){


restartJourney.addEventListener(
"click",
()=>{


    location.reload();



});


}