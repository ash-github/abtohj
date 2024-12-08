$(document).ready(function(){
    $("#line3").click(function(){
        $("#mini-menu").slideToggle();
    })

    $(".loading").fadeOut(500);
    $(".slideup").slideUp(1000);
})

// loader start
function certOpen(cert){
  // alert(cert);
  $(document).ready(function(){
      // alert("ok");
      $(cert).slideDown();
    $(".cross").click(function(){
      $(".full-img").slideUp();
    })
  })
}
// loader end


// certificate menu start

// mobile menu start
$(document).ready(function(){
  // alert("ok");
  $("#cert-btn").click(function(){
    $(".menu-list-back").fadeToggle();
  })
})

// mobile menu end

function changeMenu(a){
  // if(a=="all")
  if(a=="all"){
    scrollTo(0,530);
    document.getElementById("gall-head").innerHTML="{ All Images }";
    document.getElementById("gall-desc").innerHTML=" Explore captivating moments in a visual symphony with our immersive image gallery ";
    $(document).ready(function(){
      // $("all").slideDown();
      $(".cert").slideDown();
      $(".visit").slideDown();
      $(".seminar").slideDown();
      $(".event").slideDown();

        var w = window.innerWidth;
        if(w<=800){
            $(".menu-list-back").fadeOut();
        }
    })
  }

    if(a=="cert"){
      scrollTo(0,530);
      document.getElementById("gall-head").innerHTML="{ Certificate }";
      document.getElementById("gall-desc").innerHTML=" Certified and Accredited: Empowering Success Through Credentials ";
      $(document).ready(function(){
        // $("all").slideUp();
        $(".cert").slideDown();
        $(".visit").slideUp();
        $(".seminar").slideUp();
        $(".event").slideUp();
        
        var w = window.innerWidth;
        if(w<=800){
            $(".menu-list-back").fadeOut();
        }
      })
  }

  if(a=="visit"){
    scrollTo(0,530);
    document.getElementById("gall-head").innerHTML="{ Visit }";
    document.getElementById("gall-desc").innerHTML=" Experience the future of technology with our innovative IT solutions. ";
    $(document).ready(function(){
      // $("all").slideUp();
      $(".cert").slideUp();
      $(".visit").slideDown();
      $(".seminar").slideUp();
      $(".event").slideUp();

      var w = window.innerWidth;
      if(w<=800){
          $(".menu-list-back").fadeOut();
      }
    })
}

if(a=="seminar"){
  scrollTo(0,530);
  document.getElementById("gall-head").innerHTML="{ Seminar }";
  document.getElementById("gall-desc").innerHTML=" Embark on unforgettable experiences with our dynamic event lineup. ";
  $(document).ready(function(){
    // $("all").slideUp();
    $(".cert").slideUp();
    $(".visit").slideUp();
    $(".seminar").slideDown();
    $(".event").slideUp();
    
    var w = window.innerWidth;
    if(w<=800){
        $(".menu-list-back").fadeOut();
    }
  })
}

if(a=="event"){
  scrollTo(0,530);
  document.getElementById("gall-head").innerHTML="{ Event }";
  document.getElementById("gall-desc").innerHTML=" Discover every corner of wonder with our captivating guided tours. ";
  $(document).ready(function(){
    // $("all").slideUp();
    $(".cert").slideUp();
    $(".visit").slideUp();
    $(".seminar").slideUp();
    $(".event").slideDown();
    
    var w = window.innerWidth;
    if(w<=800){
        $(".menu-list-back").fadeOut();
    }
  })
}

}
// certificate menu end

// top banner start
// values to keep track of the number of letters typed, which quote to use. etc. Don't change these values.
var i = 0,
  a = 0,
  isBackspacing = false,
  isParagraph = false;

// Typerwrite text content. Use a pipe to indicate the start of the second line "|".  
var textArray = [
" LINUX RHCSA/RHCE","Microsoft","AWS Archtect Solution","And More..."
];

// Speed (in milliseconds) of typing.
var speedForward = 10, //Typing Speed
  speedWait = 2500, // Wait between typing and backspacing
  speedBetweenLines = 2000, //Wait between first and second lines
  speedBackspace = 2; //Backspace Speed

//Run the loop
typeWriter("output", textArray);

function typeWriter(id, ar) {
var element = $("#" + id),
    aString = ar[a],
    eHeader = element.children("h4"), //Header element
    eParagraph = element.children("p"); //Subheader element

// Determine if animation should be typing or backspacing
if (!isBackspacing) {
  
  // If full string hasn't yet been typed out, continue typing
  if (i < aString.length) {
    
    // If character about to be typed is a pipe, switch to second line and continue.
    if (aString.charAt(i) == "|") {
      isParagraph = true;
      eHeader.removeClass("cursor");
      eParagraph.addClass("cursor");
      i++;
      setTimeout(function(){ typeWriter(id, ar); }, speedBetweenLines);
      
    // If character isn't a pipe, continue typing.
    } else {
      // Type header or subheader depending on whether pipe has been detected
      if (!isParagraph) {
        eHeader.text(eHeader.text() + aString.charAt(i));
      } else {
        eParagraph.text(eParagraph.text() + aString.charAt(i));
      }
      i++;
      setTimeout(function(){ typeWriter(id, ar); }, speedForward);
    }
    
  // If full string has been typed, switch to backspace mode.
  } else if (i == aString.length) {
    
    isBackspacing = true;
    setTimeout(function(){ typeWriter(id, ar); }, speedWait);
    
  }
  
// If backspacing is enabled
} else {
  
  // If either the header or the paragraph still has text, continue backspacing
  if (eHeader.text().length > 0 || eParagraph.text().length > 0) {
    
    // If paragraph still has text, continue erasing, otherwise switch to the header.
    if (eParagraph.text().length > 0) {
      eParagraph.text(eParagraph.text().substring(0, eParagraph.text().length - 1));
    } else if (eHeader.text().length > 0) {
      eParagraph.removeClass("cursor");
      eHeader.addClass("cursor");
      eHeader.text(eHeader.text().substring(0, eHeader.text().length - 1));
    }
    setTimeout(function(){ typeWriter(id, ar); }, speedBackspace);
  
  // If neither head or paragraph still has text, switch to next quote in array and start typing.
  } else { 
    
    isBackspacing = false;
    i = 0;
    isParagraph = false;
    a = (a + 1) % ar.length; //Moves to next position in array, always looping back to 0
    setTimeout(function(){ typeWriter(id, ar); }, 50);
    
  }
}
}
// top banner end
