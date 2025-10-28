Project Overview

This is a fully functional front-end prototype of an E-Learning Platform built using HTML, CSS, and JavaScript.
It simulates navigation between different sections (Home, Courses, Dashboard, Profile, Login) without reloading the page — just like a Single Page Application (SPA).

It also supports:

Course enrollment simulation

User login with local storage

Dynamic course dashboard updates

Active tab highlighting

Search functionality

🧱 Project Structure
📁 E-Learning Platform
 ┣ 📄 index.html      → Main structure (navigation, sections)
 ┣ 📄 ecom.css        → Styling (layout, colors, animations)
 ┗ 📄 ecom.js         → JavaScript logic (navigation, enrollment, login)

🧩 HTML Breakdown (index.html)
1️⃣ Header Navigation
<header>
    <nav>
        <ul>
            <li><a href="#" id="home" onclick="setActivePage('home')">Home</a></li>
            <li><a href="#" id="courses" onclick="setActivePage('courses')">Courses</a></li>
            <li><a href="#" id="dashboard" onclick="setActivePage('dashboard')">Dashboard</a></li>
            <li><a href="#" id="profile" onclick="setActivePage('profile')">Profile</a></li>
            <li><a href="#" id="login" onclick="setActivePage('login')">Login</a></li>
        </ul>
    </nav>
</header>


👉 Provides top navigation menu.
Each link calls setActivePage('pageName') — this function shows only the selected section dynamically.

2️⃣ Home Page
<section id="page-home" class="page-section active">
    <div class="hero-banner">
        <h1>Learn New Skills with Top Courses</h1>
        <input type="text" id="courseSearch" placeholder="Search for courses...">
    </div>
</section>


👉 This is the landing page, featuring:

A motivational banner

A search bar (connected to JavaScript filtering logic)

It’s visible by default (class="active")

3️⃣ Courses Page
<section id="page-courses" class="page-section">
    <h2>Featured Courses</h2>
    <div class="course-list"> ... </div>
</section>


👉 Displays a grid of featured courses — each with:

Image

Title

Description

Enroll Now button

The “Enroll Now” button calls enrollNow(courseName) and stores the enrollment in localStorage.

4️⃣ Dashboard Page
<section id="page-dashboard" class="page-section">
    <h2>My Enrolled Courses</h2>
    <div id="enrolledCoursesList" class="course-list"></div>
</section>


👉 Shows a dynamic list of courses the user has enrolled in.
Courses are fetched from localStorage.

