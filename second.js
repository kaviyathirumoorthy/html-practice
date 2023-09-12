// Sample data for courses and user profile (replace with real data)
const coursesData = [
    { title: "Course 1", instructor: "Instructor 1" },
    { title: "Course 2", instructor: "Instructor 2" },
    // Add more courses here
];

const userData = {
    username: "JohnDoe",
    email: "johndoe@example.com",
    // Add more user profile data here
};

// DOM elements
const coursesLink = document.getElementById("courses-link");
const profileLink = document.getElementById("profile-link");
const coursesSection = document.getElementById("courses-section");
const profileSection = document.getElementById("profile-section");
const coursesList = document.getElementById("courses-list");
const userProfile = document.getElementById("user-profile");

// Event listeners
coursesLink.addEventListener("click", () => {
    coursesSection.style.display = "block";
    profileSection.style.display = "none";
});

profileLink.addEventListener("click", () => {
    coursesSection.style.display = "none";
    profileSection.style.display = "block";
    displayUserProfile();
});

// Function to display user profile information
function displayUserProfile() {
    userProfile.innerHTML = `
        <p><strong>Username:</strong> ${userData.username}</p>
        <p><strong>Email:</strong> ${userData.email}</p>
        <!-- Add more user profile information here -->
    `;
}

// Function to display courses
function displayCourses() {
    coursesList.innerHTML = "";
    coursesData.forEach((course) => {
        const courseCard = document.createElement("li");
        courseCard.innerHTML = `
            <div><strong>${course.title}</strong></div>
            <div>Instructor: ${course.instructor}</div>
            <button>Enroll</button>
        `;
        coursesList.appendChild(courseCard);
    });
}

// Initial display
displayCourses();
displayUserProfile();
coursesSection.style.display = "block";
profileSection.style.display = "none";
