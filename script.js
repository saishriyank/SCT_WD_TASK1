function filterMenu(type) {
    const items = document.querySelectorAll('.menu-item-card');
    items.forEach(item => {
      if (type === 'all') {
        item.style.display = 'block';
      } else {
        item.style.display = item.classList.contains(type) ? 'block' : 'none';
      }
    });
  }
document.querySelectorAll('.navbar-nav .nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const targetPosition = targetElement.offsetTop - navbarHeight;
  
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });

  document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('confirmation').style.display = 'block';
  });


  
