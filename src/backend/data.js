import codingimg from "../assets/herobg.webp";
import profileimg from "../assets/profileimg.png";

let aboutdata = {
    firsttext: "Launch Your Dev Career With",
    gradienttext: "Project-Based",
    lasttext: "Coaching",
    shorttext: "Showcase your skills with practical development experience and land the coding career of your dreams",
    btn: "Explore Courses",
    btnurl: "/youtube-videos",
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
        courseimg: "https://www.creative-tim.com/blog/content/images/2022/01/which-development-job-is-right-for-you.jpg",
        coursestitle: "Learn web development basic to advance with project",
        shortdescription: "Web development is the process of creating and maintaining websites or web applications. It involves a combination of designing the user interface (UI) and user experience (UX), coding the front-end and back-end functionalities, and deploying the website or application on the internet.",
        category: "web development",
        details:[
            "You want to gain a deep understanding of the most popular programming language in the world.",
            "You want to gain a deep understanding of the most popular programming language in the world.",
            "You want to gain a deep understanding of the most popular programming language in the world.",
            "You want to get started with programming in general - JavaScript is a great language to learn how to code.",
        ],
        Course:[
            {
                id:1,
                coursestitle:"react js",
                category: "web development",
                shortdescription: "ReactJS, often referred to as React, is a popular JavaScript library used for building user interfaces (UIs) in web applications. Developed by Facebook, React allows developers to create reusable UI components and efficiently manage the state of their applications.",
                courseimg:"https://techsathi.com/wp-content/uploads/2021/05/ReactJS.png",
                video:[
                    {
                        id:1,
                        link:"https://www.youtube.com/embed/QV-LdPmFA4A",
                        category:"react js",
                    },
                ]
            },
            {
                id:2,
                coursestitle:"javascript",
                category: "web development",
                shortdescription: "JavaScript is a high-level programming language primarily used for creating interactive and dynamic web content. It is one of the core technologies of web development, alongside HTML and CSS. JavaScript can also be used outside of web browsers for server-side development (Node.js) and mobile app development (React Native).",
                courseimg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-djM5oYsZxgd4AsyX2DuBQExiOw9OJe0aWg&usqp=CAU",
                video:[
                    {
                        id:1,
                        link:"https://www.youtube.com/embed/-gCr7jseXTg",
                        category:"javascript",
                    },
                    {
                        id:2,
                        link:"https://www.youtube.com/embed/zJqjXilNEBA",
                        category:"javascript",
                    },
                    {
                        id:3,
                        link:"https://www.youtube.com/embed/4suqtt1KWAo",
                        category:"javascript",
                    },
                    {
                        id:4,
                        link:"https://www.youtube.com/embed/EmCohkEnqKw",
                        category:"javascript",
                    },
                    {
                        id:5,
                        link:"https://www.youtube.com/embed/6N-bNoHT5Vo",
                        category:"javascript",
                    },{
                        id:5,
                        link:"https://www.youtube.com/embed/7b1-gLbPH10",
                        category:"javascript",
                    }
                ]
            },
            {
                id:3,
                coursestitle:"html css",
                category: "web development",
                shortdescription: "HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets) are fundamental technologies for building websites and web applications. They work together to define the structure, appearance, and layout of web content.",
                courseimg:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/83/e258e0532611e5a5072321239ff4d4/jhep-coursera-course4.png?auto=format%2Ccompress&dpr=1",
                video:[
                    {
                        id:1,
                        link:"https://www.youtube.com/embed/dPVLxxljULM",
                        category:"html css",
                    },
                    {
                        id:2,
                        link:"https://www.youtube.com/embed/rRgfU_mlSxU",
                        category:"html css",
                    },
                    {
                        id:3,
                        link:"https://www.youtube.com/embed/AIhHd1h1qiY",
                        category:"html css",
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        courseimg: "https://www.simplilearn.com/ice9/free_resources_article_thumb/How_to_Become_an_Android_Developer.jpg",
        coursestitle: "Learn Android app development",
        shortdescription: "Kiss Theory-Driven Courses Goodbye And Build An Interactive Movie App That Showcases Your Development Prowess",
        category: "app development",
        details:[],
        Course:[
            {
                id:1,
                coursestitle:"Android studio",
                category: "app development",
                shortdescription: "Android Studio is the official integrated development environment (IDE) for Android app development. It provides a comprehensive set of tools and features that enable developers to create, test, and debug Android applications efficiently. Android Studio is built on the IntelliJ IDEA IDE platform and is specifically designed for Android development.",
                courseimg:"https://i.ytimg.com/vi/kMI2jy-WlGM/maxresdefault.jpg",
                video:[
                    {
                        id:1,
                        link:"https://www.youtube.com/embed/Urjoklj9n-I",
                        category:"Android studio",
                    },
                    {
                        id:2,
                        link:"https://www.youtube.com/embed/fy6g5jq7Q9E",
                        category:"Android studio",
                    }
                ]
            },
            {
                id:1,
                coursestitle:"java",
                category: "app development",
                shortdescription: "Android Studio is the official integrated development environment (IDE) for Android app development. It provides a comprehensive set of tools and features that enable developers to create, test, and debug Android applications efficiently. Android Studio is built on the IntelliJ IDEA IDE platform and is specifically designed for Android development.",
                courseimg:"https://i.ytimg.com/vi/kMI2jy-WlGM/maxresdefault.jpg",
                video:[
                    {
                        id:1,
                        link:"https://www.youtube.com/embed/uhnANVGR0I8",
                        category:"java",
                    },
                    {
                        id:2,
                        link:"https://www.youtube.com/embed/XHSz-78S1B4",
                        category:"java",
                    },
                    {
                        id:3,
                        link:"https://www.youtube.com/embed/sLvOTNaNYV8",
                        category:"java",
                    },
                    {
                        id:4,
                        link:"https://www.youtube.com/embed/hEVfJX5PqSs",
                        category:"java",
                    }
                ]
            }

        ]
    },
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


//popular resource youtube video
let popularresource = [
    {
        id:1,
        img:"https://cdn.sanity.io/images/x22npxvj/production/214db68ab7ea3646c619f0912456e2a128701682-644x360.png",
        title:"Build and Deploy a Modern Web 3.0 Blockchain App | Solidity, Smart Contracts, Crypto",
        link:""
    },
    {
        id:2,
        img:"https://cdn.sanity.io/images/x22npxvj/production/768018603bc23691903e815715d1b135c294c002-1058x588.png",
        title:"ECommerce Web Shop - Build & Deploy an Amazing App | React.js, Commerce.js, Stripe",
        link:"",
    },
    {
        id:1,
        img:"https://cdn.sanity.io/images/x22npxvj/production/96ff11479743ea553c23602b742c0f9909bfd04b-1058x588.png",
        title:"MERN Auth - Login with Email (JWT) + Google OAuth Authentication | React, Node, Express, MongoDB",
        link:""
    }
]


//popular resource youtube video
let latestproject = [
    {
        id:1,
        img:"https://cdn.sanity.io/images/x22npxvj/production/214db68ab7ea3646c619f0912456e2a128701682-644x360.png",
        title:"Ecommerce web app",
        link:"",
        category:"web"
    },
    {
        id:2,
        img:"https://cdn.sanity.io/images/x22npxvj/production/768018603bc23691903e815715d1b135c294c002-1058x588.png",
        title:"Ai web app",
        link:"",
        category:"web"
    },
    {
        id:3,
        img:"https://cdn.sanity.io/images/x22npxvj/production/214db68ab7ea3646c619f0912456e2a128701682-644x360.png",
        title:"Ecommerce web app",
        link:"",
        category:"app"
    },
    {
        id:4,
        img:"https://cdn.sanity.io/images/x22npxvj/production/214db68ab7ea3646c619f0912456e2a128701682-644x360.png",
        title:"Ecommerce web app",
        link:"",
        category:"web"
    },
    {
        id:5,
        img:"https://cdn.sanity.io/images/x22npxvj/production/768018603bc23691903e815715d1b135c294c002-1058x588.png",
        title:"Ai web app",
        link:"",
        category:"web"
    },
    {
        id:6,
        img:"https://cdn.sanity.io/images/x22npxvj/production/214db68ab7ea3646c619f0912456e2a128701682-644x360.png",
        title:"Ecommerce web app",
        link:"",
        category:"app"
    },
];


export { aboutdata, Courses, gitubuser ,buttondata,popularresource,latestproject}