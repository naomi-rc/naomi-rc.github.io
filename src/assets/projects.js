
/*{
    name: "",
    description: "",
    link:"",
    imgSrc: require("assets/img/projects/comingsoon_placeholder.png").default,
    vidSrc : "",
        demoUrl: "",
        github: "",
        category:""
  },*/

const PROJECTS = [   
    {
        name: "Cartoon Character Quiz",
        description: "Part of a 2021 hackathon with Mintbean and StepZen using GraphQL, The Cartoon Character Quiz is a game where you guess the cartoon character's name.",
        imgSrc: require("assets/img/projects/cartoon-character-quiz_demo_image.png").default,
        vidSrc : "",
        demoUrl: "https://naomi-rc.github.io/CartoonCharacterQuiz/index.html",
        github: "https://github.com/naomi-rc/CartoonCharacterQuiz",
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
        name: "Hangman",
        description: "A simple web-based hangman game built as way to practice JavaScript. Guess the correct letters and don't let Mr. Stickman be hung!",
        imgSrc: require("assets/img/projects/hangman_demo_image.png").default,
        vidSrc : "",
        demoUrl: "https://naomi-rc.github.io/hangman/",
        github: "https://github.com/naomi-rc/hangman",
        category:"web"
    },    
    {
        name: "Don't Freeze",
        description: "Game made with as part of game development course at ÉTS. Don't Freeze is an action-survival game that takes place in a frozen and snowy apocalyptic world. You must find a way to endure and progress through each level by defending against enemies and finding equipment to improve your chances of survival.",
        imgSrc: require("assets/img/projects/dontfreeze_demo_image.png").default,
        vidSrc : "https://youtu.be/VOINw_LFlYc",
        demoUrl: "https://subzero-studios.itch.io/dont-freeze",
        github: "",
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
        name: "FlippyKnife",
        description: "Flippy Knife game done by following a Brackeys Unity tutorial. Flip the knife and get it to land on its tip.",
        imgSrc: require("assets/img/projects/flippyknife_demo_image.png").default,
        vidSrc : "https://www.youtube.com/watch?v=GSuDdkf_yiw",
        demoUrl: "",
        github: "https://github.com/naomi-rc/FlippyKnife",
        category:"gamedev"
    },
    {
        name: "Alone Together",
        description: "Game submitted for Brackey's Game Jam Fall 2022. The theme was 'You're not alone'. Help Tantan the alien find his spaceship pieces so he's not all alone! | Multiplayer platformer",
        imgSrc: require("assets/img/projects/alonetogether_demo_image.png").default,
        vidSrc : "",
        demoUrl: "https://myiahcat.itch.io/alone-together",
        github: "",
        category:"gamedev"
    },
    {
        name: "Spooky Tropics Resort",
        description: "An 2D platformer submitted as an entry to CoCo Jam 2021. Guide the ghosts to their hotel rooms. Make sure to follow the right direction and avoid the monsters!",
        imgSrc: require("assets/img/projects/spookytropicsresort_demo_image.png").default,
        vidSrc : "",
        demoUrl: "https://mistalounge.itch.io/spooky-tropics-resort",
        github: "",
        category:"gamedev"
    },
    {
        name: "Dash Mania",
        description: "Basic Unity game from Brackeys tutorial submitted as an entry in Brackey's Game Jam 2021",
        imgSrc: require("assets/img/projects/dashmania_demo_image.png").default,
        vidSrc : "",
        demoUrl: "https://naomi-rc.github.io/DashManiaDemo/",
        github: "https://github.com/naomi-rc/DashMania",
        category:"gamedev"
    },
    {
        name: "Verse Invaders",
        description: "Game made with Conjure ÉTS for the Creative jam 20, May 2022. Invaders are attacking the multiverse! They want to destroy the world and are attacking three universes at the same time. Defend them and use the the invaders' scraps to upgrade your cannon. ",
        imgSrc: require("assets/img/projects/verseinvaders_demo_image.png").default,
        vidSrc : "",
        demoUrl: "https://conjure.itch.io/verse-invaders",
        github: "",
        category:"gamedev"
    },
    {
        name: "VRt Gallery",
        description: "An art gallery that can be explored in VR. All of the art seen in the demo video was made by Myiah Catwell, Elizabeth Catwell and Naomi Catwell.",
        imgSrc: require("assets/img/projects/vrtgallery_demo_image.png").default,
        vidSrc : "https://youtu.be/G32oqbJjtHA",
        demoUrl: "",
        github: "",
        category:"xr"
    },
    {
        name: "XR Explorations Project",
        description: "A first dive into VR with the Oculus Quest and Unity. The basic scene includes an XR rig, a table and three colored blocks with which to interact. Movement in teleportation-based.",
        imgSrc: require("assets/img/projects/comingsoon_placeholder.png").default,
        vidSrc : "",
        demoUrl: "",
        github: "https://github.com/naomi-rc/XR-Explorations-Project",
        category:"xr"
    },    
    {
        name: "Fluid Particle Simulation",
        description: "A fluid simulation implemented in C++ based on the methods proposed in « Position Based Fluids » (2013), Macklin and Mueller.",
        imgSrc: require("assets/img/projects/fluidsim_demo_image.gif").default,
        vidSrc : "https://youtu.be/URoKkgDm3kw",
        demoUrl: "",
        github: "",
        category:"misc"
    },
    {
        name: "3D Cloth Particle Simulation",
        description: "Cloth simulation is one of the most frequent types of simulation in video game. It's often used for adding realism to character movement. This cloth simulation implements four numerical integration techniques in C++: Explcit Euler, Midpoint, Semi-Implicit Euler and Implicit Euler.",
        imgSrc: require("assets/img/projects/clothsimulation3d_demo_image.gif").default,
        vidSrc : "https://youtu.be/25KfnlsudeQ",
        demoUrl: "",
        github: "",
        category:"misc"
    },
    {
        name: "Blender Humanoid Rigging",
        description: "A rigging and animation tutorial project done in Blender. The rigging in this demo was done from scratch. Rigging and animation for quadrupeds used in the game development project Don't Freeze was done using Rigify and Rigify Animbox.",
        imgSrc: require("assets/img/projects/humanoidrigging_demo_image.png").default,
        vidSrc : "https://youtu.be/FKCZfw2ZnUw",
        demoUrl: "",
        github: "",
        category:"misc"
    },
    {
        name: "A* AI Agent Unity Demo",
        description: "This Unity project uses the A* algorithm AI steering to find the shortest path and navigate an agent to the target destination.",
        imgSrc: require("assets/img/projects/astarsimulation_demo_image.gif").default,
        vidSrc : "https://www.youtube.com/watch?v=l8tTwz22en0&ab_channel=KonvenienzApps",
        demoUrl: "",
        github: "",
        category:"misc"
    },
    {
        name: "Python Face Detection",
        description: "Traditional Face Detection With Python course from Real Python using Miniconda and AdaBoostin GitPod. Haar-like features are the base of the detection algorithm used in this project - the Viola-Jones algorithm. It scans an image looking for visual clues as to whether a face is present or not.",
        imgSrc: require("assets/img/projects/facedetection_demo_image.png").default,
        vidSrc : "",
        demoUrl: "",
        github: "https://github.com/naomi-rc/PythonFaceDetection",
        category:"misc"
    },
    {
        name: "Ticket Booth",
        description: "Arduino and Raspberry Pi project of a miniature ticket booth. The vehicle uses two TT DC motors and an L298N motor drive controller attached to an Arduino UNO. The ticket booth works with Raspberry PI, a SG90 micro servo motor, HC-SR04 sensor, photoresistor and nice little blue LED.",
        imgSrc: require("assets/img/projects/ticket_booth_demo_image.gif").default,
        vidSrc : "",
        demoUrl: "",
        github: "https://github.com/naomi-rc/TicketBooth",
        category:"misc"
    }   
]

export default PROJECTS;