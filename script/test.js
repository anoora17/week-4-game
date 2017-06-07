$(document).ready(function() {
// My game will create a rndom Number that the user need to Guess
// create funciton to generate random number
function getRandom(a) {
 return Math.floor(Math.random() * a) + 1;

} 

// create global variables
var ButtonValue=[];
//create event listener
//get the value of the button and add it to total and compare total to random number
   mainNum ();
  $('.btn').click(function(){ 
    // get the value of rnadom button and dispay one at a time 
        
         $('#crystal').html($(this).attr('data-value'));
          ButtonValue=0;
          ButtonValue=parseInt($(this).attr('data-value')); 
           total();
        // on each click adds the value of the button dispayed
            ('btn-success').each (function (){
        ButtonValue+= ButtonValue .val()
          $('#total').html(ButtonValue)
       })

            // Comapre the  total number from buttens 
       // for (var i=0; i >= 3; i++) {
       //    ButtonValue= ButtonValue[i]++
       //    return ButtonValue;
       //    console.log(ButtonValue)
       // }
      

    //
   });


    function total(){
      for (var i=0; i >= 3; i++)
        ButtonValue= ButtonValue + $('crystal').val();
         return
          
    }
  console.log(total())
//each time the game runs, assign new random numbers for each button, also get new random guess
       function mainNum (){
        $('#randNum').html(getRandom(101)) 
       }  
        mainNum()

       
function btnRandom(){

  $('.btn').each(function(){                               // the first three lines in the game                      
         $(this).attr('data-value', getRandom (12));
           return 
          });
} btnRandom()
// alert ();


     
                                                   // I need to use change ()
       }); 
    


