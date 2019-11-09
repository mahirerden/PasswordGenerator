     
     function passwordGenerate(){
          var specialChar = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "\<", "=", "\>", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
          var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
          var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u","v", "w", "x", "y", "z"];
          var numericChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
          var passwordOption = [];
          var generatedPassword = "";
          var passwordLength = document.getElementById('passwordLength').value;
          console.log(passwordLength);
          var selected = false;
          //var genPassword = document.getElementById('genPass');
          //genPassword.innerHTML = passwordLength;
          //alert(passwordLength);
          //document.getElementById("genPass").innerHTML = passwordLength;
          if (document.getElementById('checkbox1').checked || 
               document.getElementById('checkbox2').checked || 
               document.getElementById('checkbox3').checked || 
               document.getElementById('checkbox4').checked){
               selected = true;
          } else {
               alert ("please check at least one password option!")
               selected = false;
          }
          
          while (selected){
               var ch1 = document.getElementById('checkbox1').checked;
               var ch2 = document.getElementById('checkbox2').checked;
               var ch3 = document.getElementById('checkbox3').checked;
               var ch4 = document.getElementById('checkbox4').checked;
               if (ch1 === true){
                    passwordOption.push("s");
               }
               if (ch2 === true){
                    passwordOption.push("n");
               }
               if (ch3 === true){
                    passwordOption.push("l");
               }
               if (ch4 === true){
                    passwordOption.push("u");
               }
               console.log(passwordOption);
               var whichOption = "";
               var chosenChar = "";
               

               for (var i=0; i < passwordLength; i++){
                    if (passwordOption.length> 1){
                         whichOption = ChooseCharacter(passwordOption, passwordOption.length);   
                    } else {
                         whichOption = passwordOption[0];
                    }
                    
                    if (whichOption === "s"){
                         chosenChar = ChooseCharacter(specialChar, specialChar.length);
                    } else if (whichOption === "n"){
                         chosenChar = ChooseCharacter(numericChar, numericChar.length);
                    } else if (whichOption === "u"){
                         chosenChar = ChooseCharacter(upperCaseChar, upperCaseChar.length);
                    } else if (whichOption === "l"){
                         chosenChar = ChooseCharacter(lowerCaseChar, lowerCaseChar.length);
                    }
                    console.log(chosenChar);
                    generatedPassword = generatedPassword + chosenChar;
               }
               document.getElementById("genPass").value = generatedPassword;
               console.log(generatedPassword);
               selected = false;
          }
     }

      /* Choose characters from options arrays by parameter */
     function ChooseCharacter(array, length){
          var char = array[Math.floor(Math.random() * length)];
          return char;
     }

     // $(document).ready(function(){
     //      $("#copyBtn").click(function(){
     //           $("#genPass").select();
     //           document.execCommand('copy');
     //      });
     // });

     function copyFunction() {
          var copyText = document.getElementById("genPass");
          copyText.select();
         //copyText.setSelectionRange(0, 99999);
          document.execCommand("Copy");
          alert("Copied the text: " + copyText);
     }