function myFunction() {
    //turns responsive class on or off when hamburger is clicked 
      var x = document.getElementById("nav");
      if (x.className != "clearfix responsive") {
        x.className += " responsive";
      } else {
        x.className = "clearfix";
      }
    }