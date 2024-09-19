

//get the flip icon
const flipIcon = document.querySelector('.flip-icon');
const front = document.querySelector('.front');
const back = document.querySelector('.back');

//add click event listener 
flipIcon.addEventListener('click', function(){
    if (front.style.display === 'block') {
        front.style.display = 'none';
        back.style.display = 'block';
    } else {
        front.style.display = 'block';
        back.style.display = 'none';
    }
    //add a class to the button 
   
});

//when clicked, show the back of the card 

//if the back of the card is showing, show the front of the card