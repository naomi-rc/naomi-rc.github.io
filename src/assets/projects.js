
/*{
    name: "",
    description: "",
    imgSrc: require("assets/img/projects/comingsoon_placeholder.png").default,
    vidSrc : "",
    demoUrl: "",
    github: "",
    category:""
  },*/

const PROJECTS = [   
    {
        name: "Mission Control",
        description: "Mission Control offers an immersive VR simulation of a rocket landing to prepare children for the MRI process, aiming to reduce the need for sedation and enhance image quality. This project won first place as part of the McGillXR NeuroVR Hackathon 2024 edition, was demoed at the Shriners Hospital for Children's Virtual Reality workshop and was accepted to the Oculus Start Program.",
        imgSrc: require("assets/img/projects/missioncontrol_demo_image.jpg").default,
        vidSrc : "https://youtu.be/_zNck3VJPx8",
        demoUrl: "",
        github: "https://github.com/J-Scan/MRIExperience",
        category:"xr"
    },
    {
        name: "VR Carnaval",
        description: "Explore an immersive world full of arcade and carnival-type games in virtual reality. There is something for everyone - ball toss, Whack-A-Mole, darts, and more! This project was built with the Conjure ÉTS virtual reality team.",
        imgSrc: require("assets/img/projects/vrcarnaval_demo_image.png").default,
        vidSrc : "https://youtu.be/36nkIa9jOaA",
        demoUrl: "https://devcat-apps.itch.io/vrcade",
        github: "",
        category:"xr"
    },
    {
        name: "VR Carnaval Haptic Glove Integration",
        description: "A haptic glove prototype based on LucasVR's haptic gloves so you can feel what you pick up and touch in virtual reality using ungrounded force feedback. The prototype is built using an ESP32 and works through SteamVR. This project was built with the Conjure ÉTS virtual reality team",
        imgSrc: require("assets/img/projects/hapticgloves_demo_image.jpg").default,
        vidSrc : "",
        demoUrl: "",
        github: "",
        category:"haptics"
    },
    {
        name: "Pedicle Screw Placement Simulator",
        description: "Pedicle screw placement is an interventional procedure that can be used for scoliosis treatment, but it also requires a lot of training. This end-of-term team project is a two-part cooperative system for the training procedure using augmented reality, 3D Slicer and an Aruco marker computer vision tracking system.",
        imgSrc: require("assets/img/projects/pediclescrew_demo_image.jpg").default,
        vidSrc : "",
        demoUrl: "",
        github: "",
        category:"xr"
    },
    {
        name: "Sky Garden",
        description: "Sky Garden is an immersive virtual reality experience of a tranquil, interactive musical garden for mental health and well-being. This was an end-of-term team project for a course on advanced user interfaces.",
        imgSrc: require("assets/img/projects/skygarden_demo_image.png").default,
        vidSrc : "https://youtu.be/6UrgteYHKFo",
        demoUrl: "",
        github: "",
        category:"xr"
    },    
    {
        name: "Haptic Needle Insertion Prototype",
        description: "My end-of-studies project focused on building a haptic model for a needle insertion simulation prototype to train medical practitioners. The prototype was built using Unity and Haply Robotic's Inverse3 haptic robot. My implementation included a custom real-time collision detection system and force models based on Alamilla et al. (2022) and Yonghang Tai et al. (2016).",
        imgSrc: require("assets/img/projects/needleproto_demo_image.gif").default,
        vidSrc : "",
        demoUrl: "",
        github: "",
        category:"haptics"
    },    
    {
        name: "HaptiHeart",
        description: "As part of the CanHaptics 501 2024 cohort, our cross-institutional team of four created a multimodal system for a stethoscope simulation to improve the learning experience of heart auscultation through haptic feedback using the Haply 2diy haptic robot and Processing.",
        imgSrc: require("assets/img/projects/haptiheart_demo_image.png").default,
        vidSrc : "https://youtu.be/5Pp0gUpgjiA",
        demoUrl: "",
        github: "https://github.com/CanHaptics-MedHapttan/StethoscopeSimulation",
        category:"haptics"
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
        name: "Alone Together",
        description: "Game submitted for Brackey's Game Jam Fall 2022. The theme was 'You're not alone'. Help Tantan the alien find his spaceship pieces so he's not all alone! | Multiplayer platformer",
        imgSrc: require("assets/img/projects/alonetogether_demo_image.png").default,
        vidSrc : "",
        demoUrl: "https://myiahcat.itch.io/alone-together",
        github: "",
        category:"gamedev"
    },
    {
        name: "Intergalactic Post Office",
        description: "You work at the intergalactic post office and must deliver the packages through the right portals before time runs out! A submission by Conjure ÉTS Virtual Reality team for the VR Jam 2023.",
        imgSrc: require("assets/img/projects/intergalacticpost_demo_image.png").default,
        vidSrc : "",
        demoUrl: "",
        github: "",
        category:"xr"
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
        name: "Spooky Tropics Resort",
        description: "An 2D platformer submitted as an entry to CoCo Jam 2021. Guide the ghosts to their hotel rooms. Make sure to follow the right direction and avoid the monsters!",
        imgSrc: require("assets/img/projects/spookytropicsresort_demo_image.png").default,
        vidSrc : "",
        demoUrl: "https://mistalounge.itch.io/spooky-tropics-resort",
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
        name: "Dash Mania",
        description: "Basic Unity game from Brackeys tutorial submitted as an entry in Brackey's Game Jam 2021",
        imgSrc: require("assets/img/projects/dashmania_demo_image.png").default,
        vidSrc : "",
        demoUrl: "https://naomi-rc.github.io/DashManiaDemo/",
        github: "https://github.com/naomi-rc/DashMania",
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
    },
    
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

]

export default PROJECTS;