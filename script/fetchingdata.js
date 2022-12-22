// fetch file json
let url = 'http://localhost:8060/script/Quiz.json';

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

// function second increment 
let secend = 15;
function incrementSecond() {
    document.querySelector("#timeSecond").innerHTML = secend;
    secend--;
}
// function set interval for relawd function increment evry 1s

function timeOfQst(secend) {
    // setInterval(incrementSecond(secend), 1000);
    let maxclick = array.length;
        let id = setInterval(function () {
            if(maxclick>0){
                labelTime = document.querySelector("#timeSecond");
                labelTime.innerText = secend;
                if (secend < 10) { //if secend is less than 9
                    let addZero = labelTime.textContent;
                    labelTime.style.color = "red"
                    labelTime.textContent = "0" + addZero; //add a 0 before time value
                }
                console.log(secend);
                if (secend === 0) {
                    clearInterval(id);
                    console.log(array);
                    labelTime.style.color = "white"
                    secend = 15;
                    document.getElementById("next").click();
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
function next() {
    lengthArry = array.length;
    timeOfQst(2);
    counter++;
    randNum = getRandomInt(lengthArry);
    document.querySelector('.info').innerText = counter + ")" + array[randNum].Qst;
    document.querySelector('.infoA').innerText = "1)" + " " + array[randNum].A;
    document.querySelector('.infoB').innerText = "2)" + " " + array[randNum].B;
    document.querySelector('.infoC').innerText = "3)" + " " + array[randNum].C;
    document.querySelector('.infoD').innerText = "4)" + " " + array[randNum].D;
    array.splice(randNum, 1);
}