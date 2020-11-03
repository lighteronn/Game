let records = [];
let userInput;


 $(document).ready(() => {

  $("#myModal").modal('show');

  $('.btn').on('click', event => {
    $("#myModal").modal('hide');
    userInput = event.target.parentNode.value.value
    console.log(userInput)
  });
 })
  

     // stops modal from being shown
     
     
     
  
 

//var level = prompt('Select the level') 

  

let level = 3
if(userInput == 3) {
document.querySelector('.card-container').innerHTML = '';
for(let i =0; i < level; i++ ) {
    let number = Math.floor(Math.random()*6+6);
    records.push(number)
    document.querySelector('.card-container').innerHTML += `<div class="card text-center flip-card" style="width: 15%; height:12rem;">
     <div class="bg-warning flip-card-inner">
         <div class="card-body flip-card-front">
            <p class="card-text">?</p>
         </div>
          <div class="card-body flip-card-back">
            <p class="card-text">${number}</p>
          </div>
    </div>
  </div>`
};

 document.querySelectorAll('.card').forEach( (card,index) => {
    console.log(index)
    setTimeout(() => {card.classList.toggle('flip-card-flipper')}, 1000*(index));
 })
 
setTimeout(() => {
    document.querySelectorAll('.card-text').forEach(text => { 
        text.textContent = '?';
        })
}, 1000* records.length-100)
console.log(records, records.join())
setTimeout(() => {
     userInput = prompt('Enter numbers')
     if(userInput.split(',').join('') == records.join('') || userInput.trim() == records.join('') ) {
      alert("You won")
     } else {
         alert("You lost the game")
         
     }
     let restart = confirm('Do you want to continue?') 
    if(restart) {
      location.reload();
    }
     
    }, 1000*records.length);
  
  }  



