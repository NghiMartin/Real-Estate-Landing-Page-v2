const logo_items = document.querySelectorAll('.logo_item');
logo_items.forEach(logo_item => {
    logo_item.addEventListener('mouseover', function() {
        logo_item.style.padding = '2rem';
      });
  
      logo_item.addEventListener('mouseout', function() {
        logo_item.style.padding = '0rem';
      });
})