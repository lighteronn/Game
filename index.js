//Record the numbers created by the computer

$(document).ready(() => {

  //Activate the modal and add event listener
  $("#myModal").modal('show');
  $('.btn-level').on('click', event => {
    //Deactivate the modal
    $("#myModal").modal('hide');
    //Get the user's  input 
    let numberOfCards = event.target.parentNode.value.value
    console.log(numberOfCards, " level");
  
  

if(numberOfCards) {
//Create cards and record the numbers generated with records array
let records = [];
document.querySelector('.card-container').innerHTML = '';
for(let i =0; i < numberOfCards; i++ ) {
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

//Flip the cards by 180 degree
 document.querySelectorAll('.card').forEach( (card,index) => {
    console.log(index)
    setTimeout(() => {card.classList.toggle('flip-card-flipper')}, 1000*(index));
 })
 
 //Make the numbers invisible with '?'
setTimeout(() => {
    document.querySelectorAll('.card-text').forEach(text => { 
        text.textContent = '?';
    })}, 1000* records.length-100)

console.log(records, records.join())

setTimeout(() => {
    
    //Activate the modal
    $('#myModal-input').modal('show');
    //Add event listener to the modal
    $('.btn-input').on('click', event => {
      //Deactivate the modal
      $('#myModal-input').modal('hide');
      //User enters the number
      let userInput = event.target.parentNode.value.value
      console.log(userInput, " userInput")
      
      if(userInput.split(',').join('') == records.join('') || userInput == records.join(' ')) {
           //User won the game and restart modal is shown
          document.querySelector('#myModal-restart .modal-title').textContent = 'You Won';
           $('#myModal-restart').modal('show');
           $('.btn-restart').on('click', () => { 
             $('#myModal-restart').modal('hide') 
             location.reload()
           })
        //User lose the game and restart modal is shown 
       } else {
        document.querySelector('#myModal-restart .modal-title').textContent = 'You Lost!';
        $('#myModal-restart').modal('show');
        $('.btn-restart').on('click', (e) => { 
          $('#myModal-restart').modal('hide')
          location.reload()
          } )
        

    }
  })
  
     
   }, 1000*records.length);
  
  }


});
})