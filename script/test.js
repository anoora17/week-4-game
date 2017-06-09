$(document).ready(function() {
// My game will create a rndom Number that the user need to Guess
// create funciton to generate random numbers btween two values
function getRandom(min,max) {
 return Math.floor(Math.random()*(max-min+1)+min);
} 

// create global variables

var total = 0;
var win = 0;
var lose=0;
var mainRandom= "0" ; 
;

//get the value of random main number
   mainNum ();
   console.log('random main value is  '+mainRandom) // check the manin random number 

   // start the game by clicking crystals  //create event listener 
  $('.btn').click(function(){ 
        
    // get the value of rnadom button and dispay one at a time 
        $('#crystal').hide($(this).attr('value'));
          
          // console.log($(this).attr('value'))
          // create a var to store the total score of all buttons
          total+=parseInt($(this).attr('value')); 
            
             $('#total').html(total);
                console.log(total)
         // compare the main number to the total value       
              if (total === mainRandom){
                   win ++
                   alert('win' +win)
                   console.log('win' + win)
                  $('#win').html('You won !!!  '+win)
                      alert("you won")
                      reset()
                     }
                  else if(total > mainRandom)
                  {
                                  
                    lose ++
                    console.log(' lose '+lose)
                    $('#lose').html('Sorry You lost Play again  '+lose)
                     alert('You Lost')
                       
                     reset() 
                         
                       } 


                    // else if( lose===2 || win ===2 ){
                    //   reset();
                    // }
                   
              //winLose(total, mainRandom)
            
         });

 
    // this function is used to generate random Number between 20-120 and return global value mainRandom
       function mainNum (){
       $ (this).attr('value', getRandom(20,120))
        $('#randNum').html($(this).attr('value'))
        mainRandom=parseInt($(this).attr('value'))  ;

         return mainRandom;


       }
    
        console.log( "this is my main"+mainRandom )

       
function btnRandom(){

  $('.btn').each(function(){                               // the first three lines in the game                      
         $(this).attr('value', getRandom (1,12));
           return 
          });
  
} btnRandom()
                                                   // I need to use change ()
     
   function reset() {
     
     total=0;
          
     
    btnRandom()
     mainNum()


   }
 $('div').hover(function(){
  $(this).toggleClass('highlight')
 });

 }); 