// console.log("JS file Connected");

const callHistory = [];
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

 function getServiceName(id){}
    // const serviceNames = document.getElementsByClassName("service-name");
    // for(const serviceName of serviceNames){
    // console.log(serviceName.innerText);
    // }
 
    
  
   

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
    
     const serviceName= call.parentNode.parentNode.childNodes[5].innerText;
     const serviceNumber = call.parentNode.parentNode.childNodes[7].innerText;
     const mainServiceName = call.parentNode.parentNode.childNodes[3].innerText
    //   console.log(mainServiceName);
     
       alert("Calling"+ " " + serviceName + " " + serviceNumber + "...");
  
        const history = {
            name: mainServiceName,
            number: serviceNumber,
            date: new Date().toLocaleTimeString()
        }
        callHistory.push(history);

        const callHistoryContainer = document.getElementById("call-history-container");
        const div = document.createElement("div");
        div.innerHTML = `
            <div class="w-full mb-2 lg:max-w-[350px] p-2 bg-gray-100 rounded-lg flex items-center justify-between">
                 <div>
                 <h2 class="font-bold text-[18px] text-[#111111]">${history.name}</h2>
                 <p class="text-[18px] text-[#5C5C5C]">${history.number}</p>
                 </div>
                 <p class="text-[18px]">${history.date}</p>
            </div>
        `

        callHistoryContainer.appendChild(div);
    document.getElementById('clear').addEventListener('click', function(){
    callHistoryContainer.innerText = '';
})

    })
}



const copys = document.getElementsByClassName('copy');
for(const copy of copys){
    copy.addEventListener('click', async() =>{
        alert("Content copied to Clipboard!");
        const textToCopy = copy.parentNode.parentNode.childNodes[7].innerText;
        console.log(textToCopy);
        await navigator.clipboard.writeText(textToCopy);
    
     
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


