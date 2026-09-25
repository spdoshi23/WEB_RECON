/* =========================================
   CAMPUSCONNECT EVENTS
========================================= */

const events = [

    /* =========================
       26 SEPTEMBER
    ========================= */

    {
        id: 1,
        title: "Design Thinking Workshop",
        date: "2026-09-26",
        time: "11:00 AM",
        venue: "Innovation Lab",
        organizer: "Design Club",
        category: "workshop",
        contact: "+91 98765 43210",
        email: "designclub@campus.edu",
        registration: "https://example.com/register/design",
        fee: "Free",
        deadline: "25 September 2026",
        description: "Learn practical design thinking methods and solve real-world problems.",
        important: "Bring your laptop."
    },

    {
        id: 17,
        title: "Open Source Orientation",
        date: "2026-09-26",
        time: "1:30 PM",
        venue: "Seminar Hall B",
        organizer: "Developer Community",
        category: "open-source",
        contact: "+91 98765 43226",
        email: "opensource@campus.edu",
        registration: "https://example.com/register/opensource",
        fee: "Free",
        deadline: "26 September 2026",
        description: "Learn how open source works, discover beginner-friendly projects and understand how to contribute using GitHub.",
        important: "Bring your laptop."
    },


    /* =========================
       27 SEPTEMBER
    ========================= */

    {
        id: 2,
        title: "Campus Coding Challenge",
        date: "2026-09-27",
        time: "2:00 PM",
        venue: "Computer Lab 1",
        organizer: "Coding Club",
        category: "competition",
        contact: "+91 98765 43211",
        email: "codingclub@campus.edu",
        registration: "https://example.com/register/coding",
        fee: "₹50",
        deadline: "26 September 2026",
        description: "Test your programming skills through a series of coding challenges.",
        important: "Individual participation."
    },

    {
        id: 18,
        title: "Cybersecurity Awareness Seminar",
        date: "2026-09-27",
        time: "11:00 AM",
        venue: "Seminar Hall A",
        organizer: "Cyber Security Club",
        category: "seminar",
        contact: "+91 98765 43227",
        email: "cyberclub@campus.edu",
        registration: "https://example.com/register/cyber",
        fee: "Free",
        deadline: "26 September 2026",
        description: "Understand phishing, password security, social engineering and common cyber threats students face online.",
        important: "Open to all branches."
    },

    {
        id: 19,
        title: "Photography Basics",
        date: "2026-09-27",
        time: "4:30 PM",
        venue: "Student Activity Centre",
        organizer: "Photography Club",
        category: "workshop",
        contact: "+91 98765 43228",
        email: "photo@campus.edu",
        registration: "https://example.com/register/photo-basics",
        fee: "Free",
        deadline: "27 September 2026",
        description: "Learn composition, lighting and smartphone photography techniques through practical activities.",
        important: "Bring your smartphone or camera."
    },


    /* =========================
       28 SEPTEMBER
    ========================= */

    {
        id: 3,
        title: "Build With AI",
        date: "2026-09-28",
        time: "10:00 AM",
        venue: "Innovation Lab",
        organizer: "AI Student Society",
        category: "workshop",
        contact: "+91 98765 43212",
        email: "aisociety@campus.edu",
        registration: "https://example.com/register/ai",
        fee: "Free",
        deadline: "27 September 2026",
        description: "Build your first AI-powered application using modern tools.",
        important: "Laptop required."
    },

    {
        id: 20,
        title: "Inter-Branch Football Match",
        date: "2026-09-28",
        time: "5:00 PM",
        venue: "College Football Ground",
        organizer: "Sports Committee",
        category: "sports",
        contact: "+91 98765 43229",
        email: "sports@campus.edu",
        registration: "https://example.com/register/football",
        fee: "Free",
        deadline: "28 September 2026",
        description: "Watch students compete in an exciting inter-branch football match.",
        important: "Entry open to students."
    },


    /* =========================
       29 SEPTEMBER
    ========================= */

    {
        id: 21,
        title: "Resume & GitHub Profile Clinic",
        date: "2026-09-29",
        time: "3:00 PM",
        venue: "Placement Cell",
        organizer: "Career Development Cell",
        category: "workshop",
        contact: "+91 98765 43230",
        email: "careers@campus.edu",
        registration: "https://example.com/register/resume",
        fee: "Free",
        deadline: "28 September 2026",
        description: "Improve your resume and GitHub profile with practical guidance for internships and projects.",
        important: "Bring your current resume."
    },


    /* =========================
       30 SEPTEMBER
    ========================= */

    {
        id: 4,
        title: "Web Development Workshop",
        date: "2026-09-30",
        time: "2:00 PM",
        venue: "Computer Lab 2",
        organizer: "Web & Dev Club",
        category: "workshop",
        contact: "+91 98765 43213",
        email: "webclub@campus.edu",
        registration: "https://example.com/register/web",
        fee: "Free",
        deadline: "29 September 2026",
        description: "Learn HTML, CSS and JavaScript by building a real website.",
        important: "Beginners welcome."
    },

    {
        id: 22,
        title: "Inter-College Quiz",
        date: "2026-09-30",
        time: "5:30 PM",
        venue: "Main Auditorium",
        organizer: "Quiz Club",
        category: "competition",
        contact: "+91 98765 43231",
        email: "quizclub@campus.edu",
        registration: "https://example.com/register/quiz",
        fee: "₹50",
        deadline: "29 September 2026",
        description: "Compete in technology, science, current affairs and general knowledge rounds.",
        important: "Teams of 2 students."
    },


    /* =========================
       OCTOBER
    ========================= */

    {
        id: 5,
        title: "Cybersecurity Awareness Seminar",
        date: "2026-10-02",
        time: "3:30 PM",
        venue: "Seminar Hall A",
        organizer: "Cyber Security Club",
        category: "seminar",
        contact: "+91 98765 43214",
        email: "cyberclub@campus.edu",
        registration: "https://example.com/register/cyber",
        fee: "Free",
        deadline: "1 October 2026",
        description: "Understand common cyber threats and how students can stay safe online.",
        important: "Open to all branches."
    },

    {
        id: 6,
        title: "Startup Pitch Challenge",
        date: "2026-10-04",
        time: "10:00 AM",
        venue: "Innovation Auditorium",
        organizer: "Entrepreneurship Cell",
        category: "competition",
        contact: "+91 98765 43215",
        email: "ecell@campus.edu",
        registration: "https://example.com/register/startup",
        fee: "₹100",
        deadline: "2 October 2026",
        description: "Pitch your startup idea to a panel of judges and win exciting prizes.",
        important: "Teams of 2-4 students."
    },

    {
        id: 7,
        title: "Campus Cultural Fest",
        date: "2026-10-07",
        time: "5:00 PM",
        venue: "College Grounds",
        organizer: "Cultural Committee",
        category: "fest",
        contact: "+91 98765 43216",
        email: "culture@campus.edu",
        registration: "https://example.com/register/fest",
        fee: "Free",
        deadline: "6 October 2026",
        description: "Music, dance, performances, food and activities across campus.",
        important: "Open to all students."
    },

    {
        id: 8,
        title: "Python for Beginners",
        date: "2026-10-10",
        time: "11:00 AM",
        venue: "Computer Lab 3",
        organizer: "Programming Club",
        category: "workshop",
        contact: "+91 98765 43217",
        email: "programming@campus.edu",
        registration: "https://example.com/register/python",
        fee: "Free",
        deadline: "9 October 2026",
        description: "A beginner-friendly introduction to Python programming.",
        important: "No prior programming experience required."
    },

    {
        id: 9,
        title: "AI & The Future",
        date: "2026-10-12",
        time: "3:00 PM",
        venue: "Seminar Hall",
        organizer: "Innovation Cell",
        category: "seminar",
        contact: "+91 98765 43218",
        email: "innovation@campus.edu",
        registration: "https://example.com/register/future-ai",
        fee: "Free",
        deadline: "11 October 2026",
        description: "A discussion about AI, careers and the future of technology.",
        important: "Guest speakers from industry."
    },

    {
        id: 10,
        title: "24-Hour Campus Hackathon",
        date: "2026-10-16",
        time: "9:00 AM",
        venue: "Main Auditorium",
        organizer: "Tech Innovation Club",
        category: "hackathon",
        contact: "+91 98765 43219",
        email: "hackathon@campus.edu",
        registration: "https://example.com/register/hackathon",
        fee: "₹200 per team",
        deadline: "12 October 2026",
        description: "Build innovative solutions to real-world problems in 24 hours.",
        important: "Teams of 2-4 students."
    },

    {
        id: 11,
        title: "Robotics Showcase",
        date: "2026-10-20",
        time: "1:00 PM",
        venue: "Robotics Lab",
        organizer: "Robotics Club",
        category: "competition",
        contact: "+91 98765 43220",
        email: "robotics@campus.edu",
        registration: "https://example.com/register/robotics",
        fee: "₹100",
        deadline: "18 October 2026",
        description: "Watch student-built robots compete in exciting challenges.",
        important: "Visitors are welcome."
    },

    {
        id: 12,
        title: "Open Mic & Talent Night",
        date: "2026-10-24",
        time: "6:00 PM",
        venue: "Student Activity Centre",
        organizer: "Arts & Literary Club",
        category: "fest",
        contact: "+91 98765 43221",
        email: "arts@campus.edu",
        registration: "https://example.com/register/openmic",
        fee: "Free",
        deadline: "23 October 2026",
        description: "Perform music, poetry, comedy and other talents on stage.",
        important: "Registration required for performers."
    },

    {
        id: 13,
        title: "Git & GitHub Masterclass",
        date: "2026-10-27",
        time: "2:00 PM",
        venue: "Computer Lab 1",
        organizer: "Developer Community",
        category: "workshop",
        contact: "+91 98765 43222",
        email: "developers@campus.edu",
        registration: "https://example.com/register/github",
        fee: "Free",
        deadline: "26 October 2026",
        description: "Learn Git, GitHub, version control and collaborative development.",
        important: "Bring your laptop."
    },

    {
        id: 14,
        title: "Inter-College Quiz",
        date: "2026-10-30",
        time: "11:00 AM",
        venue: "Main Auditorium",
        organizer: "Quiz Club",
        category: "competition",
        contact: "+91 98765 43223",
        email: "quizclub@campus.edu",
        registration: "https://example.com/register/quiz2",
        fee: "₹50",
        deadline: "28 October 2026",
        description: "Compete with students from different colleges in a technology and general knowledge quiz.",
        important: "Teams of 2 students."
    },

    {
        id: 15,
        title: "Photography Walk",
        date: "2026-11-02",
        time: "7:00 AM",
        venue: "Main Gate",
        organizer: "Photography Club",
        category: "fest",
        contact: "+91 98765 43224",
        email: "photo@campus.edu",
        registration: "https://example.com/register/photo",
        fee: "Free",
        deadline: "1 November 2026",
        description: "Explore the campus and city while learning practical photography techniques.",
        important: "Bring your camera or smartphone."
    },

    {
        id: 16,
        title: "Career & Internship Fair",
        date: "2026-11-05",
        time: "10:00 AM",
        venue: "Convention Centre",
        organizer: "Training & Placement Cell",
        category: "seminar",
        contact: "+91 98765 43225",
        email: "placements@campus.edu",
        registration: "https://example.com/register/career",
        fee: "Free",
        deadline: "4 November 2026",
        description: "Meet companies, explore internships and learn about career opportunities.",
        important: "Carry your updated resume."
    }

];


/* =========================================
   SORT EVENTS
========================================= */

events.sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
});


/* =========================================
   SAVED EVENTS
========================================= */

let savedEvents = [];


/* =========================================
   HELPER
========================================= */

function formatDate(dateString) {

    const date =
        new Date(dateString + "T00:00:00");

    return date.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });

}


/* =========================================
   CATEGORY LABEL
========================================= */

function categoryName(category) {

    const names = {

        workshop: "Workshop",

        competition: "Competition",

        hackathon: "Hackathon",

        seminar: "Seminar",

        fest: "Fest",

        "open-source": "Open Source",

        sports: "Sports"

    };

    return names[category] || category;

}


/* =========================================
   COMPACT CALENDAR
========================================= */

function renderCalendarList() {

    const calendarList =
        document.getElementById("calendarList");

    calendarList.innerHTML = "";

    const groupedEvents = {};


    events.forEach(event => {

        if (!groupedEvents[event.date]) {

            groupedEvents[event.date] = [];

        }

        groupedEvents[event.date].push(event);

    });


    Object.keys(groupedEvents).forEach(date => {

        const dateObject =
            new Date(date + "T00:00:00");


        const day =
            dateObject.toLocaleDateString(
                "en-IN",
                {
                    day: "numeric"
                }
            );


        const month =
            dateObject.toLocaleDateString(
                "en-IN",
                {
                    month: "long",
                    year: "numeric"
                }
            );


        const dateSection =
            document.createElement("div");


        dateSection.className =
            "calendar-date";


        let eventsHTML = "";


        groupedEvents[date].forEach(event => {

            eventsHTML += `

                <div class="calendar-event">

                    <div>

                        <div class="calendar-event-title">
                            ${event.title}
                        </div>

                        <div class="calendar-event-info">
                            ${event.venue} • ${event.organizer}
                        </div>

                    </div>

                    <div class="calendar-event-time">
                        ${event.time}
                    </div>

                </div>

            `;

        });


        dateSection.innerHTML = `

            <div class="date-box">

                <div class="date-day">
                    ${day}
                </div>

                <div class="date-month">
                    ${month}
                </div>

            </div>

            <div class="date-events">

                ${eventsHTML}

            </div>

        `;


        calendarList.appendChild(dateSection);

    });

}


/* =========================================
   DISPLAY EVENT CARDS
========================================= */

function displayEvents(eventList) {

    const container =
        document.getElementById("eventContainer");

    container.innerHTML = "";


    if (eventList.length === 0) {

        container.innerHTML = `

            <p class="empty-message">
                No events found.
            </p>

        `;

        return;

    }


    eventList.forEach(event => {

        const card =
            document.createElement("div");

        card.className = "event-card";


        const isSaved =
            savedEvents.includes(event.id);


        card.innerHTML = `

            <span class="event-category">
                ${categoryName(event.category)}
            </span>

            <h3>
                ${event.title}
            </h3>

            <p class="event-description">
                ${event.description}
            </p>

            <div class="event-details">

                <div class="event-detail">
                    📅 <strong>Date:</strong>
                    ${formatDate(event.date)}
                </div>

                <div class="event-detail">
                    🕒 <strong>Time:</strong>
                    ${event.time}
                </div>

                <div class="event-detail">
                    📍 <strong>Venue:</strong>
                    ${event.venue}
                </div>

                <div class="event-detail">
                    👥 <strong>Organizer:</strong>
                    ${event.organizer}
                </div>

                <div class="event-detail">
                    💰 <strong>Fee:</strong>
                    ${event.fee}
                </div>

            </div>

            <div class="event-buttons">

                <button
                    class="save-btn ${isSaved ? "saved" : ""}"
                    onclick="toggleSave(${event.id})"
                >
                    ${isSaved ? "✓ Saved" : "♡ Save Event"}
                </button>

                <a
                    href="${event.registration}"
                    target="_blank"
                    class="register-btn"
                >
                    Register
                </a>

            </div>

        `;


        container.appendChild(card);

    });

}


/* =========================================
   SAVE EVENT
========================================= */

function toggleSave(id) {

    if (savedEvents.includes(id)) {

        savedEvents =
            savedEvents.filter(
                eventId => eventId !== id
            );

    } else {

        savedEvents.push(id);

    }


    displayEvents(filteredEvents());

    displaySavedEvents();

}


/* =========================================
   FILTERED EVENTS
========================================= */

function filteredEvents() {

    const search =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase()
            .trim();


    const category =
        document
            .getElementById("categoryFilter")
            .value;


    return events.filter(event => {

        const searchableText = `

            ${event.title}

            ${event.organizer}

            ${event.venue}

            ${event.category}

            ${categoryName(event.category)}

            ${event.description}

            ${event.important}

        `.toLowerCase();


        const matchesSearch =
            searchableText.includes(search);


        const matchesCategory =
            category === "all" ||
            event.category === category;


        return matchesSearch && matchesCategory;

    });

}


/* =========================================
   SEARCH
========================================= */

document
    .getElementById("searchInput")
    .addEventListener("input", () => {

        displayEvents(filteredEvents());

    });


document
    .getElementById("categoryFilter")
    .addEventListener("change", () => {

        displayEvents(filteredEvents());

    });


/* =========================================
   SAVED EVENTS
========================================= */

function displaySavedEvents() {

    const container =
        document.getElementById("savedContainer");


    const saved =
        events.filter(event =>
            savedEvents.includes(event.id)
        );


    if (saved.length === 0) {

        container.innerHTML = `

            <p class="empty-message">
                You haven't saved any events yet.
            </p>

        `;

        return;

    }


    container.innerHTML = "";


    saved.forEach(event => {

        const card =
            document.createElement("div");


        card.className =
            "event-card";


        card.innerHTML = `

            <span class="event-category">
                ${categoryName(event.category)}
            </span>

            <h3>
                ${event.title}
            </h3>

            <p class="event-description">
                ${event.description}
            </p>

            <div class="event-details">

                <div class="event-detail">
                    📅 ${formatDate(event.date)}
                </div>

                <div class="event-detail">
                    🕒 ${event.time}
                </div>

                <div class="event-detail">
                    📍 ${event.venue}
                </div>

            </div>

            <div class="event-buttons">

                <button
                    class="save-btn saved"
                    onclick="toggleSave(${event.id})"
                >
                    ✓ Saved
                </button>

                <a
                    href="${event.registration}"
                    target="_blank"
                    class="register-btn"
                >
                    Register
                </a>

            </div>

        `;


        container.appendChild(card);

    });

}


/* =========================================
   ANNOUNCEMENT BAR
========================================= */

function updateAnnouncementBar() {

    const track =
        document.getElementById(
            "announcementTrack"
        );


    const upcoming =
        events.slice(0, 10);


    track.innerHTML =
        upcoming.map(event => {

            return `

                <span>
                    📅 ${formatDate(event.date)}
                    — ${event.title}
                </span>

            `;

        }).join("");

}


/* =========================================
   AI CHAT
========================================= */

const aiButton =
    document.getElementById("aiButton");

const aiChat =
    document.getElementById("aiChat");

const closeAi =
    document.getElementById("closeAi");


aiButton.addEventListener("click", () => {

    aiChat.classList.toggle("active");

});


closeAi.addEventListener("click", () => {

    aiChat.classList.remove("active");

});


/* =========================================
   NORMALIZE TEXT
========================================= */

function normalizeText(text) {

    return text
        .toLowerCase()
        .replace(/[?!.,]/g, " ")
        .replace(/\s+/g, " ")
        .trim();

}


/* =========================================
   FIND EVENTS BY DATE
========================================= */

function findEventsByDate(question) {

    const q = normalizeText(question);

    const monthNames = {

        september: "09",
        october: "10",
        november: "11"

    };


    let dayMatch =
        q.match(/\b(\d{1,2})(?:st|nd|rd|th)?\b/);


    if (!dayMatch) {

        return [];

    }


    const day =
        parseInt(dayMatch[1]);


    let month = null;


    for (const monthName in monthNames) {

        if (q.includes(monthName)) {

            month =
                monthNames[monthName];

            break;

        }

    }


    if (!month) {

        if (
            day >= 26 &&
            day <= 30
        ) {

            month = "09";

        } else {

            month = "10";

        }

    }


    const date =
        `2026-${month}-${String(day).padStart(2, "0")}`;


    return events.filter(
        event => event.date === date
    );

}


/* =========================================
   FIND EVENTS BY CATEGORY
========================================= */

function findEventsByCategory(question) {

    const q =
        normalizeText(question);


    const categoryWords = {

        workshop: "workshop",

        workshops: "workshop",

        competition: "competition",

        competitions: "competition",

        hackathon: "hackathon",

        hackathons: "hackathon",

        seminar: "seminar",

        seminars: "seminar",

        fest: "fest",

        fests: "fest",

        festival: "fest",

        sports: "sports",

        sport: "sports",

        "open source": "open-source",

        opensource: "open-source"

    };


    for (const word in categoryWords) {

        if (q.includes(word)) {

            return events.filter(
                event =>
                    event.category ===
                    categoryWords[word]
            );

        }

    }


    return [];

}


/* =========================================
   FIND EVENTS BY GENERAL KEYWORDS
========================================= */

function findEventsByKeyword(question) {

    const q =
        normalizeText(question);


    const keywords = {

        python: [
            "python"
        ],

        ai: [
            "ai",
            "artificial intelligence"
        ],

        cyber: [
            "cyber",
            "cybersecurity",
            "security",
            "hacking"
        ],

        web: [
            "web",
            "frontend",
            "html",
            "css",
            "javascript"
        ],

        coding: [
            "coding",
            "programming",
            "code"
        ],

        github: [
            "github",
            "git",
            "open source"
        ],

        robotics: [
            "robot",
            "robotics"
        ],

        startup: [
            "startup",
            "entrepreneur"
        ],

        photography: [
            "photography",
            "photo"
        ],

        career: [
            "career",
            "internship",
            "placement",
            "resume"
        ]

    };


    for (const topic in keywords) {

        const found =
            keywords[topic].some(
                word => q.includes(word)
            );


        if (found) {

            return events.filter(event => {

                const text = `

                    ${event.title}

                    ${event.description}

                    ${event.organizer}

                    ${event.venue}

                `.toLowerCase();


                return keywords[topic].some(
                    word =>
                        text.includes(word)
                );

            });

        }

    }


    return [];

}


/* =========================================
   FIND SPECIFIC EVENT
========================================= */

function findSpecificEvent(question) {

    const q =
        normalizeText(question);


    let bestEvent = null;

    let bestScore = 0;


    events.forEach(event => {

        const searchable = `

            ${event.title}

            ${event.organizer}

            ${event.venue}

        `.toLowerCase();


        const words =
            normalizeText(event.title)
                .split(" ");


        let score = 0;


        words.forEach(word => {

            if (
                word.length >= 4 &&
                q.includes(word)
            ) {

                score += 2;

            }

        });


        if (
            q.includes(
                normalizeText(
                    event.organizer
                )
            )
        ) {

            score += 4;

        }


        if (
            q.includes(
                normalizeText(
                    event.venue
                )
            )
        ) {

            score += 3;

        }


        if (
            searchable.includes(q) &&
            q.length > 4
        ) {

            score += 3;

        }


        if (score > bestScore) {

            bestScore = score;

            bestEvent = event;

        }

    });


    return bestScore >= 2
        ? bestEvent
        : null;

}


/* =========================================
   FORMAT EVENT LIST
========================================= */

function formatEventList(list) {

    if (list.length === 0) {

        return "No matching events were found.";

    }


    return list.map(event => `

        📅 <strong>
            ${formatDate(event.date)}
        </strong>

        — ${event.title}

        <br>

        🕒 ${event.time}

        • 📍 ${event.venue}

        <br><br>

    `).join("");

}


/* =========================================
   EVENT DETAIL RESPONSE
========================================= */

function eventDetails(event) {

    return `

        <strong>${event.title}</strong>

        <br><br>

        📅 <strong>Date:</strong>
        ${formatDate(event.date)}

        <br>

        🕒 <strong>Time:</strong>
        ${event.time}

        <br>

        📍 <strong>Venue:</strong>
        ${event.venue}

        <br>

        👥 <strong>Organizer:</strong>
        ${event.organizer}

        <br>

        💰 <strong>Fee:</strong>
        ${event.fee}

        <br>

        ⏰ <strong>Registration deadline:</strong>
        ${event.deadline}

        <br>

        📞 <strong>Contact:</strong>
        ${event.contact}

        <br>

        📧 <strong>Email:</strong>
        ${event.email}

        <br><br>

        ${event.description}

        <br><br>

        <strong>Important:</strong>
        ${event.important}

        <br><br>

        <a
            href="${event.registration}"
            target="_blank"
            class="register-btn"
        >
            Register for Event
        </a>

    `;

}


/* =========================================
   AI RESPONSE
========================================= */

function processAIQuestion(question) {

    const q =
        normalizeText(question);


    /* GREETING */

    if (
        q === "hi" ||
        q === "hello" ||
        q === "hey" ||
        q.includes("hello campusconnect")
    ) {

        return `

            Hey! 👋

            I'm CampusConnect AI.

            <br><br>

            I can help you find events by
            <strong>date, category, venue,
            organizer, topic, fee or deadline.</strong>

            <br><br>

            Try:
            <br>
            • Events on 27th
            <br>
            • Free workshops
            <br>
            • Where is the hackathon?
            <br>
            • Any cybersecurity events?

        `;

    }


    /* THANK YOU */

    if (
        q.includes("thank you") ||
        q === "thanks" ||
        q === "thank"
    ) {

        return `
            You're welcome! 👋
            Let me know if you need anything else.
        `;

    }


    /* HELP */

    if (
        q === "help" ||
        q.includes("what can you do") ||
        q.includes("how can you help")
    ) {

        return `

            I can help you with:

            <br><br>

            📅 Find events by date
            <br>

            🏷️ Find events by category
            <br>

            📍 Find venues
            <br>

            👥 Find organizers
            <br>

            💰 Check registration fees
            <br>

            ⏰ Check deadlines
            <br>

            🔎 Search topics like Python,
            AI, cybersecurity, GitHub and web development.

        `;

    }


    /* EVENTS ON SPECIFIC DATE */

    const dateEvents =
        findEventsByDate(q);


    if (dateEvents.length > 0) {

        const date =
            formatDate(dateEvents[0].date);


        return `

            <strong>
                Events on ${date}:
            </strong>

            <br><br>

            ${formatEventList(dateEvents)}

        `;

    }


    /* FREE EVENTS */

    if (
        q.includes("free event") ||
        q.includes("free events") ||
        q.includes("no fee") ||
        q.includes("without fee") ||
        q.includes("free")
    ) {

        const freeEvents =
            events.filter(
                event =>
                    event.fee.toLowerCase() ===
                    "free"
            );


        return `

            <strong>
                Free events:
            </strong>

            <br><br>

            ${formatEventList(freeEvents)}

        `;

    }


    /* CATEGORY SEARCH */

    const categoryEvents =
        findEventsByCategory(q);


    if (categoryEvents.length > 0) {

        return `

            <strong>
                Matching events:
            </strong>

            <br><br>

            ${formatEventList(categoryEvents)}

        `;

    }


    /* KEYWORD SEARCH */

    const keywordEvents =
        findEventsByKeyword(q);


    if (keywordEvents.length > 0) {

        return `

            I found these events related to
            your search:

            <br><br>

            ${formatEventList(keywordEvents)}

        `;

    }


    /* UPCOMING EVENTS */

    if (
        q.includes("upcoming") ||
        q.includes("what events") ||
        q.includes("all events") ||
        q.includes("show events") ||
        q.includes("events this week") ||
        q.includes("what is happening")
    ) {

        return `

            <strong>
                Upcoming events:
            </strong>

            <br><br>

            ${formatEventList(
                events.slice(0, 8)
            )}

        `;

    }


    /* SPECIFIC EVENT */

    const specificEvent =
        findSpecificEvent(q);


    if (specificEvent) {

        return eventDetails(
            specificEvent
        );

    }


    /* VENUE QUESTIONS */

    if (
        q.includes("where") ||
        q.includes("location") ||
        q.includes("venue")
    ) {

        const event =
            findSpecificEvent(q);


        if (event) {

            return `

                <strong>
                    ${event.title}
                </strong>

                is being held at:

                <br><br>

                📍 <strong>
                    ${event.venue}
                </strong>

                <br><br>

                📅 ${formatDate(event.date)}

                <br>

                🕒 ${event.time}

            `;

        }

    }


    /* ORGANIZER QUESTIONS */

    if (
        q.includes("who organizes") ||
        q.includes("organizer") ||
        q.includes("conducted by") ||
        q.includes("conducting")
    ) {

        const event =
            findSpecificEvent(q);


        if (event) {

            return `

                <strong>
                    ${event.title}
                </strong>

                is organized by:

                <br><br>

                👥 <strong>
                    ${event.organizer}
                </strong>

                <br><br>

                📅 ${formatDate(event.date)}

                <br>

                📍 ${event.venue}

            `;

        }

    }


    /* FEE QUESTIONS */

    if (
        q.includes("fee") ||
        q.includes("price") ||
        q.includes("cost") ||
        q.includes("registration fee")
    ) {

        const event =
            findSpecificEvent(q);


        if (event) {

            return `

                The registration fee for

                <strong>
                    ${event.title}
                </strong>

                is:

                <br><br>

                💰 <strong>
                    ${event.fee}
                </strong>

            `;

        }

    }


    /* DEADLINE QUESTIONS */

    if (
        q.includes("deadline") ||
        q.includes("last date") ||
        q.includes("registration closes")
    ) {

        const event =
            findSpecificEvent(q);


        if (event) {

            return `

                The registration deadline for

                <strong>
                    ${event.title}
                </strong>

                is:

                <br><br>

                ⏰ <strong>
                    ${event.deadline}
                </strong>

            `;

        }

    }


    /* TIME QUESTIONS */

    if (
        q.includes("when") ||
        q.includes("what time")
    ) {

        const event =
            findSpecificEvent(q);


        if (event) {

            return `

                <strong>
                    ${event.title}
                </strong>

                is scheduled for:

                <br><br>

                📅 ${formatDate(event.date)}

                <br>

                🕒 <strong>
                    ${event.time}
                </strong>

                <br>

                📍 ${event.venue}

            `;

        }

    }


    /* FALLBACK */

    return `

        I couldn't find an exact match for that.

        <br><br>

        Try asking me in a different way, for example:

        <br><br>

        • What events are on 27th?
        <br>

        • Show me free events.
        <br>

        • Any cybersecurity events?
        <br>

        • Which workshops are coming up?
        <br>

        • Where is the Python workshop?
        <br>

        • Who organizes the coding challenge?
        <br>

        • What is the fee for the hackathon?
        <br>

        • When is the web development workshop?

    `;

}


/* =========================================
   CHAT MESSAGE
========================================= */

function addMessage(text, type) {

    const messages =
        document.getElementById(
            "chatMessages"
        );


    const message =
        document.createElement("div");


    message.className =
        `message ${type}-message`;


    message.innerHTML = text;


    messages.appendChild(message);


    messages.scrollTop =
        messages.scrollHeight;

}


/* =========================================
   CHAT FORM
========================================= */

document
    .getElementById("chatForm")
    .addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const input =
                document.getElementById(
                    "chatInput"
                );


            const question =
                input.value.trim();


            if (!question) {
                return;
            }


            addMessage(
                question,
                "user"
            );


            input.value = "";


            setTimeout(() => {

                const response =
                    processAIQuestion(
                        question
                    );


                addMessage(
                    response,
                    "bot"
                );

            }, 300);

        }
    );


/* =========================================
   SUGGESTION BUTTONS
========================================= */

document
    .querySelectorAll(
        ".suggestions button"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const question =
                    button.textContent;


                addMessage(
                    question,
                    "user"
                );


                setTimeout(() => {

                    addMessage(
                        processAIQuestion(
                            question
                        ),
                        "bot"
                    );

                }, 300);

            }
        );

    });


/* =========================================
   INITIAL LOAD
========================================= */

displayEvents(events);

displaySavedEvents();

updateAnnouncementBar();

renderCalendarList();