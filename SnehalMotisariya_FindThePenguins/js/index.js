let _penguins, _yeti, _score, _current_score, _highest_score, _game, _penguin_audio, _yeti_audio;
let score = 0;

$(document).ready(function () {
    _penguins = document.querySelectorAll(".penguin");
    _yeti = document.querySelector("#yeti");
    _current_score = document.querySelector("#_current_score");
    _highest_score = document.querySelector("#_highest_score");
    _game = document.querySelector("#game");
    _penguin_audio = document.querySelector("#penguin_audio");
    _yeti_audio = document.querySelector("#yeti_audio");

    _penguins.forEach((_penguin) => {
        // console.log("penguin click");
        _penguin.onclick = penguinClick;
    })

    _yeti.onclick = yetiClick;
});

const penguinClick = function () {
    if (!this.classList.contains("up")) {
        this.classList.add("up");
        //pop-up penguin
        this.style.backgroundImage = `url('images/penguin_1.png')`;
        //sound for penguin(used audio-cutter to reduce the length of audio file)
        _penguin_audio.play();
        score += 1;
        _current_score.innerHTML = score;
    }
}

const yetiClick = function () {
    //sound for yeti
    _yeti_audio.play();

    alert("You loose the game");
    endGame();
}


const endGame = function () {
    //highest score history
    if (_current_score.innerHTML < _highest_score.innerHTML) {
        console.log("current:" + _current_score.innerHTML);
        console.log("score" + score);
        console.log("highet score" + _highest_score.innerHTML);
        _highest_score.innerHTML = _highest_score.innerHTML;
    }
    else {
        console.log("current:" + _current_score.innerHTML);
        console.log("score" + score);
        console.log("highet score" + _highest_score.innerHTML);
        _highest_score.innerHTML = score;
    }
    resetGame();
}

const resetGame = function () {

    $(".penguin").removeClass("up");

    //hide penguin
    _penguins.forEach((_penguin) => {
        _penguin.style.backgroundImage = "url('images/mound_1.png')";
    })
    score = 0;
    _current_score.innerHTML = score;

    //random yeti(multiplied by 18, double of total mounds)
    _game.insertBefore(_yeti, _game.childNodes[Math.round(Math.random() * 18)]);

    //-------------------------tried using shuffle-------------------------------------------
    // let array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    // for (var i = array.length-1; i > 0; i--) {
    //     var j = Math.floor(Math.random() * (i + 1));

    //     var temp = array[i];
    //     array[i] = array[j];
    //     array[j] = temp;
    //     console.log(j);
    //     _game.insertBefore(_yeti,_game.childNodes[temp]);
    // }

}