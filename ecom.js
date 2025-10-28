// ===========================
// PAGE NAVIGATION HANDLER
// ===========================
function setActivePage(pageId) {
    // Hide all sections
    const pages = document.querySelectorAll('.page-section');
    pages.forEach(page => page.classList.remove('active'));

    // Show selected section
    const selected = document.getElementById(`page-${pageId}`);
    if (selected) selected.classList.add('active');

    // Highlight the active nav link
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => link.classList.remove('active-link'));
    const activeLink = document.getElementById(pageId);
    if (activeLink) activeLink.classList.add('active-link');

    // Save current page to localStorage
    localStorage.setItem('currentPage', pageId);
}

// ===========================
// COURSE ENROLLMENT
// ===========================
function enrollNow(courseName) {
    alert(`You have successfully enrolled in ${courseName}!`);
    const enrolledList = document.getElementById("enrolledCoursesList");

    const newCourse = document.createElement("div");
    newCourse.className = "course-card";
    newCourse.innerHTML = `
        <h3>${courseName}</h3>
        <p>You're enrolled in this course!</p>
    `;
    enrolledList.appendChild(newCourse);

    // Save enrolled courses to localStorage
    let enrolled = JSON.parse(localStorage.getItem("enrolledCourses")) || [];
    enrolled.push(courseName);
    localStorage.setItem("enrolledCourses", JSON.stringify(enrolled));

    setActivePage("dashboard");
}

// ===========================
// LOGIN HANDLER
// ===========================
function loginUser() {
    const name = document.getElementById("loginName").value.trim();
    const email = document.getElementById("loginEmail").value.trim();

    if (!name || !email) {
        alert("Please enter both username and email!");
        return false;
    }

    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);

    document.getElementById("profileName").innerText = name;
    document.getElementById("profileEmail").innerText = email;

    alert(`Welcome, ${name}!`);
    setActivePage("home");
    return false; // prevent page reload
}

// ===========================
// EDIT PROFILE
// ===========================
function editProfile() {
    const newName = prompt("Enter new name:", localStorage.getItem("userName") || "Guest User");
    const newEmail = prompt("Enter new email:", localStorage.getItem("userEmail") || "guest@example.com");

    if (newName && newEmail) {
        localStorage.setItem("userName", newName);
        localStorage.setItem("userEmail", newEmail);
        document.getElementById("profileName").innerText = newName;
        document.getElementById("profileEmail").innerText = newEmail;
        alert("Profile updated successfully!");
    }
}

// ===========================
// LOGOUT FUNCTIONALITY
// ===========================
function logoutUser() {
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    alert("You have logged out successfully!");
    document.getElementById("profileName").innerText = "Guest User";
    document.getElementById("profileEmail").innerText = "guest@example.com";
    setActivePage("home");
}

// ===========================
// RESTORE STATE ON RELOAD
// ===========================
window.onload = () => {
    const name = localStorage.getItem("userName");
    const email = localStorage.getItem("userEmail");
    const enrolled = JSON.parse(localStorage.getItem("enrolledCourses")) || [];
    const savedPage = localStorage.getItem("currentPage") || "home";

    if (name && email) {
        document.getElementById("profileName").innerText = name;
        document.getElementById("profileEmail").innerText = email;
    }

    const enrolledList = document.getElementById("enrolledCoursesList");
    enrolled.forEach(course => {
        const div = document.createElement("div");
        div.className = "course-card";
        div.innerHTML = `<h3>${course}</h3><p>You're enrolled in this course!</p>`;
        enrolledList.appendChild(div);
    });

    setActivePage(savedPage);
};
