let span1 = document.getElementById("span1");
let span2 = document.getElementById("span2");
let correctAnswer = 0;
let correctContainer = document.getElementById("correct");
let arvi = document.getElementById("arvi");
let enemy = document.getElementById("enemy");


let option1 = document.getElementById("option1").addEventListener("click", function() {
    option1Func();
    correctAnswer = 1;
});
let option2 = document.getElementById("option2").addEventListener("click", function() {
    option2Func();
});
let option3 = document.getElementById("option3").addEventListener("click", function() {
    option3Func();
});

function option1Func() {
    span1.innerHTML = "(";
    span2.innerHTML = ")";
}

function option2Func() {
    span1.innerHTML = "{";
    span2.innerHTML = "}";
}

function option3Func() {
    span1.innerHTML = "[";
    span2.innerHTML = "]";
}

let reset = document.getElementById("reset").addEventListener("click", function(){
    span1.innerHTML = "";
    span2.innerHTML = "";
    correctContainer.innerHTML = "";
    // Temporary For Demo Purposes only
    correctAnswer = 0; 
});

let submit = document.getElementById("submit").addEventListener("click", function(){
    if (correctAnswer===1){
        correctContainer.innerHTML = "Python is a Programming Language";
        let attackstart = setTimeout(attackEvent1, 0);
        let backMovement = setTimeout(attackEvent2, 2000);
    }else {
        correctContainer.innerHTML = "Wrong";
        let enemyAttackstart = setTimeout(wrongEvent1, 0);
        let enemyBackMovement = setTimeout(wrongEvent2, 2000);
    }
});

function wrongEvent1() {
    arvi.src = "ARVI/avi 2.png";
    enemy.classList.add("enemyAttackAnimation");
    arvi.classList.add("arviIsAttackAnimation");
}

function wrongEvent2() {
    arvi.src = "ARVI/avi 1.png";
    enemy.classList.remove("enemyAttackAnimation");
    arvi.classList.remove("arviIsAttackAnimation");
}


function attackEvent1() {
    arvi.src = "ARVI/avi 3.png";
    arvi.classList.remove("movement");
    arvi.classList.add("attackAnimation");
    enemy.classList.add("enemyIsAttackAnimation");
}

function attackEvent2() {
    arvi.src = "ARVI/avi 1.png";
    arvi.classList.add("movement");
    arvi.classList.remove("attackAnimation");
    enemy.classList.remove("enemyIsAttackAnimation");
}






let settingBtn = document.getElementById("setting-btn").addEventListener("click", function() {
    settingModal.style.display = "grid";
});
let settingModal = document.getElementById("setting-modal");
let closeSettings = document.getElementById("close").addEventListener("click", function() {
    settingModal.style.display = "none";
});


let no = document.getElementById("back").addEventListener("click", function() {
    exitModal.style.display = "grid";
});
let exitModal = document.getElementById("exit-modal");
let exitClose = document.getElementById("no").addEventListener("click", function() {
    exitModal.style.display = "none";
});


