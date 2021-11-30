const noOfNotes = document.querySelectorAll('.no-of-notes');
const bill = document.querySelector('#bill'); 
const paid = document.querySelector('#paid');
const display = document.querySelector('#display');
const btn = document.querySelector('#check');

display.style.display = 'none';

var notes = [2000, 500, 100, 50, 20, 10, 5, 2 , 1];

function returnAmount(){
  let billAmount = bill.value;
  let paidAmount = paid.value;

  if(billAmount>0){

    if(billAmount<=paidAmount){
      let retrn = paidAmount - billAmount;

      for(let i = 0; i<notes.length && retrn; i++){
        let notesToReturn = Math.trunc(retrn / notes[i]);
        if(notesToReturn){
          noOfNotes[i].innerHTML = notesToReturn;
        }
        else{
          continue;
        }
        retrn %= notes[i];
      }
    }
    else{
      display.style.display = 'block';
      display.style.margin = `${1}rem`;
      display.innerHTML = 'Please provide proper amount';
    }
  }
  else{
    display.style.display = 'block';
    display.style.margin = `${1}rem`;
    display.innerHTML = 'Please enter valid value';
  }  
}


btn.addEventListener('click', returnAmount);