$(document).ready(function() {
// My game will create a rndom Number that the user need to Guess
// create funciton to generate random number
function getRandom(a) {
 return Math.floor(Math.random() * a) + 1;

} 

// create global variables

//create event listener
//get the value of the button and add it to total and compare total to random number
   mainNum ();
  $('.btn').click(function(){ 
    // get the value of rnadom button an ddispay one at a time 
        
         $('#crystal').html($(this).attr('data-value')); 
              
          
    // on each click adds the value of the button dispayed
       $('btn').each (function (){
        ButtonValue ++
        alert(ButtonValue)
       })

    //
   });
//each time the game runs, assign new random numbers for each button, also get new random guess
       function mainNum (){
        $('#randNum').html(getRandom(102)) 
       }   

       
function btnRandom(){

  $('.btn').each(function(){                               // the first three lines in the game                      
         $(this).attr('data-value', getRandom (12));
           return 
          });
} 
alert (btnRandom());


     
                                                   // I need to use change ()
       }); 
    


