 /* Function for live invite text*/
  function liveText() {
  
   let nameVal1 = document.getElementById("nameOne").value;

   let nameVal2 = document.getElementById("nameTwo").value;

   let date = document.getElementById("date").value;

   let time = document.getElementById("time").value;

   let dress = document.getElementById("dress").value;
  
   let venue = document.getElementById("venue").value;

   let address = document.getElementById("address").value;

   let tagLine = 
   
`Get excited!
   
   You're invited to ${nameVal1} & ${nameVal2}'s
   celebration of LOVE! 
   
   
   The important details:

   Date: ${date} 

   Time: ${time} 

   Venue: ${venue}

   Address: ${address}

   Dress code: ${dress}
   
   
   We cannot wait to see you there
   and celebrate this speical
   day with us.`;
 
   document.getElementById("inviteTextLive").innerText = tagLine;
 
 }

 function changeImage(){
   document.getElementById('backgroundImage')
   .src="CSS/inviteBackground2.png";
}

 /* Function to change invite theme
 function changeImage() {
   var image = document.getElementById('disco');
   if (image.src.match("635898850094838508.JPG")) {
       image.src = "/HTPictures/Generics/5-635898849972807270.JPG";
   }
   else {
       image.src = "/HTPictures/Generics/5-635898850094838508.JPG";
   }
}
