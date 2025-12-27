// Courses Data
const courses = [
    {
        id: 1,
        title: "Complete Web Development Bootcamp",
        instructor: "Dr. Angela Yu",
        category: "programming",
        level: "beginner",
        price: "free",
        duration: "12 weeks",
        students: "50,000+",
        rating: 4.8,
        skills: ["HTML", "CSS", "JavaScript", "React"]
    },
    {
        id: 2,
        title: "Python for Data Science",
        instructor: "Jose Portilla",
        category: "datascience",
        level: "intermediate",
        price: "paid",
        duration: "10 weeks",
        students: "35,000+",
        rating: 4.7,
        skills: ["Python", "Pandas", "NumPy", "Matplotlib"]
    },
    {
        id: 3,
        title: "Digital Marketing Masterclass",
        instructor: "Neil Patel",
        category: "marketing",
        level: "beginner",
        price: "paid",
        duration: "8 weeks",
        students: "28,000+",
        rating: 4.6,
        skills: ["SEO", "Social Media", "Google Ads", "Analytics"]
    },
    {
        id: 4,
        title: "UI/UX Design Complete Course",
        instructor: "Daniel Schifano",
        category: "design",
        level: "beginner",
        price: "free",
        duration: "6 weeks",
        students: "42,000+",
        rating: 4.9,
        skills: ["Figma", "Wireframing", "Prototyping", "User Research"]
    },
    {
        id: 5,
        title: "Advanced Machine Learning",
        instructor: "Andrew Ng",
        category: "datascience",
        level: "advanced",
        price: "paid",
        duration: "16 weeks",
        students: "45,000+",
        rating: 4.9,
        skills: ["ML", "TensorFlow", "Deep Learning", "Neural Networks"]
    },
    {
        id: 6,
        title: "Business Analytics & Intelligence",
        instructor: "Chris Haroun",
        category: "business",
        level: "intermediate",
        price: "paid",
        duration: "8 weeks",
        students: "22,000+",
        rating: 4.5,
        skills: ["Excel", "Tableau", "Power BI", "SQL"]
    },
    {
        id: 7,
        title: "Graphic Design Fundamentals",
        instructor: "Lindsay Marsh",
        category: "design",
        level: "beginner",
        price: "free",
        duration: "5 weeks",
        students: "38,000+",
        rating: 4.7,
        skills: ["Photoshop", "Illustrator", "Typography", "Color Theory"]
    },
    {
        id: 8,
        title: "Full Stack JavaScript",
        instructor: "Maximilian Schwarzmüller",
        category: "programming",
        level: "intermediate",
        price: "paid",
        duration: "14 weeks",
        students: "55,000+",
        rating: 4.8,
        skills: ["Node.js", "Express", "MongoDB", "React"]
    },
    {
        id: 9,
        title: "Content Marketing Strategy",
        instructor: "Ryan Deiss",
        category: "marketing",
        level: "intermediate",
        price: "free",
        duration: "6 weeks",
        students: "18,000+",
        rating: 4.6,
        skills: ["Content Strategy", "Copywriting", "SEO", "Social Media"]
    },
    {
        id: 10,
        title: "Mobile App Development",
        instructor: "Rob Percival",
        category: "programming",
        level: "intermediate",
        price: "paid",
        duration: "12 weeks",
        students: "32,000+",
        rating: 4.7,
        skills: ["Flutter", "React Native", "iOS", "Android"]
    },
    {
        id: 11,
        title: "Financial Analysis & Modeling",
        instructor: "Chris Benjamin",
        category: "business",
        level: "advanced",
        price: "paid",
        duration: "10 weeks",
        students: "15,000+",
        rating: 4.8,
        skills: ["Excel", "Financial Modeling", "Valuation", "Forecasting"]
    },
    {
        id: 12,
        title: "AWS Cloud Practitioner",
        instructor: "Stephane Maarek",
        category: "programming",
        level: "beginner",
        price: "free",
        duration: "8 weeks",
        students: "40,000+",
        rating: 4.7,
        skills: ["AWS", "Cloud Computing", "EC2", "S3"]
    }
];

// Store filtered courses
let filteredCourses = [...courses];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displayCourses(courses);
    updateCount(courses.length);
});

// Display courses
function displayCourses(coursesToDisplay) {
    const grid = document.getElementById('coursesGrid');
    grid.innerHTML = '';
    
    if (coursesToDisplay.length === 0) {
        grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: #666;"><h3>No courses found</h3><p>Try adjusting your filters or search query</p></div>';
        return;
    }
    
    coursesToDisplay.forEach(course => {
        const card = createCourseCard(course);
        grid.appendChild(card);
    });
}

// Create course card
function createCourseCard(course) {
    const card = document.createElement('div');
    card.className = 'internship-card';
    
    const instructorInitial = course.instructor.split(' ').map(n => n[0]).join('');
    const priceDisplay = course.price === 'free' ? 'Free' : '₹3,999';
    
    card.innerHTML = `
        <div class="card-header">
            <div class="company-logo">${instructorInitial}</div>
            <i class="far fa-bookmark bookmark-icon" onclick="toggleBookmark(event, ${course.id})"></i>
        </div>
        <div class="card-content">
            <h3>${course.title}</h3>
            <p class="company-name">by ${course.instructor}</p>
            <div class="card-details">
                <div class="detail-item">
                    <i class="fas fa-signal"></i>
                    <span>${capitalizeFirstLetter(course.level)}</span>
                </div>
                <div class="detail-item">
                    <i class="fas fa-clock"></i>
                    <span>${course.duration}</span>
                </div>
                <div class="detail-item">
                    <i class="fas fa-users"></i>
                    <span>${course.students} enrolled</span>
                </div>
                <div class="detail-item">
                    <i class="fas fa-star" style="color: #f39c12;"></i>
                    <span>${course.rating} Rating</span>
                </div>
            </div>
            <div class="card-tags">
                ${course.skills.map(skill => `<span class="card-tag">${skill}</span>`).join('')}
            </div>
        </div>
        <div class="card-footer">
            <span class="posted-date" style="font-size: 1.1rem; font-weight: bold; color: ${course.price === 'free' ? '#27ae60' : '#00A5EC'};">${priceDisplay}</span>
            <button class="apply-btn" onclick="enrollCourse(${course.id})">Enroll Now</button>
        </div>
    `;
    
    return card;
}

// Search functionality
function searchCourses() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    filteredCourses = courses.filter(course => {
        return course.title.toLowerCase().includes(searchTerm) ||
               course.instructor.toLowerCase().includes(searchTerm) ||
               course.category.toLowerCase().includes(searchTerm) ||
               course.skills.some(skill => skill.toLowerCase().includes(searchTerm));
    });
    
    displayCourses(filteredCourses);
    updateCount(filteredCourses.length);
}

// Apply filters
function applyFilters() {
    const category = document.getElementById('categoryFilter').value;
    const level = document.getElementById('levelFilter').value;
    const price = document.getElementById('priceFilter').value;
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    filteredCourses = courses.filter(course => {
        const matchesCategory = category === 'all' || course.category === category;
        const matchesLevel = level === 'all' || course.level === level;
        const matchesPrice = price === 'all' || course.price === price;
        
        const matchesSearch = searchTerm === '' || 
                            course.title.toLowerCase().includes(searchTerm) ||
                            course.instructor.toLowerCase().includes(searchTerm) ||
                            course.category.toLowerCase().includes(searchTerm) ||
                            course.skills.some(skill => skill.toLowerCase().includes(searchTerm));
        
        return matchesCategory && matchesLevel && matchesPrice && matchesSearch;
    });
    
    displayCourses(filteredCourses);
    updateCount(filteredCourses.length);
}

// Clear all filters
function clearFilters() {
    document.getElementById('categoryFilter').value = 'all';
    document.getElementById('levelFilter').value = 'all';
    document.getElementById('priceFilter').value = 'all';
    document.getElementById('searchInput').value = '';
    
    filteredCourses = [...courses];
    displayCourses(filteredCourses);
    updateCount(filteredCourses.length);
}

// Update count
function updateCount(count) {
    document.getElementById('count').textContent = count;
}

// Toggle bookmark
function toggleBookmark(event, id) {
    event.stopPropagation();
    const icon = event.target;
    
    if (icon.classList.contains('far')) {
        icon.classList.remove('far');
        icon.classList.add('fas');
        icon.style.color = '#00A5EC';
        showNotification('Added to wishlist!');
    } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
        icon.style.color = '#999';
        showNotification('Removed from wishlist!');
    }
}

// Enroll in course
function enrollCourse(id) {
    const course = courses.find(c => c.id === id);
    showNotification(`Successfully enrolled in ${course.title}!`);
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #00A5EC;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 5px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;
    notification.textContent = message;
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideIn 0.3s ease-out reverse';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Helper function
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Search on Enter key
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('searchInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchCourses();
        }
    });
});
