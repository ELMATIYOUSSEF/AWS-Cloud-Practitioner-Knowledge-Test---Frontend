let start = document.getElementById("start");
start.addEventListener("click", function() {
document.querySelector("#audio").innerHTML += `<audio controls autoplay style="display : none">
<source src="assets/img/race-start.mp3" type="audio/ogg">
Your browser does not support the audio element.
</audio>`;
setTimeout(() => {
    document.querySelector("#pageinfo").click();
  }, 5000);
  });
