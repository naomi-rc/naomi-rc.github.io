
/*{
    name: "",
    description: "",
    link:"",
    imgSrc: require("assets/img/projects/"",
    vidSrc : "",
        demoUrl: "",
        github: "",
        category:""
  },*/

const PROJECTS = [   
    {
        name: "Cartoon Character Quiz",
        description: "Part of a 2021 hackathon with Mintbean and StepZen using #GraphQL, The Cartoon Character Quiz is a game where you guess the cartoon character's name.",
        imgSrc: require("assets/img/projects/cartoon-character-quiz_demo_image.png").default,
        vidSrc : "",
        demoUrl: "https://naomi-rc.github.io/CartoonCharacterQuiz/index.html",
        github: "https://github.com/naomi-rc/CartoonCharacterQuiz",
        category:"web"
    },
    {
        name: "Hangman",
        description: "A simple web-based hangman game built as way to practice JavaScript. Guess the correct letters and don't let Mr. Stickman be hung!",
        imgSrc: require("assets/img/projects/hangman_demo_image.png").default,
        vidSrc : "",
        demoUrl: "https://naomi-rc.github.io/hangman/",
        github: "https://github.com/naomi-rc/hangman",
        category:"web"
    },
    {
        name: "proDUCKtive",
        description: "proDUCKtive is a chrome extension rubber duck for debugging that helps you solve tough problems by offering simple solutions and reminders that will set you on the right track.",
        imgSrc: require("assets/img/projects/producktive_demo_image.png").default,
        vidSrc : "",
        demoUrl: "https://chrome.google.com/webstore/detail/producktive-rubber-duck-h/ihoaoofehlfpgfnnnhhhleebkjmflhke",
        github: "https://github.com/naomi-rc/proDUCKtive-chrome-extension",
        category:"web"
    },
    {
        name: "Twenty-One",
        description: "A web-based game of Twenty-One (or Black Jack). Play against three other computer players.",
        imgSrc: require("assets/img/projects/twenty-one_demo_image.png").default,
        vidSrc : "",
        demoUrl: "https://naomi-rc.github.io/twenty-one/",
        github: "https://github.com/naomi-rc/twenty-one",
        category:"web"
    },
    {
        name: "FlippyKnife",
        description: "Flippy Knife game done by following a Brackeys Unity tutorial. Flip the knife and get it to land on its tip.",
        imgSrc: require("assets/img/projects/flippyknife_demo_image.png").default,
        vidSrc : "https://www.youtube.com/watch?v=GSuDdkf_yiw",
        demoUrl: "",
        github: "https://github.com/naomi-rc/FlippyKnife",
        category:"gamedev"
    },
    {
        name: "John Lemon's Haunted Jaunt 3D Beginner",
        description: "John Lemon's Haunted Jaunt 3D Beginner from Unity Learn Tutorial. Added features include switching camera POV between first and third person, collecting keys to escape, score board and a playful menu screen.",
        imgSrc: require("assets/img/projects/hauntedjaunt_demo_image.png").default,
        vidSrc : "",
        demoUrl: "",
        github: "https://github.com/naomi-rc/John-Lemon-s-Haunted-Jaunt-3D-Beginner/tree/main/John%20Lemon%20Hauted%20Jaunt",
        category:"gamedev"
    },
    {
        name: "When Pigs Fly",
        description: "A remake of Funbrain's When Pigs Fly game made with Unity. Bouce on clouds all the way to the top while eating your fruits and vegetables.",
        imgSrc: require("assets/img/projects/comingsoon_placeholder.png").default,
        vidSrc : "",
        demoUrl: "",
        github: "https://github.com/naomi-rc/When-Pigs-Fly",
        category:"gamedev"
    },
    {
        name: "Dash Mania",
        description: "Basic Unity game from Brackeys tutorial submitted as an entry in Brackey's Game Jam 2021",
        imgSrc: require("assets/img/projects/twenty-one_demo_image.png").default,
        vidSrc : "",
        demoUrl: "https://naomi-rc.github.io/DashManiaDemo/",
        github: "https://github.com/naomi-rc/DashMania",
        category:"gamejam"
    },
    {
        name: "Spooky Tropics Resort",
        description: "An 2D platformer submitted as an entry to CoCo Jam 2021. Guide the ghosts to their hotel rooms. Make sure to follow the right direction and avoid the monsters!",
        imgSrc: require("assets/img/projects/spookytropicsresort_demo_image.png").default,
        vidSrc : "",
        demoUrl: "https://mistalounge.itch.io/spooky-tropics-resort",
        github: "",
        category:"gamejam"
    },
    {
        name: "XR Explorations Project",
        description: "A first dive into VR with the Oculus Quest and Unity. The basic scene includes an XR rig, a table and three colored blocks with which to interact. Movement in teleportation-based.",
        imgSrc: require("assets/img/projects/comingsoon_placeholder.png").default,
        vidSrc : "",
        demoUrl: "",
        github: "https://github.com/naomi-rc/XR-Explorations-Project",
        category:"vr"
    },
    {
        name: "VRt Gallery",
        description: "An art gallery that can be explored in VR. All of the art seen in the demo video was made by Myiah Catwell, Elizabeth Catwell and Naomi Catwell.",
        imgSrc: require("assets/img/projects/comingsoon_placeholder.png").default,
        vidSrc : "https://youtu.be/G32oqbJjtHA",
        demoUrl: "",
        github: "",
        category:"vr"
    },
    {
        name: "Python Face Detection",
        description: "Traditional Face Detection With Python course from Real Python using Miniconda and AdaBoostin GitPod. Haar-like features are the base of the detection algorithm used in this project - the Viola-Jones algorithm. It scans an image looking for visual clues as to whether a face is present or not.",
        imgSrc: require("assets/img/projects/facedetection_demo_image.png").default,
        vidSrc : "",
        demoUrl: "",
        github: "https://github.com/naomi-rc/PythonFaceDetection",
        category:"other"
    },
    {
        name: "Ticket Booth",
        description: "Arduino and Raspberry Pi project of a miniature ticket booth. The vehicle uses two TT DC motors and an L298N motor drive controller attached to an Arduino UNO. The ticket booth works with Raspberry PI, a SG90 micro servo motor, HC-SR04 sensor, photoresistor and nice little blue LED.",
        imgSrc: require("assets/img/projects/ticket_booth_demo_image.gif").default,
        vidSrc : "",
        demoUrl: "",
        github: "https://github.com/naomi-rc/TicketBooth",
        category:"other"
    },
    {
        name: "Elf",
        description: "",
        imgSrc: require("assets/img/projects/elf.gif").default,
        vidSrc : "",
        demoUrl: "",
        github: "",
        category:"art"
    },
    {
        name: "Penguin",
        description: "",
        imgSrc: require("assets/img/projects/penguin.gif").default,
        vidSrc : "",
        demoUrl: "",
        github: "",
        category:"art"
    },
    {
        name: "Pixel Wumpus (Discord's mascot)",
        description: "",
        imgSrc: require("assets/img/projects/pixel_wumpus.gif").default,
        vidSrc : "",
        demoUrl: "",
        github: "",
        category:"art"
    }
]

export default PROJECTS;