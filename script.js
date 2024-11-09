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
        console.log(targetBox)
        targetBox.target.style.backgroundColor = 'black'
    } else if (targetBox.class = 'box' && targetBox.ctrlKey == true){
        targetBox.target.style.backgroundColor = "white";
    }
    
}

genBoxes();
boxesContainer.addEventListener('mouseover', colorBoxes);
eraseBtn.addEventListener('click', genBoxes);