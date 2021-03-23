const container2 = document.querySelector('.container-2')[0];
const container3 = document.querySelector('.container-3')[0];

Check = document.querySelector('.fas-check');
iconX =  document.querySelector('.fa-times');
const index = 0

iconx.addEvenListener('click', () => {
    typeNote();
});


check.addEvenListener('click', () => {
    newNote();
});

function typeNote() {

};

function newNote(){

}

function margin(){
    let randomMargin = ['-5px', '1px', '5px', '10px', '15px', '20px'];
    return randomMargin[Math.floor(Math.random() * randomMargin.length)];
}

function rotate(){

}

function color() {

}