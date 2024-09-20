

//get the flip icon
const flipIcon = document.querySelectorAll('.flip-icon');

const front = document.querySelector('.front');
const back = document.querySelector('.back');

flipIcon.forEach((icon) => {
    icon.addEventListener('click', function() {
        // debugger;
        if (front.classList.contains('hide')) {
            front.classList.remove('hide');
            back.classList.add('hide');
        } else {
            front.classList.add('hide');
            back.classList.remove('hide');
           
        }
      
    });
});

