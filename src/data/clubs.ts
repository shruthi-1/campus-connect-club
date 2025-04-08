
import { 
  Code, LucideIcon, Trophy, Palette, Brush, Music, 
  BookOpen, Microscope, Laptop, BookMarked, BarChart, Bolt, 
  Football, Tennis, Running, Volleyball, Swim, Users, 
  Camera, PenTool, ChefHat, Coffee, Book, HeartHandshake
} from "lucide-react";

export type ClubActivity = {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
};

export type ClubCoordinator = {
  id: string;
  name: string;
  role: string;
  photo: string;
  email: string;
  department?: string;
  isStudent: boolean;
};

export type Club = {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  icon: LucideIcon;
  coverImage: string;
  categories: {
    title: string;
    icon: LucideIcon;
    description: string;
  }[];
  coordinators: ClubCoordinator[];
  activities: ClubActivity[];
};

export const clubs: Club[] = [
  {
    id: "1",
    name: "Technical Club",
    slug: "technical",
    shortDescription: "Explore innovation and technology",
    fullDescription: "The Technical Club is a hub for innovation and technological exploration. We foster a community where students can enhance their technical skills, collaborate on cutting-edge projects, and stay updated with the latest technological advancements. From coding competitions to hackathons, we provide a platform for students to showcase their talents and develop problem-solving abilities that are essential in today's digital world.",
    icon: Code,
    coverImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&h=600",
    categories: [
      {
        title: "Coding",
        icon: Laptop,
        description: "Develop programming skills through workshops and hackathons"
      },
      {
        title: "Robotics",
        icon: Bolt,
        description: "Design and build robots for competitions and projects"
      },
      {
        title: "Research",
        icon: Microscope,
        description: "Conduct innovative technical research with faculty guidance"
      },
      {
        title: "Data Science",
        icon: BarChart,
        description: "Explore data analytics, visualization, and machine learning"
      }
    ],
    coordinators: [
      {
        id: "t1",
        name: "Dr. Robert Chen",
        role: "Faculty Coordinator",
        photo: "https://randomuser.me/api/portraits/men/32.jpg",
        email: "robert.chen@campus.edu",
        department: "Computer Science",
        isStudent: false
      },
      {
        id: "t2",
        name: "Emily Zhang",
        role: "Student Coordinator",
        photo: "https://randomuser.me/api/portraits/women/44.jpg",
        email: "emily.zhang@student.campus.edu",
        department: "Computer Engineering",
        isStudent: true
      },
      {
        id: "t3",
        name: "Jason Kumar",
        role: "Technical Lead",
        photo: "https://randomuser.me/api/portraits/men/67.jpg",
        email: "jason.kumar@student.campus.edu",
        department: "Information Technology",
        isStudent: true
      }
    ],
    activities: [
      {
        id: "ta1",
        title: "Annual Hackathon",
        description: "48-hour coding marathon to solve real-world problems",
        date: "October 15-17, 2025",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&h=500"
      },
      {
        id: "ta2",
        title: "Web Development Workshop",
        description: "Learn modern front-end frameworks and backend technologies",
        date: "September 5, 2025",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&h=500"
      },
      {
        id: "ta3",
        title: "AI & Machine Learning Seminar",
        description: "Introduction to AI concepts and practical applications",
        date: "November 12, 2025",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&h=500"
      }
    ]
  },
  {
    id: "2",
    name: "Sports Club",
    slug: "sports",
    shortDescription: "Promoting physical fitness and team spirit",
    fullDescription: "The Sports Club is dedicated to promoting physical fitness, sportsmanship, and team spirit among students. We offer a diverse range of sports activities, from football and basketball to athletics and swimming. Our club organizes regular training sessions, inter-college tournaments, and fitness workshops to ensure holistic development. We believe that sports not only keep you physically fit but also teach valuable life skills like teamwork, leadership, and perseverance.",
    icon: Trophy,
    coverImage: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&h=600",
    categories: [
      {
        title: "Team Sports",
        icon: Football,
        description: "Participate in football, basketball, volleyball and more"
      },
      {
        title: "Racquet Sports",
        icon: Tennis,
        description: "Join tennis, badminton, and table tennis competitions"
      },
      {
        title: "Athletics",
        icon: Running,
        description: "Track and field events, marathons, and fitness challenges"
      },
      {
        title: "Aquatics",
        icon: Swim,
        description: "Swimming, water polo, and diving activities"
      }
    ],
    coordinators: [
      {
        id: "s1",
        name: "Coach Sarah Johnson",
        role: "Faculty Coordinator",
        photo: "https://randomuser.me/api/portraits/women/68.jpg",
        email: "sarah.johnson@campus.edu",
        department: "Physical Education",
        isStudent: false
      },
      {
        id: "s2",
        name: "Michael Torres",
        role: "Student Coordinator",
        photo: "https://randomuser.me/api/portraits/men/52.jpg",
        email: "michael.torres@student.campus.edu",
        department: "Sports Science",
        isStudent: true
      },
      {
        id: "s3",
        name: "Aisha Patel",
        role: "Team Captain",
        photo: "https://randomuser.me/api/portraits/women/90.jpg",
        email: "aisha.patel@student.campus.edu",
        department: "Business Administration",
        isStudent: true
      }
    ],
    activities: [
      {
        id: "sa1",
        title: "Inter-College Football Tournament",
        description: "Annual football competition between colleges",
        date: "September 20-25, 2025",
        image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=800&h=500"
      },
      {
        id: "sa2",
        title: "Marathon for Charity",
        description: "10K run to raise funds for local charities",
        date: "October 30, 2025",
        image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd1?auto=format&fit=crop&w=800&h=500"
      },
      {
        id: "sa3",
        title: "Swimming Championship",
        description: "Competitive swimming events for all levels",
        date: "November 5, 2025",
        image: "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?auto=format&fit=crop&w=800&h=500"
      }
    ]
  },
  {
    id: "3",
    name: "Hobby Club",
    slug: "hobby",
    shortDescription: "Pursue your passions outside academics",
    fullDescription: "The Hobby Club provides students with an outlet to pursue their passions outside of academics. We offer a diverse range of activities, from photography and cooking to craft-making and book discussions. Our club is all about exploring new interests, developing skills, and finding joy in creative pursuits. We organize regular workshops, exhibitions, and hobby sessions that allow students to unwind, express themselves, and form connections with like-minded peers.",
    icon: Brush,
    coverImage: "https://images.unsplash.com/photo-1582561833077-5aa9231689c0?auto=format&fit=crop&w=1200&h=600",
    categories: [
      {
        title: "Photography",
        icon: Camera,
        description: "Learn photography techniques and participate in photo walks"
      },
      {
        title: "Crafts",
        icon: PenTool,
        description: "Engage in various crafting activities and DIY projects"
      },
      {
        title: "Culinary Arts",
        icon: ChefHat,
        description: "Explore cooking techniques and food from around the world"
      },
      {
        title: "Book Club",
        icon: Book,
        description: "Discuss literature and share perspectives on various books"
      }
    ],
    coordinators: [
      {
        id: "h1",
        name: "Prof. Maria Garcia",
        role: "Faculty Coordinator",
        photo: "https://randomuser.me/api/portraits/women/23.jpg",
        email: "maria.garcia@campus.edu",
        department: "Fine Arts",
        isStudent: false
      },
      {
        id: "h2",
        name: "David Wilson",
        role: "Student Coordinator",
        photo: "https://randomuser.me/api/portraits/men/94.jpg",
        email: "david.wilson@student.campus.edu",
        department: "Psychology",
        isStudent: true
      },
      {
        id: "h3",
        name: "Sophia Lee",
        role: "Creative Director",
        photo: "https://randomuser.me/api/portraits/women/57.jpg",
        email: "sophia.lee@student.campus.edu",
        department: "Liberal Arts",
        isStudent: true
      }
    ],
    activities: [
      {
        id: "ha1",
        title: "Photography Exhibition",
        description: "Showcase student photography with professional guidance",
        date: "September 10, 2025",
        image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&h=500"
      },
      {
        id: "ha2",
        title: "Culinary Workshop",
        description: "Learn to prepare international cuisines with expert chefs",
        date: "October 8, 2025",
        image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&h=500"
      },
      {
        id: "ha3",
        title: "Craft Fair",
        description: "Exhibition and sale of student-made crafts and artwork",
        date: "November 20, 2025",
        image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=800&h=500"
      }
    ]
  },
  {
    id: "4",
    name: "Cultural Club",
    slug: "cultural",
    shortDescription: "Celebrate diversity through arts and culture",
    fullDescription: "The Cultural Club celebrates diversity and heritage through various forms of artistic expression. We provide platforms for students to showcase their talents in music, dance, theater, and other performing arts. Our club organizes cultural festivals, performances, and workshops that promote cross-cultural understanding and appreciation. We believe that cultural activities not only entertain but also educate and bring communities together. Join us to explore the rich tapestry of global cultures.",
    icon: Palette,
    coverImage: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&w=1200&h=600",
    categories: [
      {
        title: "Performing Arts",
        icon: Music,
        description: "Explore music, dance, and theatrical performances"
      },
      {
        title: "Literary Arts",
        icon: BookOpen,
        description: "Participate in poetry, storytelling, and creative writing"
      },
      {
        title: "Visual Arts",
        icon: Palette,
        description: "Engage in painting, sculpture, and digital art"
      },
      {
        title: "Cultural Exchange",
        icon: HeartHandshake,
        description: "Learn about diverse traditions and international cultures"
      }
    ],
    coordinators: [
      {
        id: "c1",
        name: "Dr. James Williams",
        role: "Faculty Coordinator",
        photo: "https://randomuser.me/api/portraits/men/42.jpg",
        email: "james.williams@campus.edu",
        department: "Performing Arts",
        isStudent: false
      },
      {
        id: "c2",
        name: "Priya Sharma",
        role: "Student Coordinator",
        photo: "https://randomuser.me/api/portraits/women/33.jpg",
        email: "priya.sharma@student.campus.edu",
        department: "Liberal Arts",
        isStudent: true
      },
      {
        id: "c3",
        name: "Luis Rodriguez",
        role: "Event Director",
        photo: "https://randomuser.me/api/portraits/men/24.jpg",
        email: "luis.rodriguez@student.campus.edu",
        department: "Media Studies",
        isStudent: true
      }
    ],
    activities: [
      {
        id: "ca1",
        title: "Annual Cultural Festival",
        description: "Celebration of diverse cultural performances and exhibitions",
        date: "October 25-27, 2025",
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&h=500"
      },
      {
        id: "ca2",
        title: "Theater Workshop",
        description: "Acting, directing, and scriptwriting sessions with professionals",
        date: "September 15, 2025",
        image: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=800&h=500"
      },
      {
        id: "ca3",
        title: "Dance Competition",
        description: "Solo and group dance competition across various styles",
        date: "November 10, 2025",
        image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&h=500"
      }
    ]
  }
];

export const getClubBySlug = (slug: string): Club | undefined => {
  return clubs.find(club => club.slug === slug);
};
