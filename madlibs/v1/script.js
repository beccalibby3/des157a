(function() {
    'use strict';
  
    const myMadlib = document.querySelector('#madlib');
    const myForm = document.querySelector('#myform');
    const main = document.querySelector('main');
  
    myForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const yname = document.querySelector('#yname').value;
      const adj1 = document.querySelector('#adj1').value;
      const adj2 = document.querySelector('#adj2').value;
      const adj3 = document.querySelector('#adj3').value;
      const noun = document.querySelector('#noun').value;
      const number = document.querySelector('#number').value;
      const loc = document.querySelector('#loc').value;
      const prof = document.querySelector('#prof').value;
  
      let myText = '';
  
      if (yname === '') {
        myText = 'Please provide your name.';
        document.querySelector('#yname');
      } else if (adj1 === '') {
        myText = 'Please provide an adjective.';
        document.querySelector('#adj1');
      } else if (adj2 === '') {
        myText = 'Please provide an adjective.';
        document.querySelector('#adj2');
      } else if (adj3 === '') {
        myText = 'Please provide an adjective.';
        document.querySelector('#adj3');
      } else if (noun === '') {
        myText = 'Please provide a noun.';
        document.querySelector('#noun');
      } else if (number === '') {
        myText = 'Please provide a number.';
        document.querySelector('#number');
      } else if (loc === '') {
        myText = 'Please provide a location.';
        document.querySelector('#loc');
      } else if (prof === '') {
        myText = 'Please provide a profession.';
        document.querySelector('#prof');
      } else {

        myText = `
          <p>To: The Manager</p>
          <p>Thank you for the opportunity to work at the ${adj1} ${noun}, but unfortunately today will be my last day. 
          I know I only started ${number} days ago, but the ${adj2} customers and my ${adj3} coworkers really put me over the edge.</p>
          <p>I need to quit on the spot. Sorry I didn’t give a 2-week notice.</p>
          <p>Ps. Please mail my next paycheck to ${loc}. I’m starting a new life as a ${prof}.</p>
          <p>Sincerely,<br>${yname}</p>
        `;
  
        main.classList.add('slide-out');
  
        main.addEventListener('transitionend', function handler() {
          main.removeEventListener('transitionend', handler); 
          main.classList.remove('slide-out'); 
          main.innerHTML = `<article id="madlib">${myText}</article>`;
        });
        return;
      }
  
      myMadlib.textContent = myText;
    });
  })();
  