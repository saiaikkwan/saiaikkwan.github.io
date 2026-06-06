// ============================================
// CENTRAL DATA SOURCE - Sai Aik Kwan Portfolio
// ============================================

const siteData = {
    // Personal Info
    personal: {
        name: "Sai Aik Kwan",
        title: "Networking & Cybersecurity Student",
        location: "Mandalay, Myanmar",
        email: "saiaikkwan.pro@gmail.com",
        github: "saiaikkwan",
        linkedin: "sai-aik-kwan",
        instagram: "sai.aik.kwan.netsec",
        telegram: "sai_aik_kwan",
        facebook: "sai.aik.kwan.netsec",
        discord: "aW4W4VVk"
    },
    
    // Education Timeline
    education: [
        {
            degree: "Bachelor's Degree in Cybersecurity & Networking",
            institution: "Auston College, Myanmar",
            partner: "University of Wolverhampton, UK",
            year: "2026",
            status: "in_progress",
            description: "Advanced studies in cybersecurity, network defense, ethical hacking, and enterprise infrastructure design with practical lab work."
        },
        {
            degree: "Diploma in Infrastructure and Network",
            institution: "Auston College, Myanmar",
            partner: "Auston Institute of Management, Singapore",
            year: "2025",
            status: "completed",
            description: "Specialized in network architecture, routing protocols, switching technologies, and infrastructure management with hands-on lab experience."
        },
        {
            degree: "Intermediate English",
            institution: "Headway",
            partner: null,
            year: "2024",
            status: "completed",
            description: "Advanced English proficiency for technical and professional communication."
        }
    ],
    
    // Certifications
    certifications: {
        in_progress: [
            { name: "CCNA (Cisco Certified Network Associate)", issuer: "Cisco", icon: "🔒" },
            { name: "CompTIA Security+", issuer: "CompTIA", icon: "🛡️" }
        ],
        completed: [
            { name: "HTML", issuer: "Self-Study", year: "2024", icon: "🌐" },
            { name: "CSS", issuer: "Self-Study", year: "2024", icon: "🎨" },
            { name: "PHP", issuer: "Self-Study", year: "2024", icon: "⚙️" }
        ]
    },
    
    // Skills
    skills: {
        technical: [
            "Windows Server", "Linux (Ubuntu, Kali)", "Network Configuration",
            "Routing & Switching", "Virtualization", "HTML/CSS", "PHP",
            "Bash Scripting", "PowerShell", "Active Directory"
        ],
        soft: [
            "Critical Thinking", "Problem Solving", "Communication",
            "Leadership", "Team Collaboration", "Time Management",
            "Analytical Skills", "Documentation"
        ]
    },
    
    // Tools
    tools: [
        { name: "Windows Server", icon: "🪟" },
        { name: "Linux (Ubuntu/Kali)", icon: "🐧" },
        { name: "Wireshark", icon: "📡" },
        { name: "VirtualBox/VMware", icon: "🖥️" },
        { name: "PuTTY/Terminal", icon: "🔧" },
        { name: "Nmap", icon: "🛡️" },
        { name: "Cisco IOS", icon: "🌐" },
        { name: "Active Directory", icon: "📋" }
    ],
    
    // Stats
    stats: {
        projects: "6+",
        certsInProgress: "2",
        skillsMastered: "18"
    },
    
    // Quick Facts
    quickFacts: [
        { emoji: "📍", text: "Based in Mandalay, Myanmar" },
        { emoji: "🎓", text: "Auston College, Myanmar" },
        { emoji: "💻", text: "Homelab Enthusiast" },
        { emoji: "🔐", text: "Cybersecurity Focus" }
    ],
    
    // Focus Areas (Homepage)
    focusAreas: [
        { icon: "📚", title: "Currently Studying", description: "CCNA Certification Preparation<br>CompTIA Security+ Coursework" },
        { icon: "🔬", title: "Lab Focus", description: "Active Directory Deployment<br>Network Segmentation & Security" },
        { icon: "🎯", title: "Learning Goal", description: "Network Security Fundamentals<br>Enterprise Infrastructure Design" }
    ],
    
    // Testimonials / Approach
    approaches: [
        {
            quote: "I believe in learning by doing. Every networking concept I study gets implemented in my homelab, documented thoroughly, and shared on GitHub. Real hands-on experience builds skills that certifications alone cannot.",
            author: "Hands-On Practice",
            role: "Homelab | Documentation | GitHub"
        },
        {
            quote: "Security isn't just a career path — it's a mindset. I approach every network configuration with defense in depth, considering not just how to make things work, but how to make them resilient against threats.",
            author: "Security-First Mindset",
            role: "Defense in Depth | Best Practices"
        }
    ],
    
    // Social Links
    socialLinks: [
        { name: "GitHub", url: "https://github.com/saiaikkwan", icon: "github", color: "#333333" },
        { name: "LinkedIn", url: "https://linkedin.com/in/sai-aik-kwan", icon: "linkedin", color: "#0A66C2" },
        { name: "Instagram", url: "https://instagram.com/sai.aik.kwan.netsec", icon: "instagram", color: "#E1306C" },
        { name: "Telegram", url: "https://t.me/sai_aik_kwan", icon: "telegram", color: "#26A5E4" },
        { name: "Facebook", url: "https://facebook.com/sai.aik.kwan.netsec", icon: "facebook", color: "#1877F2" },
        { name: "Discord", url: "https://discord.gg/aW4W4VVk", icon: "discord", color: "#5865F2", hasBadge: true, badgeText: "Join Server" }
    ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = siteData;
}