
export interface CompetitionResult {
  id: string;
  title: string;
  club: string;
  date: string;
  winners: {
    position: string;
    name: string;
    department: string;
    points: number;
  }[];
}

export interface StudentLeaderboard {
  id: string;
  name: string;
  department: string;
  photo: string;
  points: number;
  achievements: string[];
}

export interface DepartmentLeaderboard {
  id: string;
  name: string;
  points: number;
  studentCount: number;
  topAchievements: string[];
}

export const competitionResults: CompetitionResult[] = [
  {
    id: "cr1",
    title: "Annual Hackathon 2025",
    club: "Technical Club",
    date: "March 15, 2025",
    winners: [
      { position: "1st", name: "Emily Zhang", department: "Computer Science", points: 50 },
      { position: "2nd", name: "Rahul Patel", department: "Information Technology", points: 30 },
      { position: "3rd", name: "Lucas Wang", department: "Computer Engineering", points: 20 }
    ]
  },
  {
    id: "cr2",
    title: "Inter-College Football Tournament",
    club: "Sports Club",
    date: "February 25, 2025",
    winners: [
      { position: "1st", name: "Computer Science Team", department: "Computer Science", points: 100 },
      { position: "2nd", name: "Engineering Team", department: "Engineering", points: 75 },
      { position: "3rd", name: "Business Admin Team", department: "Business Administration", points: 50 }
    ]
  },
  {
    id: "cr3",
    title: "Photography Exhibition",
    club: "Hobby Club",
    date: "April 5, 2025",
    winners: [
      { position: "1st", name: "Mia Johnson", department: "Visual Arts", points: 40 },
      { position: "2nd", name: "Daniel Kim", department: "Media Studies", points: 25 },
      { position: "3rd", name: "Sofia Garcia", department: "Psychology", points: 15 }
    ]
  },
  {
    id: "cr4",
    title: "Dance Competition 2025",
    club: "Cultural Club",
    date: "January 30, 2025",
    winners: [
      { position: "1st", name: "Priya Sharma", department: "Performing Arts", points: 45 },
      { position: "2nd", name: "Miguel Rodriguez", department: "Liberal Arts", points: 30 },
      { position: "3rd", name: "Sarah Williams", department: "Education", points: 20 }
    ]
  },
  {
    id: "cr5",
    title: "Web Development Challenge",
    club: "Technical Club",
    date: "March 28, 2025",
    winners: [
      { position: "1st", name: "Jason Kumar", department: "Information Technology", points: 50 },
      { position: "2nd", name: "Hannah Lee", department: "Computer Science", points: 30 },
      { position: "3rd", name: "Arjun Mehta", department: "Computer Engineering", points: 20 }
    ]
  }
];

export const studentLeaderboard: StudentLeaderboard[] = [
  {
    id: "sl1",
    name: "Emily Zhang",
    department: "Computer Science",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    points: 120,
    achievements: ["Hackathon Winner", "Programming Contest First Place", "Tech Innovation Award"]
  },
  {
    id: "sl2",
    name: "Michael Torres",
    department: "Sports Science",
    photo: "https://randomuser.me/api/portraits/men/52.jpg",
    points: 115,
    achievements: ["Football Team Captain", "Athletics Champion", "Best Sportsperson Award"]
  },
  {
    id: "sl3",
    name: "Priya Sharma",
    department: "Performing Arts",
    photo: "https://randomuser.me/api/portraits/women/33.jpg",
    points: 105,
    achievements: ["Dance Competition Winner", "Cultural Festival Best Performer", "Theater Competition Lead Actor"]
  },
  {
    id: "sl4",
    name: "Jason Kumar",
    department: "Information Technology",
    photo: "https://randomuser.me/api/portraits/men/67.jpg",
    points: 95,
    achievements: ["Web Development Challenge Winner", "Mobile App Hackathon Finalist", "Coding Club Leader"]
  },
  {
    id: "sl5",
    name: "Sophia Lee",
    department: "Liberal Arts",
    photo: "https://randomuser.me/api/portraits/women/57.jpg",
    points: 90,
    achievements: ["Photography Exhibition Winner", "Creative Writing Award", "Art Direction Prize"]
  },
  {
    id: "sl6",
    name: "David Wilson",
    department: "Psychology",
    photo: "https://randomuser.me/api/portraits/men/94.jpg",
    points: 85,
    achievements: ["Book Club President", "Research Symposium Winner", "Debate Competition Finalist"]
  },
  {
    id: "sl7",
    name: "Aisha Patel",
    department: "Business Administration",
    photo: "https://randomuser.me/api/portraits/women/90.jpg",
    points: 80,
    achievements: ["Sports Team Leader", "Business Case Competition Winner", "Leadership Award"]
  },
  {
    id: "sl8",
    name: "Luis Rodriguez",
    department: "Media Studies",
    photo: "https://randomuser.me/api/portraits/men/24.jpg",
    points: 75,
    achievements: ["Cultural Event Director", "Media Project Award", "Film Festival Winner"]
  }
];

export const departmentLeaderboard: DepartmentLeaderboard[] = [
  {
    id: "dl1",
    name: "Computer Science",
    points: 450,
    studentCount: 120,
    topAchievements: ["Hackathon Champions", "Programming Olympics Winners", "Technical Innovation Award"]
  },
  {
    id: "dl2",
    name: "Performing Arts",
    points: 380,
    studentCount: 85,
    topAchievements: ["Cultural Festival Overall Champions", "Inter-College Dance Competition", "Theater Festival Winners"]
  },
  {
    id: "dl3",
    name: "Sports Science",
    points: 350,
    studentCount: 95,
    topAchievements: ["Inter-College Sports Champions", "Athletics Tournament Winners", "Swimming Competition Finalists"]
  },
  {
    id: "dl4",
    name: "Information Technology",
    points: 320,
    studentCount: 110,
    topAchievements: ["Software Development Contest", "Tech Innovation Challenge", "IT Quiz Champions"]
  },
  {
    id: "dl5",
    name: "Liberal Arts",
    points: 290,
    studentCount: 100,
    topAchievements: ["Creative Writing Competition", "Art Exhibition Award", "Literary Festival Winners"]
  },
  {
    id: "dl6",
    name: "Business Administration",
    points: 270,
    studentCount: 130,
    topAchievements: ["Case Study Competition", "Entrepreneurship Challenge", "Business Quiz Winners"]
  },
  {
    id: "dl7",
    name: "Media Studies",
    points: 240,
    studentCount: 75,
    topAchievements: ["Film Festival Award", "Digital Media Contest", "Photography Exhibition Winners"]
  },
  {
    id: "dl8",
    name: "Engineering",
    points: 220,
    studentCount: 140,
    topAchievements: ["Robotics Competition", "Engineering Design Challenge", "Technical Project Award"]
  }
];
