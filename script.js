function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
 
      function submitingdata(){
        

        emailjs.send("service_7vfrvct","template_aljzkzj",{
          from_name:  document.getElementById("first_name").value,
          email:document.getElementById("email").value ,
          phone_number: document.getElementById("phone").value,
          subject: document.getElementById("subject").value,
          description:document.getElementById("description").value,
          }).then(()=>{
            alert("message sent successfully")
          })
      }
     

 