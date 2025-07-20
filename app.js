// Quantitative Finance Learning Tracker Application

class LearningTracker {
    constructor() {
        this.currentTab = 'overview';
        this.currentMonth = 0;
        this.currentTheme = 'light';
        
        // Initialize data structures
        this.data = this.initializeData();
        
        // Initialize the application
        this.init();
    }

    initializeData() {
        return {
            months: [
                {
                    name: "Month 1 (Aug 2025)",
                    title: "WQU Data Science Lab Project 1 + Financial Markets Foundation",
                    wqu_project: {
                        name: "Housing in Mexico",
                        skills: ["Python basics", "Data visualization", "Correlation analysis", "CSV data handling"],
                        hours: 12,
                        completed: false
                    },
                    mscfe_course: {
                        name: "Financial Markets (Week 1)",
                        content: ["Introduction to Financial Markets", "Market Regulation", "Interest and Money Markets"],
                        hours: 4,
                        progress: 0
                    },
                    udemy_topics: [
                        { name: "Python basics for ML", completed: false },
                        { name: "NumPy and Pandas fundamentals", completed: false },
                        { name: "Data preprocessing for financial data", completed: false },
                        { name: "Basic statistics for ML", completed: false }
                    ],
                    additional: {
                        name: "Quantitative Finance Fundamentals",
                        topics: ["Financial instruments overview", "Time value of money basics", "Introduction to Python for finance"],
                        hours: 4,
                        progress: 0
                    },
                    total_hours: 23,
                    actual_hours: { wqu: 0, mscfe: 0, udemy: 0, additional: 0 }
                },
                {
                    name: "Month 2 (Sep 2025)",
                    title: "WQU Data Science Lab Project 2 + Financial Markets Continuation",
                    wqu_project: {
                        name: "Apartment Sales in Buenos Aires",
                        skills: ["Linear regression", "Scikit-learn", "Data pipelines", "Overfitting reduction"],
                        hours: 12,
                        completed: false
                    },
                    mscfe_course: {
                        name: "Financial Markets (Complete)",
                        content: ["Fixed Income Markets", "Stock and Equity Markets", "Futures and Options", "Market Making"],
                        hours: 4,
                        progress: 0
                    },
                    udemy_topics: [
                        { name: "Supervised learning fundamentals", completed: false },
                        { name: "Linear regression (financial applications)", completed: false },
                        { name: "Data visualization with matplotlib/seaborn", completed: false },
                        { name: "Feature engineering for financial data", completed: false }
                    ],
                    additional: {
                        name: "Technical Analysis & Portfolio Theory Intro",
                        topics: ["Moving averages", "Support/resistance", "Modern Portfolio Theory basics"],
                        hours: 4,
                        progress: 0
                    },
                    total_hours: 23,
                    actual_hours: { wqu: 0, mscfe: 0, udemy: 0, additional: 0 }
                },
                {
                    name: "Month 3 (Oct 2025)",
                    title: "WQU Data Science Lab Project 3 + Financial Data Analysis",
                    wqu_project: {
                        name: "Air Quality in Nairobi (Time Series Focus)",
                        skills: ["ARMA models", "MongoDB", "Time series analysis", "Hyperparameter tuning"],
                        hours: 12,
                        completed: false
                    },
                    mscfe_course: {
                        name: "Financial Data (Weeks 1-4)",
                        content: ["Financial data sources", "Python data manipulation", "Data visualization", "Technical analysis with data"],
                        hours: 4,
                        progress: 0
                    },
                    udemy_topics: [
                        { name: "Time series analysis and forecasting", completed: false },
                        { name: "ARIMA models for financial time series", completed: false },
                        { name: "Classification algorithms", completed: false },
                        { name: "Model evaluation and validation", completed: false }
                    ],
                    additional: {
                        name: "Machine Learning for Finance Intro",
                        topics: ["Supervised learning", "Feature engineering", "Cross-validation", "Financial ML applications"],
                        hours: 4,
                        progress: 0
                    },
                    total_hours: 23,
                    actual_hours: { wqu: 0, mscfe: 0, udemy: 0, additional: 0 }
                }
            ],
            skills: [
                { category: "Python Programming", name: "Basic Python Syntax", target_month: 1, level: 0, target_level: 5 },
                { category: "Python Programming", name: "Pandas Data Manipulation", target_month: 1, level: 0, target_level: 4 },
                { category: "Machine Learning", name: "Linear Regression", target_month: 2, level: 0, target_level: 5 },
                { category: "Machine Learning", name: "Time Series Analysis", target_month: 3, level: 0, target_level: 5 },
                { category: "Financial Theory", name: "Financial Markets Understanding", target_month: 2, level: 0, target_level: 5 },
                { category: "Financial Theory", name: "Portfolio Theory", target_month: 5, level: 0, target_level: 5 }
            ],
            daily_habits: [
                { name: "Morning market news (30 min)", target_minutes: 30, completed: false, actual_minutes: 0 },
                { name: "WQU project work (1 hour)", target_minutes: 60, completed: false, actual_minutes: 0 },
                { name: "MScFE study (45 min)", target_minutes: 45, completed: false, actual_minutes: 0 },
                { name: "Udemy ML/NLP content (30 min)", target_minutes: 30, completed: false, actual_minutes: 0 },
                { name: "Additional reading (30 min)", target_minutes: 30, completed: false, actual_minutes: 0 },
                { name: "Progress logging (15 min)", target_minutes: 15, completed: false, actual_minutes: 0 }
            ],
            learning_techniques: [
                { name: "Active Recall", implemented: false },
                { name: "Spaced Repetition", implemented: false },
                { name: "Feynman Technique", implemented: false },
                { name: "Pomodoro Technique", implemented: false }
            ],
            resources: [
                { 
                    title: "Hull - Options, Futures, and Other Derivatives", 
                    pages: 800, 
                    chapters: 20, 
                    pages_read: 0,
                    chapters_completed: [false, false, false, false, false],
                    rating: 0
                },
                { 
                    title: "Python for Finance - Yves Hilpisch", 
                    pages: 600, 
                    chapters: 18, 
                    pages_read: 0,
                    chapters_completed: [false, false, false, false, false],
                    rating: 0
                },
                { 
                    title: "Machine Learning for Algorithmic Trading - Jansen", 
                    pages: 700, 
                    chapters: 15, 
                    pages_read: 0,
                    chapters_completed: [false, false, false, false, false],
                    rating: 0
                }
            ],
            habits_calendar: {},
            streak: { current: 7, best: 12 },
            analytics: {
                weekly_hours: [12, 15, 18, 17, 22, 19, 17],
                track_progress: [33, 22, 44, 18]
            }
        };
    }

    init() {
        console.log('Initializing Learning Tracker...');
        
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.initializeApp();
            });
        } else {
            this.initializeApp();
        }
    }

    initializeApp() {
        this.setupEventListeners();
        this.initializeProgressBars();
        this.updateOverviewDashboard();
        this.generateCalendar();
        this.setCurrentDate();
        
        // Initialize charts after a small delay to ensure Canvas elements are ready
        setTimeout(() => {
            this.setupCharts();
        }, 100);
        
        console.log('Learning Tracker initialized successfully');
    }

    setupEventListeners() {
        console.log('Setting up event listeners...');
        
        // Tab navigation
        const tabButtons = document.querySelectorAll('.tab-button');
        console.log(`Found ${tabButtons.length} tab buttons`);
        
        tabButtons.forEach((button, index) => {
            console.log(`Setting up listener for tab: ${button.dataset.tab}`);
            button.addEventListener('click', (e) => {
                e.preventDefault();
                console.log(`Tab clicked: ${e.target.dataset.tab}`);
                this.switchTab(e.target.dataset.tab);
            });
        });

        // Month navigation
        const monthButtons = document.querySelectorAll('.month-tab');
        monthButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                this.switchMonth(parseInt(e.target.dataset.month));
            });
        });

        // Theme toggle
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleTheme();
            });
        }

        // Export data
        const exportButton = document.getElementById('exportData');
        if (exportButton) {
            exportButton.addEventListener('click', (e) => {
                e.preventDefault();
                this.exportData();
            });
        }

        // Set up other listeners
        this.setupDailyHabitsListeners();
        this.setupSkillsListeners();
        this.setupTechniquesListeners();
        this.setupResourcesListeners();
        
        // Date picker
        const habitDate = document.getElementById('habitDate');
        if (habitDate) {
            habitDate.addEventListener('change', (e) => {
                this.loadHabitsForDate(e.target.value);
            });
        }
        
        console.log('Event listeners set up successfully');
    }

    switchTab(tabName) {
        console.log(`Switching to tab: ${tabName}`);
        
        // Update active tab button
        document.querySelectorAll('.tab-button').forEach(btn => {
            btn.classList.remove('active');
        });
        
        const activeButton = document.querySelector(`[data-tab="${tabName}"]`);
        if (activeButton) {
            activeButton.classList.add('active');
        }

        // Update active tab content
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        
        const activeContent = document.getElementById(tabName);
        if (activeContent) {
            activeContent.classList.add('active');
        }

        this.currentTab = tabName;
        console.log(`Active tab is now: ${this.currentTab}`);

        // Update charts if switching to analytics
        if (tabName === 'analytics') {
            setTimeout(() => {
                this.updateCharts();
            }, 100);
        }
        
        // Initialize month panels if switching to monthly plan
        if (tabName === 'monthly') {
            this.initializeMonthlyPlan();
        }
    }

    initializeMonthlyPlan() {
        // Create the first month panel if not already created
        const existingPanel = document.querySelector('.month-panel[data-month="0"]');
        if (!existingPanel) {
            this.createMonthPanel(0);
        }
    }

    switchMonth(monthIndex) {
        console.log(`Switching to month: ${monthIndex}`);
        
        // Update active month tab
        document.querySelectorAll('.month-tab').forEach(btn => btn.classList.remove('active'));
        const activeTab = document.querySelector(`[data-month="${monthIndex}"]`);
        if (activeTab) {
            activeTab.classList.add('active');
        }

        // Update active month panel
        document.querySelectorAll('.month-panel').forEach(panel => panel.classList.remove('active'));
        
        // Create month panel if it doesn't exist
        this.createMonthPanel(monthIndex);
        
        this.currentMonth = monthIndex;
    }

    createMonthPanel(monthIndex) {
        const existingPanel = document.querySelector(`.month-panel[data-month="${monthIndex}"]`);
        if (existingPanel) {
            existingPanel.classList.add('active');
            return;
        }

        if (monthIndex >= this.data.months.length) return;

        const monthContent = document.querySelector('.month-content');
        if (!monthContent) return;
        
        const month = this.data.months[monthIndex];
        
        const panel = document.createElement('div');
        panel.className = 'month-panel active';
        panel.setAttribute('data-month', monthIndex);
        
        panel.innerHTML = `
            <h2>${month.title}</h2>
            <div class="learning-tracks-grid">
                <div class="card">
                    <div class="card__body">
                        <h3>🎯 WQU Data Science Lab Project</h3>
                        <h4>${month.wqu_project.name}</h4>
                        <p><strong>Skills:</strong> ${month.wqu_project.skills.join(', ')}</p>
                        <p><strong>Target Hours:</strong> ${month.wqu_project.hours}</p>
                        <div class="completion-checkbox">
                            <label class="checkbox-container">
                                <input type="checkbox" data-track="wqu" data-month="${monthIndex}" ${month.wqu_project.completed ? 'checked' : ''}>
                                <span class="checkmark"></span>
                                Project Completed
                            </label>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card__body">
                        <h3>📚 MScFE Course</h3>
                        <h4>${month.mscfe_course.name}</h4>
                        <ul>
                            ${month.mscfe_course.content.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                        <p><strong>Target Hours:</strong> ${month.mscfe_course.hours}</p>
                        <div class="progress-slider">
                            <input type="range" min="0" max="100" value="${month.mscfe_course.progress}" data-track="mscfe" data-month="${monthIndex}">
                            <span class="slider-value">${month.mscfe_course.progress}%</span>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card__body">
                        <h3>🖥️ Udemy ML/NLP Topics</h3>
                        <div class="topic-checklist">
                            ${month.udemy_topics.map((topic, index) => `
                                <label class="checkbox-container">
                                    <input type="checkbox" data-track="udemy" data-month="${monthIndex}" data-topic="${index}" ${topic.completed ? 'checked' : ''}>
                                    <span class="checkmark"></span>
                                    ${topic.name}
                                </label>
                            `).join('')}
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card__body">
                        <h3>📖 Additional Content</h3>
                        <h4>${month.additional.name}</h4>
                        <ul>
                            ${month.additional.topics.map(topic => `<li>${topic}</li>`).join('')}
                        </ul>
                        <p><strong>Target Hours:</strong> ${month.additional.hours}</p>
                        <div class="progress-slider">
                            <input type="range" min="0" max="100" value="${month.additional.progress}" data-track="additional" data-month="${monthIndex}">
                            <span class="slider-value">${month.additional.progress}%</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="time-logging">
                <div class="card">
                    <div class="card__body">
                        <h3>⏱️ Time Logging</h3>
                        <div class="time-inputs">
                            <div class="time-input">
                                <label>WQU Project Hours:</label>
                                <input type="number" min="0" step="0.5" value="${month.actual_hours.wqu}" data-time-track="wqu" data-month="${monthIndex}">
                            </div>
                            <div class="time-input">
                                <label>MScFE Study Hours:</label>
                                <input type="number" min="0" step="0.5" value="${month.actual_hours.mscfe}" data-time-track="mscfe" data-month="${monthIndex}">
                            </div>
                            <div class="time-input">
                                <label>Udemy Hours:</label>
                                <input type="number" min="0" step="0.5" value="${month.actual_hours.udemy}" data-time-track="udemy" data-month="${monthIndex}">
                            </div>
                            <div class="time-input">
                                <label>Additional Hours:</label>
                                <input type="number" min="0" step="0.5" value="${month.actual_hours.additional}" data-time-track="additional" data-month="${monthIndex}">
                            </div>
                        </div>
                        <div class="total-hours">
                            <strong>Total Hours: <span data-total-month="${monthIndex}">${this.calculateTotalHours(monthIndex)}</span> / ${month.total_hours}</strong>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        monthContent.appendChild(panel);
        this.setupMonthPanelListeners(panel, monthIndex);
    }

    setupMonthPanelListeners(panel, monthIndex) {
        // WQU project completion
        const wquCheckbox = panel.querySelector('[data-track="wqu"]');
        if (wquCheckbox) {
            wquCheckbox.addEventListener('change', (e) => {
                this.data.months[monthIndex].wqu_project.completed = e.target.checked;
                this.updateOverviewDashboard();
            });
        }

        // Progress sliders
        panel.querySelectorAll('[data-track="mscfe"], [data-track="additional"]').forEach(slider => {
            slider.addEventListener('input', (e) => {
                const track = e.target.dataset.track;
                const value = parseInt(e.target.value);
                
                if (track === 'mscfe') {
                    this.data.months[monthIndex].mscfe_course.progress = value;
                } else if (track === 'additional') {
                    this.data.months[monthIndex].additional.progress = value;
                }
                
                const valueSpan = e.target.nextElementSibling;
                if (valueSpan) {
                    valueSpan.textContent = value + '%';
                }
                this.updateOverviewDashboard();
            });
        });

        // Udemy topic checkboxes
        panel.querySelectorAll('[data-track="udemy"]').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                const topicIndex = parseInt(e.target.dataset.topic);
                this.data.months[monthIndex].udemy_topics[topicIndex].completed = e.target.checked;
                this.updateOverviewDashboard();
            });
        });

        // Time logging inputs
        panel.querySelectorAll('[data-time-track]').forEach(input => {
            input.addEventListener('input', (e) => {
                const track = e.target.dataset.timeTrack;
                const hours = parseFloat(e.target.value) || 0;
                this.data.months[monthIndex].actual_hours[track] = hours;
                this.updateTotalHours(monthIndex);
            });
        });
    }

    setupDailyHabitsListeners() {
        document.querySelectorAll('[data-habit]').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                const habitIndex = parseInt(e.target.dataset.habit);
                this.data.daily_habits[habitIndex].completed = e.target.checked;
                this.updateHabitsForCurrentDate();
            });
        });

        document.querySelectorAll('[data-habit-time]').forEach(input => {
            input.addEventListener('input', (e) => {
                const habitIndex = parseInt(e.target.dataset.habitTime);
                this.data.daily_habits[habitIndex].actual_minutes = parseInt(e.target.value) || 0;
            });
        });
    }

    setupSkillsListeners() {
        document.querySelectorAll('.skill-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const action = e.target.dataset.action;
                const skillIndex = parseInt(e.target.dataset.skill);
                const skill = this.data.skills[skillIndex];

                if (action === 'increase' && skill.level < skill.target_level) {
                    skill.level++;
                } else if (action === 'decrease' && skill.level > 0) {
                    skill.level--;
                }

                this.updateSkillDisplay(skillIndex);
            });
        });
    }

    setupTechniquesListeners() {
        document.querySelectorAll('[data-technique]').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                const techniqueIndex = parseInt(e.target.dataset.technique);
                this.data.learning_techniques[techniqueIndex].implemented = e.target.checked;
            });
        });
    }

    setupResourcesListeners() {
        // Pages read inputs
        document.querySelectorAll('[data-resource][data-type="pages"]').forEach(input => {
            input.addEventListener('input', (e) => {
                const resourceIndex = parseInt(e.target.dataset.resource);
                const pages = parseInt(e.target.value) || 0;
                this.data.resources[resourceIndex].pages_read = Math.min(pages, this.data.resources[resourceIndex].pages);
                this.updateResourceProgress(resourceIndex);
            });
        });

        // Chapter checkboxes
        document.querySelectorAll('[data-resource][data-chapter]').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                const resourceIndex = parseInt(e.target.dataset.resource);
                const chapterIndex = parseInt(e.target.dataset.chapter);
                this.data.resources[resourceIndex].chapters_completed[chapterIndex] = e.target.checked;
            });
        });

        // Star ratings
        document.querySelectorAll('.star').forEach(star => {
            star.addEventListener('click', (e) => {
                const resourceIndex = parseInt(e.target.closest('.stars').dataset.resource);
                const rating = parseInt(e.target.dataset.rating);
                this.data.resources[resourceIndex].rating = rating;
                this.updateStarDisplay(resourceIndex, rating);
            });
        });
    }

    updateSkillDisplay(skillIndex) {
        const skill = this.data.skills[skillIndex];
        const progressBar = document.querySelector(`[data-skill="${skillIndex}"]`);
        const levelSpan = progressBar?.closest('.skill-progress')?.querySelector('.skill-level');
        
        if (progressBar && levelSpan) {
            const percentage = (skill.level / skill.target_level) * 100;
            progressBar.style.width = percentage + '%';
            levelSpan.textContent = `${skill.level}/${skill.target_level}`;
        }
    }

    updateResourceProgress(resourceIndex) {
        const resource = this.data.resources[resourceIndex];
        const percentage = (resource.pages_read / resource.pages) * 100;
        const progressBar = document.querySelector(`[data-resource-progress="${resourceIndex}"]`);
        if (progressBar) {
            progressBar.style.width = percentage + '%';
        }
    }

    updateStarDisplay(resourceIndex, rating) {
        const stars = document.querySelectorAll(`[data-resource="${resourceIndex}"] .star`);
        stars.forEach((star, index) => {
            if (index < rating) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
    }

    calculateTotalHours(monthIndex) {
        const hours = this.data.months[monthIndex].actual_hours;
        return hours.wqu + hours.mscfe + hours.udemy + hours.additional;
    }

    updateTotalHours(monthIndex) {
        const totalElement = document.querySelector(`[data-total-month="${monthIndex}"]`);
        if (totalElement) {
            totalElement.textContent = this.calculateTotalHours(monthIndex);
        }
    }

    initializeProgressBars() {
        setTimeout(() => {
            document.querySelectorAll('.progress-fill').forEach(bar => {
                const progress = bar.dataset.progress;
                if (progress) {
                    bar.style.width = progress + '%';
                }
            });
        }, 100);
    }

    updateOverviewDashboard() {
        // Update current month
        const currentMonthSpan = document.querySelector('.current-month');
        if (currentMonthSpan) {
            currentMonthSpan.textContent = `Month ${this.currentMonth + 1}`;
        }

        // Calculate overall progress
        const totalMonths = 9;
        const overallProgress = Math.round(((this.currentMonth + 1) / totalMonths) * 100);
        
        const overallProgressBar = document.querySelector('.progress-info .progress-fill');
        const overallProgressText = document.querySelector('.progress-text');
        
        if (overallProgressBar) {
            overallProgressBar.style.width = overallProgress + '%';
        }
        if (overallProgressText) {
            overallProgressText.textContent = overallProgress + '% Complete';
        }

        // Update learning track progress
        this.updateLearningTrackProgress();
    }

    updateLearningTrackProgress() {
        const tracks = [
            { selector: 0, name: 'WQU Data Science Lab' },
            { selector: 1, name: 'MScFE Coursework' },
            { selector: 2, name: 'Udemy ML/NLP' },
            { selector: 3, name: 'Additional Reading' }
        ];

        tracks.forEach((track, index) => {
            const progress = this.calculateTrackProgress(index);
            const progressBar = document.querySelectorAll('.track-item .progress-fill')[index];
            const progressText = document.querySelectorAll('.track-percent')[index];
            
            if (progressBar && progressText) {
                progressBar.style.width = progress + '%';
                progressText.textContent = progress + '%';
            }
        });
    }

    calculateTrackProgress(trackIndex) {
        // Calculate progress based on completed items across all months
        let totalItems = 0;
        let completedItems = 0;

        this.data.months.forEach(month => {
            switch (trackIndex) {
                case 0: // WQU
                    totalItems++;
                    if (month.wqu_project.completed) completedItems++;
                    break;
                case 1: // MScFE
                    totalItems++;
                    completedItems += month.mscfe_course.progress / 100;
                    break;
                case 2: // Udemy
                    totalItems += month.udemy_topics.length;
                    completedItems += month.udemy_topics.filter(topic => topic.completed).length;
                    break;
                case 3: // Additional
                    totalItems++;
                    completedItems += month.additional.progress / 100;
                    break;
            }
        });

        return totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;
    }

    generateCalendar() {
        const calendar = document.getElementById('habitCalendar');
        if (!calendar) return;
        
        const today = new Date();
        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();
        
        // Clear existing calendar
        calendar.innerHTML = '';

        // Add day headers
        const dayHeaders = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        dayHeaders.forEach(day => {
            const header = document.createElement('div');
            header.className = 'calendar-header';
            header.textContent = day;
            calendar.appendChild(header);
        });

        // Generate calendar days
        const firstDay = new Date(currentYear, currentMonth, 1).getDay();
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        // Add empty cells for days before the first day of the month
        for (let i = 0; i < firstDay; i++) {
            const emptyDay = document.createElement('div');
            emptyDay.className = 'calendar-day';
            calendar.appendChild(emptyDay);
        }

        // Add days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day';
            dayElement.textContent = day;
            
            const dateString = `${currentYear}-${(currentMonth + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
            
            // Check if this day has completed habits
            if (this.data.habits_calendar[dateString]) {
                dayElement.classList.add('completed');
            }
            
            // Mark today
            if (day === today.getDate()) {
                dayElement.classList.add('today');
            }
            
            calendar.appendChild(dayElement);
        }
    }

    setCurrentDate() {
        const today = new Date().toISOString().split('T')[0];
        const habitDate = document.getElementById('habitDate');
        if (habitDate) {
            habitDate.value = today;
            this.loadHabitsForDate(today);
        }
    }

    loadHabitsForDate(dateString) {
        // Load habits for the selected date
        const dateHabits = this.data.habits_calendar[dateString] || this.data.daily_habits;
        
        document.querySelectorAll('[data-habit]').forEach((checkbox, index) => {
            checkbox.checked = dateHabits[index]?.completed || false;
        });

        document.querySelectorAll('[data-habit-time]').forEach((input, index) => {
            input.value = dateHabits[index]?.actual_minutes || dateHabits[index]?.target_minutes || '';
        });
    }

    updateHabitsForCurrentDate() {
        const currentDate = document.getElementById('habitDate')?.value;
        if (currentDate && !this.data.habits_calendar[currentDate]) {
            this.data.habits_calendar[currentDate] = [...this.data.daily_habits];
        }

        // Update the calendar display
        this.generateCalendar();
    }

    setupCharts() {
        this.createHoursChart();
        this.createTrackChart();
        this.createSkillsChart();
    }

    createHoursChart() {
        const canvas = document.getElementById('hoursChart');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        if (!ctx || !window.Chart) return;
        
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
                datasets: [{
                    label: 'Study Hours',
                    data: this.data.analytics.weekly_hours,
                    borderColor: '#1FB8CD',
                    backgroundColor: 'rgba(31, 184, 205, 0.1)',
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Hours'
                        }
                    }
                }
            }
        });
    }

    createTrackChart() {
        const canvas = document.getElementById('trackChart');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        if (!ctx || !window.Chart) return;
        
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['WQU Lab', 'MScFE', 'Udemy ML/NLP', 'Additional'],
                datasets: [{
                    data: this.data.analytics.track_progress,
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#5D878F']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }

    createSkillsChart() {
        const canvas = document.getElementById('skillsChart');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        if (!ctx || !window.Chart) return;
        
        const skillNames = this.data.skills.map(skill => skill.name.substring(0, 15) + '...');
        const skillLevels = this.data.skills.map(skill => (skill.level / skill.target_level) * 100);

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: skillNames,
                datasets: [{
                    label: 'Skill Progress (%)',
                    data: skillLevels,
                    backgroundColor: '#1FB8CD'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: 'y',
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        });
    }

    updateCharts() {
        // Recreate charts with updated data
        setTimeout(() => {
            this.setupCharts();
        }, 100);
    }

    toggleTheme() {
        console.log('Toggling theme...');
        const root = document.documentElement;
        const themeToggle = document.getElementById('themeToggle');
        
        if (this.currentTheme === 'light') {
            root.setAttribute('data-color-scheme', 'dark');
            if (themeToggle) themeToggle.textContent = '☀️';
            this.currentTheme = 'dark';
        } else {
            root.setAttribute('data-color-scheme', 'light');
            if (themeToggle) themeToggle.textContent = '🌙';
            this.currentTheme = 'light';
        }
        
        console.log(`Theme changed to: ${this.currentTheme}`);
    }

    exportData() {
        console.log('Exporting data...');
        try {
            const dataStr = JSON.stringify(this.data, null, 2);
            const dataBlob = new Blob([dataStr], {type: 'application/json'});
            const url = URL.createObjectURL(dataBlob);
            
            const link = document.createElement('a');
            link.href = url;
            link.download = `learning-tracker-data-${new Date().toISOString().split('T')[0]}.json`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            
            console.log('Data export successful');
            
            // Show visual feedback
            const exportButton = document.getElementById('exportData');
            if (exportButton) {
                const originalText = exportButton.textContent;
                exportButton.textContent = 'Downloaded!';
                exportButton.style.backgroundColor = '#28a745';
                setTimeout(() => {
                    exportButton.textContent = originalText;
                    exportButton.style.backgroundColor = '';
                }, 2000);
            }
        } catch (error) {
            console.error('Export failed:', error);
        }
    }
}

// Initialize the application when the DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        console.log('DOM loaded, initializing tracker...');
        window.learningTracker = new LearningTracker();
    });
} else {
    console.log('DOM already loaded, initializing tracker...');
    window.learningTracker = new LearningTracker();
}