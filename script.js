let boxesContainer = document.getElementById('sketch-boxes');

function genBoxes () {
    let numBoxes = prompt("How many boxes would you like to draw with?\nAny number between 4 and 100");
    for (let i = 0; i < Number(numBoxes); i++){
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