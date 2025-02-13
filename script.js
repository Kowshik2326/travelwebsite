// Smooth scrolling for navigation
document.querySelectorAll('.nav__links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      window.scrollTo({
        top: targetElement.offsetTop - 50,  // Adjusting scroll position to make room for fixed navbar
        behavior: 'smooth'
      });
    });
  });
  
  // Sign In button interaction (for demonstration purposes)
  document.querySelector('#signin button').addEventListener('click', function () {
    alert("Redirecting to the Sign In page...");
    // You can replace the alert with a redirect or open a modal
    // window.location.href = "/signin";  // Uncomment this line to redirect
  });
  
  // Sign Up button interaction (for demonstration purposes)
  document.querySelector('#signup button').addEventListener('click', function () {
    alert("Redirecting to the Sign Up page...");
    // You can replace the alert with a redirect or open a modal
    // window.location.href = "/signup";  // Uncomment this line to redirect
  });
  
  // Contact Us button interaction (for demonstration purposes)
  document.querySelector('#contact button').addEventListener('click', function () {
    alert("Redirecting to the Contact Us page...");
    // You can replace the alert with a redirect or open a modal
    // window.location.href = "/contact";  // Uncomment this line to redirect
  });
  