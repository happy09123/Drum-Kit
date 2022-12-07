document.querySelectorAll('.drum').forEach(element => {
    element.addEventListener('click', function() {
        const buttonInnerHTML = this.innerHTML;
        
        playAudio(buttonInnerHTML)
        animateButton(buttonInnerHTML)
    })
});


document.addEventListener('keypress', function(e) {
    playAudio(e.key)
    animateButton(e.key)
})

function playAudio(letter) {
    let audio = new Audio('');
    const sounds = {
        'q': 'tom-1', 'w': 'tom-2', 
        'e': 'tom-3', 'a': 'tom-4', 
        's': 'snare', 'd': 'crash', 
        'z': 'kick-bass'
    }
    audio = new Audio(`sounds/${sounds[letter]}.mp3`)
    audio.play()
}

function animateButton(key) {
    const currentButton = document.querySelector(`.${key}`);
    currentButton.classList.add('pressed')
    setTimeout(function () {
        currentButton.classList.remove('pressed')
    }, 100)
}

// const audio = new Audio('sounds/tom-2.mp3');
// audio.play()