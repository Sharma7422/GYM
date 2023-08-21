// function myFunction()
// {
//     var x =
//     document.getElementsById("Topnav");

//     if(x.className ==="topnav")
//     {
//         x.className += "responsive";
//     }
//     else{
//         x.className ="topnav";
//     }
// }


function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }



  function toggleText() {
 
    let points =
        document.getElementById("points");

    let showMoreText =
        document.getElementById("moreText");

    let buttonText =
        document.getElementById("textButton");


    if (points.style.display === "none") {

        
        showMoreText.style.display = "none";

        points.style.display = "inline";

       
        buttonText.innerHTML = "Read More";
    }

    else {

        showMoreText.style.display = "inline";

        
        points.style.display = "none";

        
        buttonText.innerHTML = "Read More";
    }
}