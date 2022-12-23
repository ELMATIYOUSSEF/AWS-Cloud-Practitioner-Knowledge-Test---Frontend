// fetch file json
let url = '../script/Quiz.json';

// fetching URl 
axios.get(url)
    .then((res) => afficheEllement(res.data.question)
    )
    .catch((error) => console.log(error))

// affiche data in index page areas
let i = 0;
let array = [];
function afficheEllement(res) {
    res.forEach(data => {
        array.push(data);
    })
};

// start Quiz 
function start() {
    next();
    var attr = document.createAttribute('colors');
    document.getElementById('info-2').style.color="#109121"
    let star = document.getElementById('cardQst')
    star.style.display = "flex";
    star.style.justifyContent = "space-around";
    star.style.alignItems = "center";
    document.querySelector(".head-card").style.display = "flex";
    document.querySelector(".head").style.display = "none";
    document.getElementById("cardInfo").style.display = "none";
    document.getElementById("star").style.display = "none";
    document.getElementById("next").style.display = "block";

}
let id ;
// function second increment 
function incrementSecond() {
    document.querySelector("#timeSecond").innerHTML = secend;
    secend--;
}
// function set interval for relawd function increment evry 1s

function timeOfQst(secend) {
    // setInterval(incrementSecond(secend), 1000);
    let maxclick = array.length;
        id = setInterval(function () {
            if(maxclick>0){
                labelTime = document.querySelector("#timeSecond");
                labelTime.innerText = secend;
                if(secend>9){
                    labelTime.style.color = "white";
                }
                if (secend < 10) { //if secend is less than 9
                    let addZero = labelTime.textContent;
                    labelTime.style.color = "red"
                    labelTime.textContent = "0" + addZero; //add a 0 before time value
                }
                console.log(secend);
                if (secend === 0) {
                    clearInterval(id);
                    console.log(array);
                    labelTime.style.color = "white";
                    document.getElementById("next").click();
                    secend = 15;
                    // return null;
                }
                secend--;
            }
            else{
                alert("Quiz is finish");
                clearInterval(id);
            }
            }, 1000);
    // }
}


//function  getRandom number 
function getRandomInt(lengthArry) {
    return Math.floor(Math.random() * lengthArry);
}

// function for tracking some action whene usr click in button next 
let counter = 0
var pro =0 ;
function next() {
    pro += 10 ;
    document.getElementById("time_Pogress").style.width = pro +"%";
    clearInterval(id);
    lengthArry = array.length;
    timeOfQst(15);
    counter++;
    randNum = getRandomInt(lengthArry);
   let qst = document.querySelector('.info').innerText = counter + ")" + array[randNum].Qst;
   let ans1 = document.querySelector('.infoA').innerText = "1)" + " " + array[randNum].A;
   let ans2 = document.querySelector('.infoB').innerText = "2)" + " " + array[randNum].B;
   let ans3 = document.querySelector('.infoC').innerText = "3)" + " " + array[randNum].C;
   let ans4 = document.querySelector('.infoD').innerText = "4)" + " " + array[randNum].D;
    array.splice(randNum, 1);
}

function getAnswer(){
    let answer1 = document.getElementById('A').checked;
    let answer2 = document.getElementById('B').checked;
    let answer3 = document.getElementById('C').checked;
    let answer4 = document.getElementById('D').checked;
    if (answer1){

    }
    if (answer2){
        
    }
    if (answer3){
        
    }
    if (answer4){
        
    }
}