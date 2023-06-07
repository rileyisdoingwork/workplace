var slideIndex = 0;
        var slides = document.getElementsByClassName("slide");

        function showSlide(n) {
            slideIndex = n;

            if (slideIndex < 0) {
                slideIndex = slides.length - 1;
            } else if (slideIndex >= slides.length) {
                slideIndex = 0;
            }

            for (var i = 0; i < slides.length; i++) {
                slides[i].style.transform = "translateX(" + (-slideIndex * 100) + "%)";
            }
        }

        function nextSlide() {
            showSlide(slideIndex + 1);
        }

        function prevSlide() {
            showSlide(slideIndex - 1);
        }

        document.querySelector(".prev").addEventListener("click", prevSlide);
        document.querySelector(".next").addEventListener("click", nextSlide);

        showSlide(slideIndex);