const internships = [
    {
        id: 1,
        title: "Web Development Intern",
        company: "TechCorp Solutions",
        location: "remote",
        duration: "3",
        stipend: "₹15,000/month",
        category: "technology",
        posted: "2 days ago",
        skills: ["HTML", "CSS", "JavaScript", "React"]
    },
    {
        id: 2,
        title: "Graphic Design Intern",
        company: "Creative Studios",
        location: "mumbai",
        duration: "2",
        stipend: "₹12,000/month",
        category: "design",
        posted: "1 day ago",
        skills: ["Photoshop", "Illustrator", "Figma"]
    },
    {
        id: 3,
        title: "Digital Marketing Intern",
        company: "MarketPro Agency",
        location: "delhi",
        duration: "4",
        stipend: "₹10,000/month",
        category: "marketing",
        posted: "3 days ago",
        skills: ["SEO", "Social Media", "Analytics"]
    },
    {
        id: 4,
        title: "Data Science Intern",
        company: "DataMinds Inc",
        location: "bangalore",
        duration: "6",
        stipend: "₹20,000/month",
        category: "technology",
        posted: "1 day ago",
        skills: ["Python", "Machine Learning", "SQL"]
    },
    {
        id: 5,
        title: "Content Writing Intern",
        company: "WordSmith Media",
        location: "remote",
        duration: "3",
        stipend: "₹8,000/month",
        category: "content",
        posted: "4 days ago",
        skills: ["Writing", "Research", "SEO"]
    },
    {
        id: 6,
        title: "UI/UX Design Intern",
        company: "DesignHub",
        location: "hyderabad",
        duration: "5",
        stipend: "₹18,000/month",
        category: "design",
        posted: "2 days ago",
        skills: ["Figma", "Adobe XD", "Wireframing"]
    },
    {
        id: 7,
        title: "Business Development Intern",
        company: "GrowthWorks",
        location: "mumbai",
        duration: "4",
        stipend: "₹12,000/month",
        category: "business",
        posted: "5 days ago",
        skills: ["Communication", "Sales", "Strategy"]
    },
    {
        id: 8,
        title: "Android Development Intern",
        company: "AppGenius",
        location: "bangalore",
        duration: "6",
        stipend: "₹16,000/month",
        category: "technology",
        posted: "1 day ago",
        skills: ["Java", "Kotlin", "Android Studio"]
    },
    {
        id: 9,
        title: "Social Media Marketing Intern",
        company: "SocialBuzz",
        location: "remote",
        duration: "3",
        stipend: "₹9,000/month",
        category: "marketing",
        posted: "3 days ago",
        skills: ["Instagram", "Facebook", "Content Creation"]
    },
    {
        id: 10,
        title: "Backend Development Intern",
        company: "ServerTech",
        location: "delhi",
        duration: "5",
        stipend: "₹17,000/month",
        category: "technology",
        posted: "2 days ago",
        skills: ["Node.js", "MongoDB", "APIs"]
    },
    {
        id: 11,
        title: "HR Intern",
        company: "PeopleFirst HR",
        location: "hyderabad",
        duration: "4",
        stipend: "₹11,000/month",
        category: "business",
        posted: "4 days ago",
        skills: ["Recruitment", "Communication", "MS Office"]
    },
    {
        id: 12,
        title: "Video Editing Intern",
        company: "MediaCraft Studios",
        location: "mumbai",
        duration: "3",
        stipend: "₹13,000/month",
        category: "design",
        posted: "2 days ago",
        skills: ["Premiere Pro", "After Effects", "DaVinci"]
    }
];

// Store filtered internships
let filteredInternships = [...internships];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displayInternships(internships);
    updateCount(internships.length);
});

// Display internships
function displayInternships(internshipsToDisplay) {
    const grid = document.getElementById('internshipsGrid');
    grid.innerHTML = '';
    
    if (internshipsToDisplay.length === 0) {
        grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: #666;"><h3>No internships found</h3><p>Try adjusting your filters or search query</p></div>';
        return;
    }
    
    internshipsToDisplay.forEach(internship => {
        const card = createInternshipCard(internship);
        grid.appendChild(card);
    });
}

// Create internship card
function createInternshipCard(internship) {
    const card = document.createElement('div');
    card.className = 'internship-card';
    
    const companyInitial = internship.company.charAt(0);
    const locationDisplay = internship.location === 'remote' ? 'Work from Home' : capitalizeFirstLetter(internship.location);
    
    card.innerHTML = `
        <div class="card-header">
            <div class="company-logo">${companyInitial}</div>
            <i class="far fa-bookmark bookmark-icon" onclick="toggleBookmark(event, ${internship.id})"></i>
        </div>
        <div class="card-content">
            <h3>${internship.title}</h3>
            <p class="company-name">${internship.company}</p>
            <div class="card-details">
                <div class="detail-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${locationDisplay}</span>
                </div>
                <div class="detail-item">
                    <i class="fas fa-clock"></i>
                    <span>${internship.duration} months</span>
                </div>
                <div class="detail-item">
                    <i class="fas fa-rupee-sign"></i>
                    <span>${internship.stipend}</span>
                </div>
            </div>
            <div class="card-tags">
                ${internship.skills.map(skill => `<span class="card-tag">${skill}</span>`).join('')}
            </div>
        </div>
        <div class="card-footer">
            <span class="posted-date">${internship.posted}</span>
            <button class="apply-btn" onclick="applyInternship(${internship.id})">Apply Now</button>
        </div>
    `;
    
    return card;
}

// Search functionality
function searchInternships() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    filteredInternships = internships.filter(internship => {
        return internship.title.toLowerCase().includes(searchTerm) ||
               internship.company.toLowerCase().includes(searchTerm) ||
               internship.location.toLowerCase().includes(searchTerm) ||
               internship.skills.some(skill => skill.toLowerCase().includes(searchTerm));
    });
    
    displayInternships(filteredInternships);
    updateCount(filteredInternships.length);
}

// Apply filters
function applyFilters() {
    const category = document.getElementById('categoryFilter').value;
    const location = document.getElementById('locationFilter').value;
    const duration = document.getElementById('durationFilter').value;
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    filteredInternships = internships.filter(internship => {
        const matchesCategory = category === 'all' || internship.category === category;
        const matchesLocation = location === 'all' || internship.location === location;
        
        let matchesDuration = true;
        if (duration !== 'all') {
            const internshipDuration = parseInt(internship.duration);
            if (duration === '1-3') matchesDuration = internshipDuration >= 1 && internshipDuration <= 3;
            else if (duration === '3-6') matchesDuration = internshipDuration > 3 && internshipDuration <= 6;
            else if (duration === '6+') matchesDuration = internshipDuration > 6;
        }
        
        const matchesSearch = searchTerm === '' || 
                            internship.title.toLowerCase().includes(searchTerm) ||
                            internship.company.toLowerCase().includes(searchTerm) ||
                            internship.location.toLowerCase().includes(searchTerm) ||
                            internship.skills.some(skill => skill.toLowerCase().includes(searchTerm));
        
        return matchesCategory && matchesLocation && matchesDuration && matchesSearch;
    });
    
    displayInternships(filteredInternships);
    updateCount(filteredInternships.length);
}

// Clear all filters
function clearFilters() {
    document.getElementById('categoryFilter').value = 'all';
    document.getElementById('locationFilter').value = 'all';
    document.getElementById('durationFilter').value = 'all';
    document.getElementById('searchInput').value = '';
    
    filteredInternships = [...internships];
    displayInternships(filteredInternships);
    updateCount(filteredInternships.length);
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
        showNotification('Saved to bookmarks!');
    } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
        icon.style.color = '#999';
        showNotification('Removed from bookmarks!');
    }
}

// Apply for internship
function applyInternship(id) {
    const internship = internships.find(i => i.id === id);
    showNotification(`Applied for ${internship.title} at ${internship.company}!`);
}

// Show notification
function showNotification(message) {
    // Create notification element
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
    
    // Add animation
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
    
    // Remove after 3 seconds
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
            searchInternships();
        }
    });
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.right = '0';
            navLinks.style.background = 'white';
            navLinks.style.flexDirection = 'column';
            navLinks.style.padding = '1rem';
            navLinks.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
        });
    }
});
