<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/main.css">
    <title>information</title>
</head>
<?php include '../includes/Progress.php';?>
<section id="card">
        <div class="card">
            <div class="head">
                <h4 class="titlecard">Some rules for this Quiz</h4>
            </div>
            <div class="body-card" id="cardInfo">
                <p class="">1-you will have <span>15 seconds </span>foreach question</p>
                <p class="">2-You can't selectany option once time goes off .</p>
                <p class="">3-you can't exit from the Quiz while you're playing</p>
                <p class="">1-you will get points</p>
            </div>
            <div class="head-card" style="display:none">
                <h4 class="info"></h4>
            </div>
            <div class="body-card-Qst" id="cardQst" style="display:none">
                <button class="infoA btn"></button>
                <button class="infoB btn"></button>
                <button class="infoC btn"></button>
                <button class="infoD btn"></button>
            </div>
            <div class="footer-card">
                <button class="exit"> Exit</button>
                <button id="next" style ="display : none" onclick ="next()"> Next</button>
                <button id="star" onclick="start()" > Start</button>
            </div>
        </div>
    </section>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="../script/fetchingdata.js"></script>
    <script src="https://cdn.lordicon.com/fudrjiwc.js"></script>
    </body>
</html>