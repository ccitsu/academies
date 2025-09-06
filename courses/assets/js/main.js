// JS for FAQ toggle, testimonials carousel, etc.
document.addEventListener('DOMContentLoaded', function() {
    // FAQ toggle
    document.querySelectorAll('.faq-question').forEach(function(q) {
        q.addEventListener('click', function() {
            this.classList.toggle('active');
            var answer = this.nextElementSibling;
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    });
    // Add more JS as needed
});
