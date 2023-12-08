document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('resumeForm');
    const resumeSections = document.querySelectorAll('section');
    const resume = document.querySelectorAll('header');
    const workExperienceContainer = document.getElementById('workExperienceContainer');
    const resumeContainer = document.getElementById('resumeContainer');
    const heroContainer = document.getElementsByClassName('hero-container');
    const getStartedButton = document.getElementById('getStartedButton');
  
    let slideIndex = 0;
      showSlides();
  
      function showSlides() {
          const slides = document.getElementsByClassName('mySlides');
          const dots = document.getElementsByClassName('dot');
          for (let i = 0; i < slides.length; i++) {
              slides[i].style.display = 'none';
          }
          slideIndex++;
          if (slideIndex > slides.length) {
              slideIndex = 1;
          }
          for (let i = 0; i < dots.length; i++) {
              dots[i].style.backgroundColor = '#bbb';
          }
          slides[slideIndex - 1].style.display = 'block';
          dots[slideIndex - 1].style.backgroundColor = '#4285f4';
          setTimeout(showSlides, 2000); // Change slide every 2 seconds
      }
  
      getStartedButton.addEventListener('click', function () {
        window.location.href = 'resume.html';
    });
  
  
    document.getElementById('numWorkExperiences').addEventListener('input', function (e) {
      const numWorkExperiences = parseInt(e.target.value, 10);
      generateWorkExperienceFields(numWorkExperiences);
    });
  
  
  });
  
  
  