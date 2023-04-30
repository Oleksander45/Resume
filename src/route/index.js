// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})
// ================================================================
var header={
  name:{
    firstname:`Oleksander`,
    secondname:`Shevtsov`,
},
    position: "Junior Fullstack JS Developer",
    salary:"600$",
    adress:"Ukraine Dnipro",
};

var footer = {
  social:{
    email: {
      href:"mailto:dmytro@mail.com",
      text: "dmytro@gmail.com",},
    phone: {
      href:"tel:+380670000123",
      text :"+380670000123",
    },
    lincendin: {
      href:"https://www.linkedin.com/in/dmytro-test",
      text :"LinkedIn",
  },
},
};

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    page:{ title: "Resume|Summary",},
    header,
    main:{
      sub:[
        {
        name:`Summary`,
        big:true,
      },
      {
        name:"Other Experience",
        big:false,
      },
    ],

       
      summary:{
        title:"Summary",
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
        work on a new project I learn the domain and try to understand the idea of the project. Good team
        player, every colleague is a friend to me.`,
      },
      experience:{
        
        title:"Other experience",
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
          tournament position, goals etc), analyzing by simple mathematics models and preparing probability
          for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },
    
       
    footer,
   
  })
})

// ================================================================
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    page:{ title: "Resume|Scills",},
    header,
    main:{
      sub:[
        {name:"All Scills", big:true,},
        {name:"My hobbies", big:false,},
    ],
     scills:[
      {name:"HTML",
      points:9,
     },
     {
      name: "Hendlebars",
      points:10,
      isPoint:10,
     },
     {
      name:"Git",
      points:9,
     },
     {
      name:"VSCode",
      points:7,
     },
     {
      name:"Terminal",
      points:4,
     },
     
     {
      name:"React.js",
      points:0,
     },
     {
      name:"PHP",
      points:null,
     },
     
      
     
    ],
    hobbies:[
      {
      name:"HTML",
      isMain:true,
     },
     {
      name:"Hand@made from wood",
      isMain:false,
     },
     {
      name:"Bike",
      isMain:false,
     },
      
     
    ],
  },
        
    footer,
    
  
    
  })
})
// ================================================================
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    page:{ title: "Resume|Education",},
    header,


    main:{
      sub:[
        {
        name:"My Education",
        big:true,
      },
      {
        name:"My certificatens",
        big:false,
      },
    ],
      educations: [
        {
          name:  "School 23",
          isEnd: true,         
         },
        {
          name:  "DGU",
          isEnd: true,         
         },
         {
          name:  "IT Brains",
          isEnd: false,         
         },
        
      ],
      certificate: [
        {
          name: "Certificate",
          id: 456855,         
         },
        {
          name:  "Diplom",
          id: 5555,           
         },
         {
          name:  "Certificate",
          id: null,           
         },
        
      ],
  },
    
    footer,

   
    
  
    
  })
  

  
})
// ================================================================
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    layout:"big",
    page:{ title: "Resume|Work",},
    header,
    main:{
      
      sub:[
        {name:"Work History", big:true,},
        {name:"My hobbies", big:false,},
    ],
      work:[{
        position:"Junior Fullstack JS Developer",
        company:{
          name: "IT Brains",
          url: null,
        },
        during:{
          from:"10.10.10",
          to:"20.20.20",
        },
        projectAmmount:3,
        projects:[
        {
          name:"Resume",
          url:"https://it-brains.com.ua/practicum/",
          about:"About me",
          stacksAmmount:5,
          stacks:[{
            name:"React.js",
            },
            {
            name:"Node,js"
          },],
          awardsAmmount:6,
          awards:[{
            name:"Diplom",
            },
            {
              name:"Super Diplm",  
              },
          ],
        },
        ],

      },
      {
        position:"Junior Fullstack JS Developer",
        company:{
          name: "SoftServe",
          url: "https://it-brains.com.ua/practicum/",
        },
        during:{
          from:"10.10.10",
          to: null,
        },
        projectAmmount:10,
        projects:[
        {
          name:"Uinshy JHjg",
          url:"https://it-brains.com.ua/practicum/",
          about:"HTML",
          stacksAmmount:22,
          stacks:[{
            name:"React.js",
            },
            {
            name:"Node,js"
          },],
          awardsAmmount:15,
          awards:[{
            name:"Diplom",
            },
            {
              name:"Super Diplm",  
              },
          ],
        },
      ],
      },   
      
  ],  
},
    footer,  
  
  })  
  
})
// ================================================================

router.get('/person', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('person', {
    layout:"person",
    page:{ title: "Resume|Person",},
    person: {
      name: 'Emma Johnson',
      age: 32,
      gender: 'Female',
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA',
      },
      education: [
        {
          degree: 'Bachelor of Science',
          major: 'Computer Science',
          university:
            'Massachusetts Institute of Technology',
          graduationYear: 2012,
        },
      ],
      workExperience: [
        {
          company: 'Google',
          title: 'Software Engineer',
          startDate: '2012-06-01',
          endDate: '2016-12-31',
          responsibilities: [
            'Developed new features for Google Maps',
            'Worked on improving search algorithms',
          ],
          year_founded: 1990,
          industry: 'Technology',
          employees: [
            {
              name: 'John Smith',
              position: 'CEO',
              department: 'Executive',
              projects: [
                {
                  name: 'Project Alpha',
                  description:
                    'Developing new software platform',
                  status: 'In Progress',
                  teams: [
                    {
                      team_name: 'Awesome Team',
                      team_leader: {
                        name: 'John Smith',
                        title: 'Team Leader',
                        email: 'john.smith@example.com',
                      },
                      team_members: [
                        {
                          name: 'Alice Johnson',
                          title: 'Software Engineer',
                          email:
                            'alice.johnson@example.com',
                          skills: ['Java', 'Python', 'SQL'],
                          projects: [
                            {
                              name: 'Project A',
                              description:
                                'Lorem ipsum dolor sit amet',
                              technologies: [
                                'Java',
                                'Spring Framework',
                              ],
                              team_members: [
                                {
                                  name: 'Bob Lee',
                                  title:
                                    'Software Engineer',
                                },
                                {
                                  name: 'Cindy Chen',
                                  title: 'UI Designer',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  })
})
// ================================================================
router.get('/bio', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('bio', {
    layout:"bio",
    page:{ title: "Resume|Bio",},
    name: 'Albert Einstein',
    birthdate: 'March 14, 1879',
    birthplace:
      'Ulm, Kingdom of Württemberg, German Empire',
    deathdate: 'April 18, 1955',
    deathplace: 'Princeton, New Jersey, United States',
    nationality: 'Swiss, German, American',
    occupation: 'Theoretical Physicist',
    known_for: [
      'Theory of Relativity',
      'E=mc²',
      'Photoelectric Effect',
      'Brownian Motion',
    ],
    education: [
      {
        degree: 'Doctor of Philosophy',
        field: 'Physics',
        institution: 'University of Zurich',
        year: 1905,
      },
    ],
    notable_publications: [
      {
        title: 'On the Electrodynamics of Moving Bodies',
        year: 1905,
        publisher: 'Annalen der Physik',
      },
      {
        title:
          'Does the Inertia of a Body Depend Upon Its Energy Content?',
        year: 1905,
        publisher: 'Annalen der Physik',
      },
    ],
    partners: [
      {
        name: 'Mileva Marić',
        relationship: 'First wife',
        years: '1903-1919',
      },
      {
        name: 'Elsa Einstein',
        relationship:
          "Second wife, also Einstein's first cousin",
        years: '1919-1936',
      },
    ],
    awards: [
      {
        title: 'Nobel Prize in Physics',
        year: 1921,
        description:
          'Awarded for his explanation of the photoelectric effect',
      },
    ],
    influences: [
      'Isaac Newton',
      'James Clerk Maxwell',
      'Hermann Minkowski',
    ],
    influenced: [
      'Niels Bohr',
      'Erwin Schrödinger',
      'Werner Heisenberg',
      'Richard Feynman',
    ],
    quotes: [
      'Imagination is more important than knowledge.',
      'I have no special talent. I am only passionately curious.',
      'The important thing is not to stop questioning.',
      'The most beautiful thing we can experience is the mysterious. It is the source of all true art and all science.',
    ],
    major_discoveries: [
      {
        title: 'Photoelectric Effect',
        year: 1905,
        description:
          'Einstein explained the photoelectric effect, where electrons are emitted from a metal surface when it is illuminated by light.',
      },
    ],
    contributions: {
      title: 'Inventions',
      description:
        'Leonardo designed and invented a wide variety of machines and devices, including a helicopter, a diving suit, and a self-propelled cart. Many of his inventions were centuries ahead of their time.',
      year: 'Late 15th to early 16th century',
      field: 'Invention',
    },
  })
})



// Підключаємо роутер до бек-енду
module.exports = router
