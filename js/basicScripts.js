document.addEventListener("DOMContentLoaded", function () {
    const notificationButton = document.getElementById("notification");

    notificationButton.addEventListener("click", () => {
        if (Notification.permission === "granted") {
            showNotification("User Test");
        } else if (Notification.permission !== "denied") {
            Notification.requestPermission().then(permission => {
                if (permission === "granted") {
                    showNotification("Notification - test");
                }
            });
        }
    });

    function showNotification(title, message) {
        if (Notification.permission === "granted") {
            const notification = new Notification(title, { body: message });
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(".animate__animated");

    animatedElements.forEach(function (element, index) {
        element.style.animationDelay = `${index * 0.2}s`;
        element.classList.add("animate__fadeIn");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".card");

    function activateCardAnimation() {
      cards.forEach(function(card, index) {
        setTimeout(() => {
          card.classList.add("active");
        }, index * 100);
      });
    }

    activateCardAnimation();
  });
