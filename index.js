var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    correct: 33,
    guess: 0
  },
   methods: {
     submitGuess: function() {
      if (parseInt(this.guess) >(parseInt(this.correct))) {
        console.log("Too high");
      } else if (parseInt(this.guess)) < (parseInt(this.correct))
        console.log("Too low");
      } else {
        console.log("Right on!");

      }
     }
    
  }
});
