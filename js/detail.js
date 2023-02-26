'use strict';
console.log('connected');

const manipulateComment = (function() {
    const validTag = document.getElementById('validTag');
    const reviewInput = document.getElementById('review_field');

    const invalidAlert = ()=> {
        validTag.style.animationName = 'notValid';
        setTimeout(() => {validTag.style.animationName = ' '}, 1500);
    }

    const addComment = (event, userName='hykim', userComment) => {
        event.preventDefault();
        if(userComment.length < 10) {
            invalidAlert();
            return;
        }
        let html = `<li class="review_thread"><span class="id">${userName}</span><span class="comment">${userComment}</span><div id="closeBtn">X</div></li>`;
        document.getElementById('RvTarget').insertAdjacentHTML('afterbegin', html);
    
        reviewInput.value = '';
    }

    reviewInput.addEventListener('keypress', (event) =>{
        event.key === 'Enter' && addComment(event, undefined, event.target.value);
    })
})();

//Delete Comment
const deleteComment = (function() {
    const reviewField = document.getElementById('RvTarget');
    
    reviewField.addEventListener('click', (e)=>{
        if(e.target.id !== 'closeBtn') return;
        e.target.closest('.review_thread').remove();
    });
})();


//Zoom Interaction 

const zoomImage = (function() {

    const zoomFrame = document.querySelector('.zoomFrame');
    const zoomLens = document.querySelector('.zoomLens');
    const zoomWindow = document.querySelector('.zoomWindow');
  
    function handleMouseMove(event) {
  
      const {left, top} = zoomFrame.getBoundingClientRect();
      const {x:lensLeft, y:lensTop} = zoomLens.getBoundingClientRect();
  
      const x = event.clientX - left;
      const y = event.clientY - top;
  
      zoomLens.classList.add('visible');
      zoomWindow.classList.add('visible');
  
      const boundary = {
        xMin: 153,
        xMax: 297,
        yMin: 117,
        yMax: 353
      }
  
      const coord = {
        x: x - 153 + 'px',
        y: y - 117 + 'px'
      }
  
      switch (true) {
  
        case (x <= boundary.xMin && y <= boundary.yMin) :
          zoomLens.style.left = '0';
          zoomLens.style.top = '0';
          break;
  
        case (x > boundary.xMin && x < boundary.xMax && y <= boundary.yMin) :
          zoomLens.style.left = coord.x;
          zoomLens.style.top = '0';
          break;
  
        case (x >= boundary.xMax && y <= boundary.yMin) :
          zoomLens.style.left = '145px';
          zoomLens.style.top = '0';
          break;
  
        case (x <= boundary.xMin && y > boundary.yMin && y < boundary.yMax) :
          zoomLens.style.left = '0';
          zoomLens.style.top = coord.y;
          break;
  
        case (x <= boundary.xMin && y >= boundary.yMax) :
          zoomLens.style.left = '0';
          zoomLens.style.top = '236px';
          break;
  
        case (x > boundary.xMin && x < boundary.xMax && y >= boundary.yMax) :
          zoomLens.style.left = coord.x;
          zoomLens.style.top = '236px';
          break;
  
        case (x >= boundary.xMax && y >= boundary.yMax) :
          zoomLens.style.left = '145px';
          zoomLens.style.top = '236px';
          break;
  
        case (x >= boundary.xMax && y > boundary.yMin && y < boundary.yMax) :
          zoomLens.style.left = '145px';
          zoomLens.style.top = coord.y;
          break;
  
        default :
          zoomLens.style.left = coord.x;
          zoomLens.style.top = coord.y;
      }
  
      zoomWindow.style.backgroundPosition = `${(lensLeft - left) * 100 / 145}% ${(lensTop - top) * 100 / 236}%`
    }
  
    zoomFrame.addEventListener('mousemove', handleMouseMove);
  
    zoomFrame.addEventListener('mouseleave', () => {
      zoomLens.classList.remove('visible');
      zoomWindow.classList.remove('visible');
    });
  
  })();