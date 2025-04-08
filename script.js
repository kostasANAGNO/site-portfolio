function toggleMenu() {
  const navbar = document.querySelector("nav");
  navbar.classList.toggle("open");
}

particlesJS("particles-js", {
  particles: {
    number: {
      value: 100, // Number of particles
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#64ffda", // Particle color
    },
    shape: {
      type: "circle", // Particle shape
      stroke: {
        width: 0,
        color: "#fff",
      },
      polygon: {
        nb_sides: 5,
      },
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: true,
        speed: 40,
        size_min: 0.1,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "random",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600,
      },
    },
  },
  retina_detect: true,
});
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_pwuox2l", "template_aiall2y", this).then(
      function () {
        document.getElementById("status-message").innerText =
          "Message sent successfully!";
      },
      function (error) {
        document.getElementById("status-message").innerText =
          "Failed to send message. Please try again.";
        console.error("EmailJS Error:", error);
      }
    );

    this.reset();
  });
