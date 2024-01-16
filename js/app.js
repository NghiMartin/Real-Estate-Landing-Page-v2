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
  const navLinks = document.querySelectorAll('.header_nav-link');

  navLinks.forEach(function(navLink) {
    navLink.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        smoothScrollTo(targetSection.offsetTop-100, 1000); // 1000 milliseconds (1 second) for smooth scroll
      }
    });
  });
 // Function for smooth scroll
 function smoothScrollTo(targetPosition, duration) {
  const startPosition = window.pageYOffset || document.documentElement.scrollTop; //Lấy vị trí cuộn của trang web.
  const distance = targetPosition - startPosition; //  Khoảng cách cần phải cuộn để đến vị trí đích đến.
  const startTime = performance.now(); // Thời điểm bắt đầu thực hiện smooth scroll.

  function scrollAnimation(currentTime) {
    const timeElapsed = currentTime - startTime; //  Thời gian đã trôi qua kể từ khi bắt đầu cuộn.
    const progress = Math.min(timeElapsed / duration, 1); // giá trị nằm trong khoảng từ 0 đến 1, biểu thị phần trăm cuộc cuộn đã hoàn thành.
    window.scrollTo(0, startPosition + distance * easeInOutCubic(progress)); 

    if (timeElapsed < duration) {
      requestAnimationFrame(scrollAnimation); // Kích hoạt hàm scrollAnimation mỗi khi trình duyệt sẵn sàng để vẽ một khung hình mới.
    }
  }

  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  }

  requestAnimationFrame(scrollAnimation);
}
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navMenu = document.querySelector('.header_nav');

  hamburgerMenu.addEventListener('click', function () {
      navMenu.classList.toggle('show');
  });
});
