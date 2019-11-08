     
     var specialChar = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
     var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
     var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u","v", "w", "x", "y", "z"];
     var numericChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
     var passwordOption = ["s", "n", "u", "l"];

     function Password(){
          var passwordLength = document.getElementById('passwordLength').value;
          //var genPassword = document.getElementById('genPass');
          //genPassword.innerHTML = passwordLength;
          alert(passwordLength);
          document.getElementById("genPass").innerHTML = passwordLength;

          var ch1 = document.getElementById('checkbox1').checked;
          var ch2 = document.getElementById('checkbox2').checked;
          var ch3 = document.getElementById('checkbox3').checked;
          var ch4 = document.getElementById('checkbox4').checked;
          var whichOption;
          var chosenChar;

          for (var i=0; i < passwordLengt; i++){
               whichOption = ChooseCharacter(passwordOption, passwordOption.length);
               if (whichOption === "s"){
                    chosenChar = ChooseCharacter(specialChar, specialChar.length);
               } else if (whichOption === "n"){
                    chosenChar = ChooseCharacter(numericChar, numericChar.length);
               } else if (whichOption === "u"){
                    chosenChar = ChooseCharacter(upperCaseChar, upperCaseChar.length);
               } else if (whichOption === "l"){
                    chosenChar = ChooseCharacter(lowerCaseChar, lowerCaseChar.length);
               }
          }
          document.getElementById("genPass").innerHTML = x;
          if (x === true){
               alert("secili");
          } else {
               alert("degil");
          }


         
     }

     function ChooseCharacter (array, length){
          var char = array[Math.floor(Math.random() * length)];
          return char;
     }