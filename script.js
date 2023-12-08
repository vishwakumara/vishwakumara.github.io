function toggleMenu() {
  var menuContent = document.querySelector(".menu-content");
  menuContent.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
  const h2Element = document.getElementById("changingText");
  const paragraphElement = document.getElementById("paragraphContent");
  const textOptions = [
    "I'm passionate web Designer",
    "I'm passionate Web Developer",
    "I'm passionate Software Developer",
    "I'm passionate Fullstack Developer",
  ];
  const roleDescriptions = [
    "Hey there! I'm a creative web designer with a knack for turning concepts into visually appealing and user-friendly websites. I love playing with colors, layouts, and interactive elements to deliver a seamless user experience. My passion lies in crafting designs that not only look great but also function effortlessly. Let's create a stunning online presence together!",
    "a dynamic 21-year-old web developer with a fervent dedication to crafting captivating digital experiences. My foundation in HTML, CSS, and JavaScript fuels my passion for coding, while my unwavering curiosity and problem-solving prowess drive me to stay at the forefront of emerging technologies. With a keen eye for user-centric design and a commitment to responsive websites, I'm eager to bring my technical skills, adaptability, and relentless enthusiasm to innovative web projects, contributing to the creation of exceptional online experiences.",
    "Greetings! I'm a dedicated software developer who thrives on translating ideas into robust and efficient code. Whether it's designing user interfaces or optimizing algorithms, I love the challenge of problem-solving. My commitment to staying current with industry trends ensures that the software I build is not only functional but also scalable and future-proof. Let's write some powerful code together!",
    "Hello! I'm a versatile full-stack developer proficient in both front-end and back-end technologies. From designing user interfaces that captivate users to building the server-side logic that powers applications, I'm all about creating end-to-end solutions. My passion for tackling challenges extends across the entire development stack, making me adept at delivering comprehensive and seamless software experiences. Let's build something amazing from top to bottom!",
  ];
  let currentIndex = 0;
  let isTyping = false;

  function changeText() {
    if (!isTyping) {
      // Typing animation for the h2 tag
      typeParagraph(textOptions[currentIndex], h2Element);
      // Typing animation for the paragraph content
      typeParagraph(roleDescriptions[currentIndex], paragraphElement);

      currentIndex = (currentIndex + 1) % textOptions.length;
    }

    setTimeout(changeText, 20000); // 10-second delay
  }

  // Start the text change process
  setTimeout(changeText, 10000); // 5-second initial delay

  function typeParagraph(text, element) {
    isTyping = true;
    element.innerHTML = ""; // Clear existing content
    let index = 0;

    function type() {
      if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 20); // 200 milliseconds typing speed
      } else {
        isTyping = false;
      }
    }

    // Start typing animation
    setTimeout(type, 0);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const mainLeftImage = document.querySelector(".mainleft img");

  mainLeftImage.addEventListener("mouseenter", function () {
    const randomColor = getRandomColor();
    this.style.backgroundColor = randomColor;
  });

  mainLeftImage.addEventListener("mouseleave", function () {
    this.style.backgroundColor = "";
  });

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});

// Function to toggle dark mode
function toggleDarkMode() {
  const body = document.body;
  const isDarkMode = body.classList.toggle("dark-mode");

  // Set a cookie to remember the dark mode state
  document.cookie = `darkMode=${isDarkMode}; path=/`;

  // Update the dark mode icon for the menu icon and right header
  updateDarkModeIcon(isDarkMode);
}

// Function to update the dark mode icon
function updateDarkModeIcon(isDarkMode) {
  const modeIcon = document.querySelector(".modeicon");
  const darkModeIcon = "🌙";
  const lightModeIcon = "☀️";

  modeIcon.innerHTML = isDarkMode ? lightModeIcon : darkModeIcon;
}

// Function to apply dark mode on page load
document.addEventListener("DOMContentLoaded", function () {
  // Check if the dark mode cookie is set
  const darkModeCookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith("darkMode="));
  const isDarkMode = darkModeCookie
    ? darkModeCookie.split("=")[1] === "true"
    : false;

  // Apply dark mode based on the cookie for the body and icon
  const body = document.body;

  if (isDarkMode) {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }

  // Update the dark mode icon
  updateDarkModeIcon(isDarkMode);
});
// Function to update the dark mode icon
function updateDarkModeIcon(isDarkMode) {
  const modeIcon = document.querySelector(".modeicon");
  const darkModeIcon = "🌙";
  const lightModeIcon = "☀️";

  modeIcon.innerHTML = isDarkMode ? lightModeIcon : darkModeIcon;

  // If the dark mode icon is in the menu content, update it there as well
  const menuIcon = document.querySelector(".menu-content .modeicon");
  if (menuIcon) {
    menuIcon.innerHTML = isDarkMode ? lightModeIcon : darkModeIcon;
  }
}
