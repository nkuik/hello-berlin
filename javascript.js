window.sr = ScrollReveal();
sr.reveal('.welcome', { duration: 1000});
sr.reveal('.description-detail', { duration: 1000}, 300);
sr.reveal('.question', { duration: 1000});
sr.reveal('.path', { duration: 200}, 300);
sr.reveal('#cd-timeline', { duration: 100, viewFactor: 0.13 });
sr.reveal('.cd-timeline-block', { duration: 100, viewFactor: 0.5 });
sr.reveal('.project', { duration: 200 });
sr.reveal('.icons', { duration: 500}, 100);


var popup = document.getElementById('popup');
document.getElementById('chat-button').onclick = function() {
  popup.classList.toggle('active');
  popup.classList.toggle('hidden');
}
