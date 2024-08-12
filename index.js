
// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu
let scrollValue = 0;


// Créer un événément au scroll
window.addEventListener("scroll", () => {

  // Cacher la navbar si l'utilisateur comment à descendre et la sortir quand il remonte
  if (window.scrollY < scrollValue) {
    navbar.style.top = 0 + `px`;
  }else {
    navbar.style.top= -60 + `px`;
    }
    scrollValue = window.scrollY; // Connaitre niveau de scroll (window.scrollY)
  });
