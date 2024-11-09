let boxesContainer = document.getElementById('sketch-boxes');
let eraseBtn = document.getElementById('erase');

function genBoxes () {
    while (boxesContainer.firstChild) {
        boxesContainer.removeChild(boxesContainer.lastChild)
    }
    let numBoxes = prompt("How many boxes per side?\nAny number lower than 100");
    while (numBoxes > 100) {
        numBoxes = prompt(`Error ${numBoxes} is not a number smaller than 100\nPlease enter a number lower than 100`);
    }
    boxesContainer.style.maxWidth = `${numBoxes*25}px`
    for (let i = 0; i < (Number(numBoxes)*Number(numBoxes)); i++){
        let newBox = document.createElement('div');
        newBox.classList.add('box');
        boxesContainer.appendChild(newBox);
    }
}

function colorBoxes (targetBox) {
    if (targetBox.class = 'box' && targetBox.shiftKey == true) {
        let darken = Number(targetBox.target.style.opacity)
        if (darken < 1){
        targetBox.target.style.opacity = (darken + .1) }
    } else if (targetBox.class = 'box' && targetBox.ctrlKey == true){
        let lighten = Number(targetBox.target.style.opacity);
        if (lighten > 0) {
        targetBox.target.style.opacity = (lighten - .1) }
    }
    
}

genBoxes();
boxesContainer.addEventListener('mouseover', colorBoxes);
eraseBtn.addEventListener('click', genBoxes);