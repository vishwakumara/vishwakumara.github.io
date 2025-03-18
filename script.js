document.addEventListener("DOMContentLoaded", function () {
    // Create warning alert
    const warningDiv = document.createElement("div");
    warningDiv.classList.add("warning-alert");
    warningDiv.innerHTML = `
        <div class="warning-content">
            <h2>⚠️ WARNING ⚠️</h2>
        </div>
        <div class="warning-content-message">
            <h4>⚠️ it might be harmfull to your device ⚠️</h4>
        </div>

    `;
    document.body.appendChild(warningDiv);

    // Hide newspaper initially
    const newspaper = document.querySelector(".newspaper");
    newspaper.style.display = "none";

    // Remove warning and show newspaper after 3 seconds
    setTimeout(() => {
        warningDiv.style.opacity = "0";
        setTimeout(() => {
            warningDiv.remove();
            newspaper.style.display = "block";
        }, 1000);
    }, 3000);
});

