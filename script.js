document.addEventListener('DOMContentLoaded', function() {
    // Contact Form Submission
    const contactForm = document.querySelector('.contact-form');
    const formFeedback = document.querySelector('.form-feedback');

    if (contactForm && formFeedback) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            formFeedback.textContent = 'Thank you for your message!';
            formFeedback.style.color = 'green';

            contactForm.reset();
        });
    }

    // Skills Section - Example for progress bars
    const skills = document.querySelectorAll('.progress-line span');
    skills.forEach(skill => {
        skill.style.width = '75%'; // Example percentage for skills
    });

    // Comments Section - Add new comment
    const commentsForm = document.querySelector('.comments-form');
    const commentsList = document.querySelector('.comments-list');

    if (commentsForm && commentsList) {
        commentsForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = commentsForm.querySelector('input[name="name"]').value;
            const message = commentsForm.querySelector('textarea[name="message"]').value;

            if (name && message) {
                const commentDiv = document.createElement('div');
                commentDiv.innerHTML = `<p><strong>${name}</strong>: ${message}</p>`;

                commentsList.appendChild(commentDiv);

                commentsForm.reset();
            }
        });
    }
});
