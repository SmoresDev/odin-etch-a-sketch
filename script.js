let boxesContainer = document.getElementById('sketch-boxes');

function genBoxes () {
    while (boxesContainer.firesChild) {
        boxesContainer.removeChild(boxesContainer.lastChild)
    }
    let numBoxes = prompt("How many boxes per side?\nAny number lower than 100");
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
        targetBox.target.style.backgroundColor = 'black';
    } else if (targetBox.class = 'box' && targetBox.ctrlKey == true){
        targetBox.target.style.backgroundColor = "white";
    }
    
}

genBoxes()

boxesContainer.addEventListener('mouseover', colorBoxes)