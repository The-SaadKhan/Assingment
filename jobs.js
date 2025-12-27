// Jobs Data
const jobs = [
    {
        id: 1,
        title: "Software Engineer",
        company: "TechGiants Ltd",
        location: "bangalore",
        jobType: "fulltime",
        experience: "1-3",
        salary: "₹8-12 LPA",
        posted: "1 day ago",
        skills: ["Java", "Spring Boot", "MySQL", "REST APIs"]
    },
    {
        id: 2,
        title: "Frontend Developer",
        company: "WebCraft Solutions",
        location: "remote",
        jobType: "fulltime",
        experience: "1-3",
        salary: "₹6-10 LPA",
        posted: "2 days ago",
        skills: ["React", "TypeScript", "CSS", "Redux"]
    },
    {
        id: 3,
        title: "Product Manager",
        company: "InnovateCorp",
        location: "mumbai",
        jobType: "fulltime",
        experience: "3-5",
        salary: "₹15-20 LPA",
        posted: "3 days ago",
        skills: ["Product Strategy", "Agile", "Analytics", "Leadership"]
    },
    {
        id: 4,
        title: "Data Scientist",
        company: "DataDriven Inc",
        location: "bangalore",
        jobType: "fulltime",
        experience: "1-3",
        salary: "₹10-15 LPA",
        posted: "1 day ago",
        skills: ["Python", "ML", "TensorFlow", "Statistics"]
    },
    {
        id: 5,
        title: "UI/UX Designer",
        company: "DesignPro Studios",
        location: "delhi",
        jobType: "fulltime",
        experience: "1-3",
        salary: "₹7-11 LPA",
        posted: "4 days ago",
        skills: ["Figma", "Adobe XD", "Prototyping", "User Research"]
    },
    {
        id: 6,
        title: "DevOps Engineer",
        company: "CloudTech Systems",
        location: "hyderabad",
        jobType: "fulltime",
        experience: "3-5",
        salary: "₹12-18 LPA",
        posted: "2 days ago",
        skills: ["AWS", "Docker", "Kubernetes", "CI/CD"]
    },
    {
        id: 7,
        title: "Business Analyst",
        company: "ConsultPro",
        location: "mumbai",
        jobType: "fulltime",
        experience: "1-3",
        salary: "₹8-13 LPA",
        posted: "5 days ago",
        skills: ["Excel", "SQL", "Tableau", "Business Intelligence"]
    },
    {
        id: 8,
        title: "Sales Executive",
        company: "SalesForce India",
        location: "delhi",
        jobType: "fulltime",
        experience: "fresher",
        salary: "₹4-6 LPA",
        posted: "1 day ago",
        skills: ["Communication", "CRM", "Negotiation", "Client Relations"]
    },
    {
        id: 9,
        title: "Content Writer",
        company: "MediaWorks",
        location: "remote",
        jobType: "parttime",
        experience: "fresher",
        salary: "₹3-5 LPA",
        posted: "3 days ago",
        skills: ["SEO Writing", "Copywriting", "Research", "Editing"]
    },
    {
        id: 10,
        title: "Mobile App Developer",
        company: "AppMasters",
        location: "bangalore",
        jobType: "fulltime",
        experience: "3-5",
        salary: "₹10-16 LPA",
        posted: "2 days ago",
        skills: ["Flutter", "React Native", "iOS", "Android"]
    }
];

// Store filtered jobs
let filteredJobs = [...jobs];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displayJobs(jobs);
    updateCount(jobs.length);
});

// Display jobs
function displayJobs(jobsToDisplay) {
    const grid = document.getElementById('jobsGrid');
    grid.innerHTML = '';
    
    if (jobsToDisplay.length === 0) {
        grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: #666;"><h3>No jobs found</h3><p>Try adjusting your filters or search query</p></div>';
        return;
    }
    
    jobsToDisplay.forEach(job => {
        const card = createJobCard(job);
        grid.appendChild(card);
    });
}

// Create job card
function createJobCard(job) {
    const card = document.createElement('div');
    card.className = 'internship-card';
    
    const companyInitial = job.company.charAt(0);
    const locationDisplay = job.location === 'remote' ? 'Work from Home' : capitalizeFirstLetter(job.location);
    
    card.innerHTML = `
        <div class="card-header">
            <div class="company-logo">${companyInitial}</div>
            <i class="far fa-bookmark bookmark-icon" onclick="toggleBookmark(event, ${job.id})"></i>
        </div>
        <div class="card-content">
            <h3>${job.title}</h3>
            <p class="company-name">${job.company}</p>
            <div class="card-details">
                <div class="detail-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${locationDisplay}</span>
                </div>
                <div class="detail-item">
                    <i class="fas fa-briefcase"></i>
                    <span>${capitalizeFirstLetter(job.jobType)}</span>
                </div>
                <div class="detail-item">
                    <i class="fas fa-chart-line"></i>
                    <span>${getExperienceLabel(job.experience)}</span>
                </div>
                <div class="detail-item">
                    <i class="fas fa-rupee-sign"></i>
                    <span>${job.salary}</span>
                </div>
            </div>
            <div class="card-tags">
                ${job.skills.map(skill => `<span class="card-tag">${skill}</span>`).join('')}
            </div>
        </div>
        <div class="card-footer">
            <span class="posted-date">${job.posted}</span>
            <button class="apply-btn" onclick="applyJob(${job.id})">Apply Now</button>
        </div>
    `;
    
    return card;
}

// Search functionality
function searchJobs() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    filteredJobs = jobs.filter(job => {
        return job.title.toLowerCase().includes(searchTerm) ||
               job.company.toLowerCase().includes(searchTerm) ||
               job.location.toLowerCase().includes(searchTerm) ||
               job.skills.some(skill => skill.toLowerCase().includes(searchTerm));
    });
    
    displayJobs(filteredJobs);
    updateCount(filteredJobs.length);
}

// Apply filters
function applyFilters() {
    const jobType = document.getElementById('jobTypeFilter').value;
    const location = document.getElementById('locationFilter').value;
    const experience = document.getElementById('experienceFilter').value;
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    filteredJobs = jobs.filter(job => {
        const matchesJobType = jobType === 'all' || job.jobType === jobType;
        const matchesLocation = location === 'all' || job.location === location;
        const matchesExperience = experience === 'all' || job.experience === experience;
        
        const matchesSearch = searchTerm === '' || 
                            job.title.toLowerCase().includes(searchTerm) ||
                            job.company.toLowerCase().includes(searchTerm) ||
                            job.location.toLowerCase().includes(searchTerm) ||
                            job.skills.some(skill => skill.toLowerCase().includes(searchTerm));
        
        return matchesJobType && matchesLocation && matchesExperience && matchesSearch;
    });
    
    displayJobs(filteredJobs);
    updateCount(filteredJobs.length);
}

// Clear all filters
function clearFilters() {
    document.getElementById('jobTypeFilter').value = 'all';
    document.getElementById('locationFilter').value = 'all';
    document.getElementById('experienceFilter').value = 'all';
    document.getElementById('searchInput').value = '';
    
    filteredJobs = [...jobs];
    displayJobs(filteredJobs);
    updateCount(filteredJobs.length);
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

// Apply for job
function applyJob(id) {
    const job = jobs.find(j => j.id === id);
    showNotification(`Applied for ${job.title} at ${job.company}!`);
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

// Helper functions
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getExperienceLabel(exp) {
    if (exp === 'fresher') return 'Fresher';
    if (exp === '1-3') return '1-3 Years';
    if (exp === '3-5') return '3-5 Years';
    if (exp === '5+') return '5+ Years';
    return exp;
}

// Search on Enter key
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('searchInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchJobs();
        }
    });
});
