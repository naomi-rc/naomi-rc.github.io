
/*{
    name: "",
    description: "",
    link:"",
    imgSrc: require("assets/img/projects/"",
    vidSrc : ""
  },*/

const PROJECTS_WEB = [   
    {
        name: "Cartoon Character Quiz",
        description: "description",
        link:"",
        imgSrc: require("assets/img/projects/cartoon-character-quiz_demo_image.png").default,
        vidSrc : ""
    },
    {
        name: "Hangman",
        description: "description",
        link:"",
        imgSrc: require("assets/img/projects/hangman_demo_image.png").default,
        vidSrc : ""
    },
    {
        name: "proDUCKtive-chrome-extension",
        description: "description",
        link:"",
        imgSrc: require("assets/img/projects/producktive_demo_image.png").default,
        vidSrc : ""
    },
    {
        name: "Twenty-One",
        description: "description",
        link:"",
        imgSrc: require("assets/img/projects/twenty-one_demo_image.png").default,
        vidSrc : ""
    },
]

const PROJECTS_GAMEDEV = [
    {
        name: "FlippyKnife",
        description: "description",
        link:"",
        //imgSrc: require("assets/img/projects/").default,
        vidSrc : ""
    },
    {
        name: "John Lemon's Haunted Jaunt 3D Beginner",
        description: "description",
        link:"",
        //imgSrc: require("assets/img/projects/").default,
        vidSrc : ""
    },
    {
        name: "When Pigs Fly",
        description: "description",
        link:"",
        //imgSrc: require("assets/img/projects/").default,
        vidSrc : ""
    },
]

const PROJECTS_GAMEJAM = [
    {
        name: "Dash Mania",
        description: "description",
        link:"",
        //imgSrc: require("assets/img/projects/").default,
        vidSrc : ""
    },
]


const PROJECTS_VR = [
    {
        name: "XR Explorations Project",
        description: "description",
        link:"",
        //imgSrc: require("assets/img/projects/").default,
        vidSrc : ""
    },
]

const PROJECTS_OTHER = [
    {
        name: "Python Face Detection",
        description: "description",
        link:"",
        //imgSrc: require("assets/img/projects/").default,
        vidSrc : ""
    },
    {
        name: "Ticket Booth",
        description: "description",
        link:"",
        //imgSrc: require("assets/img/projects/").default,
        vidSrc : ""
    },
]


const PROJECTS = {
    "web": PROJECTS_WEB,
    "gamedev": PROJECTS_GAMEDEV,
    "gamejam": PROJECTS_GAMEJAM,
    "vr": PROJECTS_VR,
    "other": PROJECTS_OTHER,
}

export default PROJECTS;