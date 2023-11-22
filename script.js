let courseList = ["HTML", "CSS", "JS", "BOOTSTRAP", "REACT", "ANGULAR", "PYTHON", "JAVA", "CPP", "C", "JQUERY", "MYSQL", "SQL", "EXCEL", "DJANGO", "NODEJS", "MONGODB", "R","Kotlin","Node.js", "React", "JSON", "Vue", "MySQL", "XML", "Sass", "Icons", "RWD", "Graphics", "SVG", "Canvas", "RaspberryPi", "Cyber Security", "Colors", "Git", "Matplotlib", "NumPy", "Pandas", "Scipy", "ASP", "Angular Js",]


let courseBar = document.getElementById("CourseBar")
let header = document.getElementById("Header")

for (let i of courseList) {
    let item = document.createElement("a");
    item.innerText = i;
    // item.classList.add = "course-item";
    
    courseBar.appendChild(item)
    // console.log(item)

}

// course cards

let cardDetails = [
    {
        heading: "PHP",
        para: "A web server programming language",
        bacolo: "#FFC0C7"
    },
    {
        heading: "JQuery",
        para: "A JS library for developing web pages",
        bacolo: "#FFF4A3"
    },
    {
        heading: "Java",
        para: "A programming language",
        bacolo: "#F3ECEA"
    },
    {
        heading: "C++",
        para: "A programming language",
        bacolo: "#D9EEE1"
    },
    {
        heading: "W3.CSS",
        para: "A css framework for faster and better responsive webpages",
        bacolo: "#96D4D4"
    },
    {
        heading: "Bootstrap",
        para: "A css framework for designing better web pages",
        bacolo: "#E7E9EB"
    },
]

let courseCards = document.getElementById("courseCards");

for(let item of cardDetails) {
    let card = document.createElement("div")
    card.classList.add("course-card-item")
    card.style.backgroundColor = item.bacolo
    
    let headingNode = document.createElement("h2")
    headingNode.textContent = item.heading
    // console.log(typeof(headingNode))

    let paraNode = document.createElement("p")
    paraNode.textContent = item.para

    let but = document.createElement("button")
    but.classList.add("btn")
    but.textContent = "Learn " + item.heading

    card.appendChild(headingNode)
    card.appendChild(paraNode)
    card.appendChild(but)
    // console.log(card.innerHTML)

    courseCards.appendChild(card)
}

const otherCourses = document.getElementById("otherCourses")

const otherCoursesList = ["R","Kotlin","Node.js", "React", "JSON", "Vue", "MySQL", "XML", "Sass", "Icons", "RWD", "Graphics", "SVG", "Canvas", "RaspberryPi", "Cyber Security", "Colors", "Git", "Matplotlib", "NumPy", "Pandas", "Scipy", "ASP", "Angular Js", "AppML", "Go", "TypeScript", "DJango", "MongoDB", "Statistics", "Data Science", "Typing Speed", "HowTo", "Code Game", "Spaces", "PostgreSQL"];

const colors = ["F3ECEA", "FFF4A3", "FFC0C7", "96D4D4", "D9EEE1"]


for(let item of otherCoursesList) {
    let card = document.createElement("div")
    card.classList.add("card")
    card.textContent = item

    const rand = Math.floor(Math.random() * colors.length);
    card.style.backgroundColor = "#" + colors[rand]

    otherCourses.appendChild(card)
}

// footer nav links

const footerContainer = document.getElementsByClassName("footer-links-container")[0]

const navLinksObj = [
    {
        h4 : "",
        lis :"\n  Top Tutorials\n  HTML Tutorial\n  CSS Tutorial\n  JavaScript Tutorial\n  How To Tutorial\n  SQL Tutorial\n  Python Tutorial\n  W3.CSS Tutorial\n  Bootstrap Tutorial\n  PHP Tutorial\n  Java Tutorial\n  C++ Tutorial\n  jQuery Tutorial\n".split("\n  ")
    },

    {
        h4 : "",
        lis : "\n  Top References\n  HTML Reference\n  CSS Reference\n  JavaScript Reference\n  SQL Reference\n  Python Reference\n  W3.CSS Reference\n  Bootstrap Reference\n  PHP Reference\n  HTML Colors\n  Java Reference\n  Angular Reference\n  jQuery Reference\n".split("\n  ")
    },
    {
        h4 : "",
        lis : "\n  Top Examples\n  HTML Examples\n  CSS Examples\n  JavaScript Examples\n  How To Examples\n  SQL Examples\n  Python Examples\n  W3.CSS Examples\n  Bootstrap Examples\n  PHP Examples\n  Java Examples\n  XML Examples\n  jQuery Examples\n".split("\n  ")
    },
    {
        h4 : "",
        lis : "\n  Get Certified\n  HTML Certificate\n  CSS Certificate\n  JavaScript Certificate\n  Front End Certificate\n  SQL Certificate\n  Python Certificate\n  PHP Certificate\n  jQuery Certificate\n  Java Certificate\n  C++ Certificate\n  C# Certificate\n  XML Certificate\n".split("\n  ")
    },
]

for (let i of navLinksObj) {
    let containerItem = document.createElement("div")
    let h4Ele = document.createElement("h4")
    h4Ele.textContent = i.lis[1]

    let ulList = document.createElement("ul")
    
    i.lis.forEach((e, index)=>{
        // console.log(e, index)
        if (index === 0 || index === 1) return;

        let li = document.createElement("li")
        li.textContent = e

        ulList.appendChild(li)
    })

    containerItem.appendChild(h4Ele)
    containerItem.appendChild(ulList)

    footerContainer.appendChild(containerItem)
}