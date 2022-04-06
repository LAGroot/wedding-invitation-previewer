/* Functions for live text*/
  function liveText() {
  
   let nameVal1 = document.getElementById("nameOne").value;

   let nameVal2 = document.getElementById("nameTwo").value;

   let tagLine = 
   
   `You're invited to
   ${nameVal1} & ${nameVal2}'s
   celebration of LOVE!`;
 
   document.getElementById("entreNames").innerText = tagLine;
   }

   function liveDate() {

   let date = document.getElementById("date").value;
   let dateInput = 

   `Date: ${date}`;
 
   document.getElementById("entreDate").innerText = dateInput;
   }

   function liveTime() {

      let time = document.getElementById("time").value;
      let timeInput = 

      `Time: ${time}`;
    
      document.getElementById("entreTime").innerText = timeInput;
   }

   function liveVenue() {

      let venue = document.getElementById("venue").value;
      let venueInput = 

      `Venue: ${venue}`;
    
      document.getElementById("entreVenue").innerText = venueInput;
   }
   
   function liveAddress() {
   
      let address = document.getElementById("address").value;
      let addressInput = 

      `Address: ${address}`;
    
      document.getElementById("entreAddress").innerText = addressInput;
   }

   function liveDress() {
   
      let dress = document.getElementById("dress").value;
      let dressInput = 

      `Dress code: ${dress}`;
    
      document.getElementById("entreDress").innerText = dressInput;
   }

/* Functions for background style*/
function rodeoBackground() {

   document.getElementById("change").src="CSS/rodeoBackground.png";
   let element = document.getElementById("changeFont");
   element.style.fontFamily = "Carrois Gothic SC";
}

function discoBackground() {

   document.getElementById("change").src="CSS/discoBackground.png";
   let element = document.getElementById("changeFont");
   element.style.fontFamily = "Contrail One";
}

function brightBackground() {

   document.getElementById("change").src="CSS/brightBackground.png";
   let element = document.getElementById("changeFont");
   element.style.fontFamily = "Concert One";
}

function jungleBackground() {

   document.getElementById("change").src="CSS/jungleBackground.png";
   let element = document.getElementById("changeFont");
   element.style.fontFamily = "Bellota";
}

/* Functions for alert message*/
function alertPrint() {
   alert("Thank you for using our wedding invitation builder! We have sent your invite to the printer and will be in touch to finalise the details.");
}

function alertEmail() {
   alert("Thank you for using our wedding invitation builder! We have noted you would like to email your invite out to your guests, we will be in touch to finalise the details.");
}
