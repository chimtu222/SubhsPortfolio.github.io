
        const defaultConfig = {
            name: "Subramanyam Panda",
            tagline: "Software Developer & Problem Solver",
            about_text: "Passionate software developer with expertise in full-stack development and a strong foundation in multiple programming languages.",
            company_name: "LTIMINDTREE | SDET",
            years_experience: "1.5+ Years"
        };

        // Theme Toggle Functionality
        const themeToggle = document.getElementById('theme-toggle');
        const body = document.body;
        const icon = themeToggle.querySelector('i');

        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }

        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            
            if (body.classList.contains('dark-mode')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
                localStorage.setItem('theme', 'dark');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
                localStorage.setItem('theme', 'light');
            }
        });

        // Navigation functionality
        const navLinks = document.querySelectorAll('.nav-link');
        const pages = document.querySelectorAll('.page');

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetPage = link.getAttribute('data-page');

                // Update active nav link
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');

                // Show target page
                pages.forEach(page => page.classList.remove('active'));
                document.getElementById(targetPage).classList.add('active');

                // Scroll to top
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });

        // Element SDK Integration
        async function onConfigChange(config) {
            // Update name in multiple locations
            const nameHeader = document.getElementById('portfolio-name-header');
            const nameMain = document.getElementById('portfolio-name-main');
            if (nameHeader) nameHeader.textContent = (config.name || defaultConfig.name).toUpperCase();
            if (nameMain) nameMain.textContent = (config.name || defaultConfig.name).toUpperCase();

            // Update tagline
            const taglineHeader = document.getElementById('portfolio-tagline-header');
            const taglineMain = document.getElementById('portfolio-tagline-main');
            if (taglineHeader) taglineHeader.textContent = config.tagline || defaultConfig.tagline;
            if (taglineMain) taglineMain.textContent = config.tagline || defaultConfig.tagline;

            // Update about text
            const aboutLead = document.getElementById('portfolio-about-lead');
            const aboutMain = document.getElementById('portfolio-about-main');
            if (aboutLead) aboutLead.textContent = config.about_text || defaultConfig.about_text;
            if (aboutMain) aboutMain.textContent = config.about_text || defaultConfig.about_text;

            // Update company
            const companyMain = document.getElementById('portfolio-company-main');
            if (companyMain) companyMain.textContent = (config.company_name || defaultConfig.company_name).toUpperCase();

            // Update experience
            const experienceMain = document.getElementById('portfolio-experience-main');
            if (experienceMain) experienceMain.textContent = config.years_experience || defaultConfig.years_experience;
        }

        function mapToCapabilities(config) {
            return {
                recolorables: [],
                borderables: [],
                fontEditable: undefined,
                fontSizeable: undefined
            };
        }

        function mapToEditPanelValues(config) {
            return new Map([
                ["name", config.name || defaultConfig.name],
                ["tagline", config.tagline || defaultConfig.tagline],
                ["about_text", config.about_text || defaultConfig.about_text],
                ["company_name", config.company_name || defaultConfig.company_name],
                ["years_experience", config.years_experience || defaultConfig.years_experience]
            ]);
        }

        if (window.elementSdk) {
            window.elementSdk.init({
                defaultConfig,
                onConfigChange,
                mapToCapabilities,
                mapToEditPanelValues
            });
        }

(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9af880256014257c',t:'MTc2NTk5NjMyMC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();


document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("profile-audio");
    const profilePhoto = document.querySelector(".profile-photo");

    if (!audio || !profilePhoto) return;

    let audioUnlocked = false;

    // Step 1: User click anywhere to unlock audio
    document.addEventListener("click", () => {
        audioUnlocked = true;
        console.log("Audio unlocked, hover will now play music");
    }, { once: true });

    // Step 2: Play audio on hover
    profilePhoto.addEventListener("mouseenter", () => {
        if (!audioUnlocked) return; // do nothing until first click
        audio.currentTime = 0;
        audio.volume = 0.25; // lower volume
        audio.play().catch(err => console.log("Playback blocked:", err));
    });

    // Step 3: Stop audio on hover out
    profilePhoto.addEventListener("mouseleave", () => {
        audio.pause();
        audio.currentTime = 0;
    });

    // Step 4: Stop audio if user navigates
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            audio.pause();
            audio.currentTime = 0;
        });
    });
});


const internships = [
    {
        organization: "DRDO,PXE",
        role: "Internship Trainee, Onsite",
        duration: "22nd May 2023 - 21st Jun 2023",
        project: "🔗 Graphmaster",
        projectUrl: "https://github.com/chimtu222/Graphmaster.github.io/tree/main",
        summary:
            "Developed a MATLAB-based analytical tool with a three-member team to streamline ammunition data analysis for DRDO. The interactive UI enables users to upload text files, configure graph parameters, and generate detailed visualizations within seconds, replacing a manual process involving 3,000-4,000 lines of code. The solution significantly improved productivity, increasing analysis capacity from 1-2 files per day to around 20–25 files per day. The work was formally appreciated by the DRDO Head, and it was a proud opportunity to contribute to national defense initiatives, including witnessing ATAG ammunition live firing and observing real-time data analysis in a high-security environment."
    },
    {
        organization: "Internshala",
        role: "Student Intern, Remote",
        duration: "23rd Nov 2022 - 18th Jan 2023",
        project: "🔗 Online Grocery Web Application ",
        projectUrl: "https://chimtu222.github.io/Shopping_website.github.io/",
        summary:
            "Designed and deployed a responsive shopping website using HTML, CSS, and JavaScript to simulate an online grocery and product store. The application features a product catalog, interactive shopping cart interface, checkout UI elements, user navigation links (Home, Product, About, Blog, Review, Contact), and a clean responsive layout that adapts across devices. Hosted live via GitHub Pages, this project demonstrates frontend development, responsive design principles, and deployment of a production-ready static web application."
    }
];

function renderInternships() {
    const container = document.getElementById("internships-container");
    if (!container) return;

    container.innerHTML = "";

    internships.forEach(intern => {
        const card = document.createElement("article");
        card.className = "experience-article internship-card";

        card.innerHTML = `
            <div class="company-header">
                <h3 class="company-title">${intern.organization}</h3>
                <span class="tenure">${intern.duration}</span>
            </div>

            <p class="job-title">${intern.role}</p>

            <div class="newspaper-columns">
                <p class="body-text">
                    <strong>Project:</strong>
                    <a href="${intern.projectUrl}" target="_blank">
                        ${intern.project}
                    </a>
                </p>
                <p class="body-text">${intern.summary}</p>
            </div>
        `;

        container.appendChild(card);
    });
}

// Call it
renderInternships();

const projects = [
    {
        name: "MediTrack -Medicine Inventory Management",
        summary:
            "Designed and developed a web-based medicine inventory system for a friend's small pharmacy, enabling real-time tracking of 20,000-30,000 medicines, sales management, and automated alerts for low, expired, or expiring stock. Includes PDF/Excel reports and secure user authentication, providing a complete, cost-effective solution without requiring a database.",
        url: "https://chimtu222.github.io/MediTrack/"
    }
    // ,
    // {
    //     name: "Portfolio Website",
    //     summary:
    //         "Designed and developed a personal portfolio website featuring dark/light mode, smooth page navigation, dynamic content rendering, and responsive design.",
    //     url: "https://yourportfolio.com"
    // }
];
const researchProjects = [
    {
        name: "Load Balancing in Cloud Computing",
        summary:
            "Research-focused work on optimizing load balancing strategies in cloud computing. Designed and implemented algorithms for efficient resource allocation, reducing latency and improving system throughput. Conducted extensive simulations, analyzed performance metrics, and validated improvements. Findings were presented at NIT Rourkela and published in IEEE Xplore, highlighting practical applications for scalable cloud systems.",
        url: "https://ieeexplore.ieee.org/document/10674973"
    }
];

function renderProjects(list, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = ""; // clears only this container

    list.forEach(project => {
        const card = document.createElement("article");
        card.className = "experience-article project-card";

        card.innerHTML = `
            <div class="company-header">
                <h3 class="company-title">${project.name}</h3>
            </div>

            <p class="project-link">
                <a href="${project.url}" target="_blank" rel="noopener noreferrer">
                    🔗 ${containerId === "research-list" ? "Read Paper" : "View Project"}
                </a>
            </p>

            <p class="body-text">${project.summary}</p>
        `;

        container.appendChild(card);
    });
}

renderProjects(projects, "projects-container");
renderProjects(researchProjects, "research-list");



/* =========================
   SUPPORT CHATBOT SCRIPT
========================= */

const botBtn = document.getElementById("support-bot");
const chat = document.getElementById("support-chat");
const closeBtn = document.getElementById("chat-close");

const chatBody = document.getElementById("chat-body");
const chatOptions = document.getElementById("chat-options");
const chatInput = document.getElementById("chat-input-text");
const chatSend = document.getElementById("chat-send");

/* -------------------------
   Utility
------------------------- */
function calculateAge() {
    const dob = new Date("2002-11-17");
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    return age;
}

/* -------------------------
   Knowledge Base
------------------------- */
const knowledgeBase = {
    education: "I completed my B.Tech in Computer Science & Engineering with strong hands-on experience in development and automation.",
    experience: "I have 1.5+ years of experience working as an SDET at LTIMindtree.",
    age: `I was born on 17 Nov 2002, so I am ${calculateAge()} years old.`,
    projects: "My key projects include a Medicine Inventory System, API Automation Frameworks, and responsive web applications.",
    location: "I am based in India and currently living in Balasore, Odisha with my parents."
};

/* -------------------------
   Helpers
------------------------- */
function resetChat() {
    chatBody.innerHTML = "";
    chatOptions.innerHTML = "";
    chatInput.value = "";
    chatInput.disabled = true;
    chatSend.disabled = true;
}

function addMessage(text, type) {
    const msg = document.createElement("div");
    msg.className = `msg ${type}`;
    msg.textContent = text;
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function showTyping() {
    const t = document.createElement("div");
    t.className = "msg bot typing";
    t.textContent = "typing...";
    chatBody.appendChild(t);
    chatBody.scrollTop = chatBody.scrollHeight;
    return t;
}

function unlockChat() {
    chatInput.disabled = false;
    chatSend.disabled = false;
}

/* -------------------------
   Quick Options
------------------------- */
function showOptions() {
    chatOptions.innerHTML = "";

    Object.keys(knowledgeBase).forEach(key => {
        const btn = document.createElement("button");
        btn.textContent = key.charAt(0).toUpperCase() + key.slice(1);
        btn.className = "chat-option-btn";
        btn.onclick = () => {
            // remove button after click
            btn.remove();

            addMessage(btn.textContent, "user");
            const typing = showTyping();

            setTimeout(() => {
                typing.remove();
                addMessage(knowledgeBase[key], "bot");
            }, 700);
        };
        chatOptions.appendChild(btn);
    });
}

/* -------------------------
   Open Chat
------------------------- */
botBtn.addEventListener("click", () => {
    chat.style.display = "flex";
    resetChat();

    const introBtn = document.createElement("button");
    introBtn.textContent = "Who is Subramanyam ?";
    introBtn.className = "chat-option-btn";

    introBtn.onclick = () => {
        chatOptions.innerHTML = "";

        // USER message (FIXED)
        addMessage("Who is Subramanyam?", "user");

        const typing = showTyping();
        setTimeout(() => {
            typing.remove();
            addMessage(
                "Subramanyam Panda is an SDET and software developer focused on real-world automation, scalable tools, and modern web solutions. By combining strong prompt-engineering skills with AI-assisted workflows, he delivers faster, smarter, and more efficient results.",
                "bot"
            );

            showOptions();   // 🔥 show suggestions
            unlockChat();
        }, 900);
    };

    chatOptions.appendChild(introBtn);
});

/* -------------------------
   Free Text Input
------------------------- */
chatSend.addEventListener("click", () => {
    if (!chatInput.value.trim()) return;

    const msg = chatInput.value;
    addMessage(msg, "user");
    chatInput.value = "";

    const typing = showTyping();
    setTimeout(() => {
        typing.remove();

        // Show message and delay before closing
        addMessage(
            "For detailed or personal queries, please visit the Contacts tab to connect with me 🙂",
            "bot"
        );

        // give user 3 seconds to read before closing
        setTimeout(() => {
            chat.style.display = "none";
            resetChat();
        }, 3000);
    }, 800);
});

/* -------------------------
   Close Chat
------------------------- */
closeBtn.addEventListener("click", () => {
    chat.style.display = "none";
    resetChat();
});

let skillsAnimated = false;

function animateSkillTubes() {
    if (skillsAnimated) return;
    skillsAnimated = true;

    document.querySelectorAll(".skill-tube").forEach(tube => {
        const level = tube.getAttribute("data-level");
        const fill = tube.querySelector(".skill-fill");

        fill.style.width = "0%";
        setTimeout(() => {
            fill.style.width = level + "%";
        }, 200);
    });
}

/* Trigger animation when Skills page opens */
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        if (link.dataset.page === "skills") {
            setTimeout(animateSkillTubes, 300);
        }
    });
});
