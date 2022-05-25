// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.querySelectorAll('.like-glyph').forEach(like => {
  
  like.addEventListener('click' , ()=>{

    if (! like.classList.contains('activated-heart') ) {
      
      mimicServerCall()
        .then(res => {
          like.classList.add('activated-heart')
          like.textContent = FULL_HEART
        })
        .catch(error =>{
          show(error)
          setTimeout( hide, 3000)
        })
      
    } else {
      like.classList.remove('activated-heart')
      like.textContent = EMPTY_HEART
    }

  })
})

const modal = document.getElementById('modal')
const modalMessage = modal.querySelector('#modal-message')

function show(error) {
  modalMessage.textContent = error
  modal.classList.remove('hidden')
}

function hide() {
  modal.classList.add('hidden')
  modalMessage.textContent = ''
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
