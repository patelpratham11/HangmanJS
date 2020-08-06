const input = document.getElementById('word');
var display = document.getElementById('values');
var wrong = document.getElementById('wrongs');
var message = document.getElementById('message');
var head = document.getElementById('head');
var leftArm = document.getElementById('oneA');
var rightArm =document.getElementById('twoA');
var leftLeg = document.getElementById('oneL');
var rightLeg = document.getElementById('twoL');
var body = document.getElementById('body');
var pregame = document.getElementById('pregame');
var wrongCount = 0;
var inputCheck = true;
var count = 0;
var show = [];
var wrongs = ["Wrong Words:"];
var figure = [];
figure.push(head, body, leftArm, rightArm, leftLeg, rightLeg);
//setting up variables

var game = document.getElementById('game');
var hangman = document.getElementById('title');
game.style.display = "none";
setTimeout(function(){
  pregame.style.display = "block";
  setTimeout(function(){
    pregame.style.display = "none";
    game.style.display = "block";
    input.addEventListener('input', function(e) {
      let {value} = this;
      if (value.includes('.')) {
        this.value='';
        input.remove();
        inputCheck = false;
        var finalWord = value;
        finalWord = finalWord.substring(0, finalWord.length-1);
        console.log(finalWord);
        value = value.split("");
        for(var i = 0; i < value.length; i++){
          count++;
        }
        count--;

        for(var i = 0; i < count; i++){
        show.push(' _ ')
        }
        show.join("");
        display.innerHTML= show;
        if(!inputCheck){
          window.addEventListener('keydown', e=>{
            var key = e.key;
            var potential = show.join("");
            if(potential == finalWord){
              alert("You have won!")
              show.splice(i+1, 1, key);
              display.innerHTML= show;
              location.reload();
            }
            // if(wrongCount < 7){
              if(wrongCount == 5){
                alert("I'm sorry, you have lost. The correct word was "+finalWord);
                location.reload();
              }
              if(show.includes(key) || wrongs.includes(" "+key)){
                message.innerHTML = "You have already tried that letter!";
                setTimeout( function(){
                  message.innerHTML = "";
                }, 1000);

                //message.innerHTML = "";
              }
              if(value.includes(key)){
                for(var i = -1; i < value.length-1; i++){
                  var place = value[i, i+1];
                  if(place == key){
                    show.splice(i+1, 1, key);
                    display.innerHTML= show;
                    var potential = show.join("");

                    if(potential == finalWord){
                      alert("You have won!")
                      location.reload();
                    }
                  }//if the letter is in the word
                }//for loop looping through the whole word
              }//checking if the word has this letter
              // }//end of while wrongCounter is less than 6

              else if (!value.includes(key)){
                wrongs.push(" "+key);
                wrong.innerHTML = wrongs;
                var shower = figure[wrongCount];
                shower.style.display = "block";
                wrongCount++;
              }//adding the wrong letters to the wrongs list




          })//end of the keydown listener
        }//making sure the input period has finished
      }//if the end of the word has a period


    });//end of the entire game loop
  },2000);

}, 2000);
