const button = document.getElementById("btnno");

      button.addEventListener("click", () => {
        const newLeft =
          Math.random() * (window.innerWidth - button.offsetWidth);
        const newTop =
          Math.random() * (window.innerHeight - button.offsetHeight);

        button.style.left = `${newLeft}px`;
        button.style.top = `${newTop}px`;
      });
      document.addEventListener('DOMContentLoaded', function() {
        const redirectButton = document.getElementById('btnyes');
      
        redirectButton.addEventListener('click', function() {
          window.location.href = 'file:///C:/Users/Tanishq%20Singh/Documents/VSCODEhtmlcssjsfiles/responsive%20wesite1%20with%20backend/c.html';
        });
      });

    