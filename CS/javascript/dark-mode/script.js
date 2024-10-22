const htmlBody = document.body;
function darkMode() {
if(htmlBody.style.backgroundColor === 'white'){
   htmlBody.style.backgroundColor = 'black'; 
   htmlBody.style.color = 'white';
  }
else{
  htmlBody.style.backgroundColor = 'white';
  htmlBody.style.color = 'black';
  }
}
  
