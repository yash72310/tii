function sendMail(){
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_rrts10m";
    const templateID = "template_q1yrnib";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }

  $(document).ready(function(){
    $(".box").slice(0, 3).show();
    $("#loadMore").on("click", function(e){
      e.preventDefault();
      $(".box:hidden").slice(0, 3).slideDown();
      if($(".box:hidden").length == 0) {
        $("#loadMore").text("No Content").addClass("noContent");
      }
    });
    
  })



  let text=document.querySelector('.about_quotes')
  text.innerHTML=text.innerText
  .split(" ")
  .map((letters,i)=>`<span style="transition-delay:${i*40}ms;
  filter:hue-rotate(${i*10} deg)">
  ${letters}
  </span>`
  ).join("");



