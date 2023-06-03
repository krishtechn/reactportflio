import codingimg from "../assets/herobg.webp";
import profileimg from "../assets/profileimg.png";

let aboutdata = {
    firsttext: "Launch Your Dev Career With",
    gradienttext: "Project-Based",
    lasttext: "Coaching",
    shorttext: "Showcase your skills with practical development experience and land the coding career of your dreams",
    btn: "Explore Courses",
    btnurl: "/",
    heroimg: `${codingimg}`,
}

let aboutdata2 = {
    firsttext: "Launch Your Dev Career With",
    gradienttext: "Project-Based",
    lasttext: "Coaching",
    shorttext: "Showcase your skills with practical development experience and land the coding career of your dreams",
    btn: "Explore Courses",
    btnurl: "/",
    heroimg: `${codingimg}`,
}

let Courses = [
    {
        id: 1,
        courseimg: "https://www.jsmastery.pro/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmovie.3bed4872.png&w=3840&q=75",
        coursestitle: "Build An AI Powered Movie Application And Master React",
        shortdescription: "Kiss Theory-Driven Courses Goodbye And Build An Interactive Movie App That Showcases Your Development Prowess",
        category: "web development",
        details:[
            "You want to gain a deep understanding of the most popular programming language in the world.",
            "You want to gain a deep understanding of the most popular programming language in the world.",
            "You want to gain a deep understanding of the most popular programming language in the world.",
            "You want to get started with programming in general - JavaScript is a great language to learn how to code.",
        ]
    },
    {
        id: 2,
        courseimg: "https://img.freepik.com/free-vector/cartoon-graphic-design-landing-page_52683-70881.jpg?w=826&t=st=1685721396~exp=1685721996~hmac=204756cb6dcc9e6f1905ae33578c97f112587ed4c06e665860ea4ec78d18d063",
        coursestitle: "Learn Graphics design",
        shortdescription: "Kiss Theory-Driven Courses Goodbye And Build An Interactive Movie App That Showcases Your Development Prowess",
        category: "graphics design",
        details:[]
    },
    {
        id: 2,
        courseimg: "https://img.freepik.com/free-vector/cartoon-graphic-design-landing-page_52683-70881.jpg?w=826&t=st=1685721396~exp=1685721996~hmac=204756cb6dcc9e6f1905ae33578c97f112587ed4c06e665860ea4ec78d18d063",
        coursestitle: "Learn Graphics design",
        shortdescription: "Kiss Theory-Driven Courses Goodbye And Build An Interactive Movie App That Showcases Your Development Prowess",
        category: "graphics design",
        details:[
            "You want to gain a deep understanding of the most popular programming language in the world.",
            "You want to gain a deep understanding of the most popular programming language in the world.",
            "You want to gain a deep understanding of the most popular programming language in the world.",
            "You want to get started with programming in general - JavaScript is a great language to learn how to code.",
        ]
    }
]


let gitubuser = {
    centertext: "Courses Are Taught By A",
    gradienttext: "Technical Krish",
    gradientlasttext: "GitHub Star",
    shorttext: `The GitHub Stars program features the 100 most influential developers in the world.`,
    userprofile: `${profileimg}`
}


let buttondata = [
    {
        name: "JavaScript Mastery Course",
        link: "",
    },
    {
        name: "JavaScript Mastery Course",
        link: "",
    },
    {
        name: "JavaScript Mastery Course",
        link: "",
    }
]

export { aboutdata, Courses, gitubuser ,buttondata}