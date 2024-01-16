document.addEventListener("DOMContentLoaded", function () {

  const counters = document.querySelectorAll(".counter");

  window.addEventListener("scroll", function () {
    
      counters.forEach((counter) => {
          const rect = counter.getBoundingClientRect(); // trả về object có kích thước và vị trí của phần tử trong trang web.
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
              // Nếu counter hiển thị trên màn hình (ít nhất một phần)

              animateCounter(counter, counter.id);
               
          }
      });
      // Effect nhảy số
      function animateCounter(counter, targetValue) {
        counter.textContent = 0;
        let currentValue = 0;
        const increment = Math.ceil(targetValue / 100); // Chia targetValue thành 100 phần
        const animationSpeed = 10; // Tốc độ animation
  
        const updateCounter = () => {
            currentValue += increment;
            if (currentValue >= targetValue) {
                currentValue = targetValue;
                clearInterval(interval);
            }
            counter.textContent = currentValue;
        };   
        const interval = setInterval(updateCounter, animationSpeed);
        counter.classList.add("show"); // Hiển thị counter bằng cách thêm class "show"
    }
  
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navMenu = document.querySelector('.header_nav');

  hamburgerMenu.addEventListener('click', function () {
      navMenu.classList.toggle('show');
  });
});
