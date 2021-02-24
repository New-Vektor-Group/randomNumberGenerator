document.getElementById('generate').onclick = () => {
   let btn = document.getElementById('generate');
   
  
   btn.setAttribute("disabled","");

   const firstNum = window.parseInt(document.getElementById('firstNum').value);
   const lastNum = window.parseInt(document.getElementById('lastNum').value);


   if(firstNum < lastNum){
      const result = document.getElementById('result'); 
      // const time = 500; //for  calc delay
      const step = 1; 
   
      const randomNumber = Math.floor(Math.random() * (lastNum - firstNum + 1) + firstNum);
   
      let n = 0; //start point

      // let t = Math.abs(Math.round(time / (randomNumber/step)) //delay
      
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
   
   setTimeout(() =>{btn.removeAttribute("disabled", "");},1200);

}