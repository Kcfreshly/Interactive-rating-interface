const wNums = document.querySelectorAll('.numbers');

//   function

const onClick = (event)=>{event.target.style.backgroundColor = '#b5b2ae';}
    
    for(const wNum of wNums){

        wNum.addEventListener('click', onClick)
    }
    



