document.getElementById('generate').onclick = () => {
   const firstNum = window.parseInt(document.getElementById('firstNum').value);
   const lastNum = window.parseInt(document.getElementById('lastNum').value);

  // console.log(firstNum + ', ' + lastNum); //check numbers
   //console.log(firstNum > lastNum);

   if(firstNum < lastNum){
      const result = document.getElementById('result'); 

      const randomNumber = Math.floor(Math.random() * (lastNum - firstNum + 1) + firstNum);

      result.innerHTML = 'Your random number is : ' + randomNumber;
   } else{
      result.innerHTML = 'Enter correct interval';
   }
   
}