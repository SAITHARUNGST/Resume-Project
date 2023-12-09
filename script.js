document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('resumeForm');
  const resumeSections = document.querySelectorAll('section');
  const resume = document.querySelectorAll('header');
  const workExperienceContainer = document.getElementById('workExperienceContainer');
  const resumeContainer = document.getElementById('resumeContainer');
  const editButton = document.getElementById('editButton');
  const printResumeButton = document.getElementById('printResume');
  const butdiv = document.getElementById('but');

  printResumeButton.addEventListener('click', function () {
      printResumeButton.style.display = 'none';
      editButton.style.display = 'none';
      butdiv.style.display = 'none';
      window.print();
  });

  editButton.addEventListener('click', function () {
      resumeContainer.style.display = 'none';
      form.style.display = 'block';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      printResumeButton.style.display = 'none';
      editButton.style.display = 'none';
  });

  window.addEventListener('afterprint', function () {
      printResumeButton.style.display = 'block';
      editButton.style.display = 'block';
  });

  document.getElementById('numWorkExperiences').addEventListener('input', function (e) {
      const numWorkExperiences = parseInt(e.target.value, 10);
      generateWorkExperienceFields(numWorkExperiences);
  });

  form.addEventListener('submit', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });

      const userName = document.getElementById('userNameInput').value;
      const userJobTitle = document.getElementById('userJobTitleInput').value;
      const userEmail = document.getElementById('userEmailInput').value;
      const userPhone = document.getElementById('userPhoneInput').value;
      const userLinkedIn = document.getElementById('userLinkedInInput').value;
      const userGitHub = document.getElementById('userGitHubInput').value;
      const userEducation = document.getElementById('userEducationInput').value;
      const userSkills = document.getElementById('userSkillsInput').value;
      const userJobExperiences = Array.from(document.querySelectorAll('.work-experience-item'));

      const selectedColor = document.getElementById('colorPicker').value;

      const formTitle = document.querySelector('.form h2');
      formTitle.style.display = 'none';
      document.body.style.backgroundColor = 'white';
      resumeContainer.style.backgroundImage = 'none';

      document.getElementById('userName').textContent = userName;
      document.getElementById('userJobTitle').textContent = userJobTitle;
      document.getElementById('userEmail').textContent = userEmail;
      document.getElementById('userPhone').textContent = userPhone;
      document.getElementById('userLinkedIn').textContent = userLinkedIn;
      document.getElementById('userGitHub').textContent = userGitHub;
      document.getElementById('userEducation').innerHTML = `<p>${userEducation}</p>`;

      const workExperienceHtml = userJobExperiences.map((experienceItem, i) => {
          const companyName = experienceItem.querySelector(`textarea[name="companyName${i + 1}"]`).value;
          const jobDescription = experienceItem.querySelector(`textarea[name="jobDescription${i + 1}"]`).value;
          return `<p><strong>${companyName}</strong></p><p>${jobDescription}</p>`;
      }).join('');

      document.getElementById('userWorkExperience').innerHTML = workExperienceHtml;

      const skillsList = userSkills
          .split(',')
          .map(skill => `<li style="background-color: ${selectedColor};">${skill.trim()}</li>`)
          .join('');
      const userSkillsElement = document.getElementById('userSkills');
      userSkillsElement.innerHTML = `<ul class="skills-list">${skillsList}</ul>`;

      resume.forEach(section => {
          section.style.display = 'block';
          section.style.backgroundColor = selectedColor;
      });

      resumeSections.forEach(section => {
          const h2Element = section.querySelector('h2');
          if (h2Element) {
              h2Element.style.color = selectedColor;
              h2Element.style.borderBottomColor = selectedColor;
          }
      });

      resumeContainer.style.display = 'block';
      printResumeButton.style.display = 'block';
      editButton.style.display = 'block';
      form.style.display = 'none';
      resumeSections.forEach(section => (section.style.display = 'block'));
  });

  function generateWorkExperienceFields(numWorkExperiences) {
      workExperienceContainer.innerHTML = '';

      for (let i = 0; i < numWorkExperiences; i++) {
          const workExperienceDiv = document.createElement('div');
          workExperienceDiv.className = 'work-experience-item';

          const companyNameLabel = document.createElement('label');
          companyNameLabel.textContent = `Company Name ${i + 1}:`;
          const companyNameTextarea = document.createElement('textarea');
          companyNameTextarea.name = `companyName${i + 1}`;  // Unique name for company name

          const jobDescriptionLabel = document.createElement('label');
          jobDescriptionLabel.textContent = `Job Description ${i + 1}:`;
          const jobDescriptionTextarea = document.createElement('textarea');
          jobDescriptionTextarea.name = `jobDescription${i + 1}`;  // Unique name for job description
          jobDescriptionTextarea.style.height = '100px';
          jobDescriptionTextarea.style.width = '300px';

          workExperienceDiv.appendChild(companyNameLabel);
          workExperienceDiv.appendChild(companyNameTextarea);
          workExperienceDiv.appendChild(jobDescriptionLabel);
          workExperienceDiv.appendChild(jobDescriptionTextarea);

          workExperienceContainer.appendChild(workExperienceDiv);
      }
  }
});
