// console.log("JS file Connected");
// Reusable functions
function numberOfCoins(){
    const coins = (document.getElementById("number-of-coins")).innerText;
    const coinsNumber = Number(coins);
    return coinsNumber;
}
function numberOfCopy(){
    const copy = (document.getElementById("number-of-copy")).innerText;
    const copyNumber = Number(copy);
    return copyNumber;
    
}
function numberOfHearts(){
    const heart = (document.getElementById("heart")).innerText;
    const heartNumber = Number(heart);
    return heartNumber;
    
}

 function getServiceName(id){
    const serviceName = document.getElementById(id).innerText;
    console.log(serviceName);
 }
    
  
   
    





const calls = document.getElementsByClassName('call');
for(const call of calls){
    call.addEventListener('click', function(){
        const currentCoins = numberOfCoins();
        // console.log(currentCoins);
         if(currentCoins < 20){
            alert('You do not have sufficient coins');
            return;
        }

        const finalCoins = currentCoins - 20;
               
        document.getElementById("number-of-coins").innerText = finalCoins;

    })
}

const copys = document.getElementsByClassName('copy');
for(const copy of copys){
    copy.addEventListener('click', function(){
        alert("Copied the Number");
        const currentNumberOfCopys = numberOfCopy();
        // console.log(currentCoins);
        const finalCopys = currentNumberOfCopys + 1;
               
        document.getElementById(("number-of-copy")).innerText = finalCopys;

    })
}

const heartIcons = document.getElementsByClassName("heart-icon");
for(const heartIcon of heartIcons){
    heartIcon.addEventListener('click', function(){
        const currentNumberOfHearts = numberOfHearts();
        // console.log(currentCoins);
        const finalHearts = currentNumberOfHearts + 1;
               
        document.getElementById(("heart")).innerText = finalHearts;
    })
}


