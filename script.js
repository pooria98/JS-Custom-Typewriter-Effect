
const myHeading = document.querySelector('h1');
const changingText = document.getElementById('changingText');


listOfTexts = ['eating', 'reading', 'coding', 'sleeping', 'drinking', 'gaming', 'designing', 'trying', 'loving', 'studying', 'hating', 'tweaking', 'watching'];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i)
        let k = array[i]
        array[i] = array[j]
        array[j] = k
    }
}

let i = 0;
let j = 0;

setInterval(function () {
    let selectedElement = listOfTexts[i];
    let lastElement = listOfTexts[listOfTexts.length - 1];

    if (j < selectedElement.length) {
        changingText.innerHTML += selectedElement.charAt(j);
        j++;

        if (j == selectedElement.length - 1) {
            setTimeout(function () {
                i++;
                j = 0;
                changingText.innerHTML = '';
                if (i >= listOfTexts.length) {
                    shuffle(listOfTexts);
                    while (listOfTexts[0] == lastElement) {
                        shuffle(listOfTexts);
                    }
                    i = 0;
                }
            }, 1000);
        }
    }
}, 200);