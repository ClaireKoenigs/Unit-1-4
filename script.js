let input = document.getElementById('input');
let button = document.getElementById('button');

let quiz = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (input.value == "austin") {
            resolve();
        }
        else {
            reject();
        }
    }, 10000);
    button.addEventListener('click', () => {
        if (input.value == "austin") {
            resolve();
        }
        else {
            reject();
        }
    });
});

quiz.then(
    () => {
        alert("You are correct!");
    }, 
    () => {
        alert("Incorrect. You lose.");
    }
)

let input2 = document.getquerySelector('#input2');
let button2 = document.querySelector('#button2');

let quiz2 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        if (input2.value == "wisconsin") {
            resolve();
        }
        else {
            reject();
        }
    }, 10000);
    button2.addEventListener('click', () => {
        if (input2.value == "wisconsin") {
            resolve();
        }
        else {
            reject();
        }
    });
})

quiz2.then(
    () => {
        alert("You are correct!");
    },
    () => {
        alert("Incorrect. You lose.");
    }
)