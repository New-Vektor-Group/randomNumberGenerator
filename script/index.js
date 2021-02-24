document.getElementById('generate').onclick = () => {
   const firstNum = window.parseInt(document.getElementById('firstNum').value);
   const lastNum = window.parseInt(document.getElementById('lastNum').value);

   if(firstNum < lastNum){
      const result = document.getElementById('result'); 
      // const time = 500; //for  calc delay
      const step = 1; 
   
      const randomNumber = Math.floor(Math.random() * (lastNum - firstNum + 1) + firstNum);
   
      let n = 0; //start point

      // let t = Math.abs(Math.round(time / (randomNumber/step)) //delay
      console.log(Math.pow(randomNumber,randomNumber));
      let interval = setInterval(() => {
         n = (randomNumber < 0) ? n - step : n + step;
         
         
         if(n == randomNumber){
            clearInterval(interval);
         }
         result.innerHTML = n;
      }, 1);//t)
         
       
      
   } else{
      result.innerHTML = 'Incorrect interval';
   }
   
}