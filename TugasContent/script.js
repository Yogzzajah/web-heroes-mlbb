let currentSound = null;
const boxes = document.querySelectorAll('.box')
const sounds = document.querySelectorAll('.sound1')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes(){
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box =>{
        const boxTop = box.getBoundingClientRect().top
        if(boxTop < triggerBottom){
            box.classList.add('show')
        }
        else{
            box.classList.remove('show')
        }
    })
}

sounds.forEach(sound1 => {
    sound1.addEventListener('click', ()=>{
        playSound(sound1)
    })
})

function playSound(sound1){
    if(currentSound){
        currentSound.pause();
        currentSound.currentTime = 0;
    }

    const soundId = sound1.getAttribute('sg');
    const sound = document.getElementById(soundId);
    
    if(sound){
        sound.play();
        currentSound = sound;
    }
}



// function togglePlayPause1(audioId, button) {
//     const audio = document.getElementById(audioId);
//     if (audio.paused) {
//       audio.play();
//       button.textContent = "Pause";
//     } else {
//       audio.pause();
//       button.textContent = "Play";
//     }
//   }


// boxes.forEach(box =>{
//     box.addEventListener('click', ()=>{
//         box.classList.add('box')
//         if(box == joy){
//             window.location.href = "joy.html"
//         }
//         else if(box == lylia){
//             window.location.href = "lylia.html"
//         }
//         else if(box == beatrix){

//         }
//     })
// })

