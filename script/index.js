document.getElementById('generate').onclick = () => {
   const firstNum = window.parseInt(document.getElementById('firstNum').value);
   const lastNum = window.parseInt(document.getElementById('lastNum').value);

   if(firstNum < lastNum){
      const result = document.getElementById('result'); 
      const time = 500;
      const step = 1; 
   
      const randomNumber = Math.floor(Math.random() * (lastNum - firstNum + 1) + firstNum);

      let n = firstNum; //start point

      let t = Math.round(time / (randomNumber/step)) //delay
      let interval = setInterval(() => {
         n = n + step;
         if(n == randomNumber){
            clearInterval(interval);
         }
         result.innerHTML = n;
      }, t);
         
       
      
   } else{
      result.innerHTML = 'Incorrect interval';
   }
   
}