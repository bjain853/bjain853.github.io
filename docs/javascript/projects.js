
const Projects =[
    {
        name:"Proflix",
        summary:"Envisioned and developed a video streaming platform for content sourced by the user, complete with authentication and with support of up to 5 profiles per user comparable to Netflix",
        link:"https://github.com/bjain853/Proflix",
        images:[{src:"../public/media/proflix_1.png",ratio:"1.9248"},{src:"../public/media/proflix_2.png",ratio:"1.9335"},{src:"../public/media/proflix_3.png",ratio:"1.9306"},{src:"../public/media/proflix_4.png",ratio:"1.9335"}],
        techStack:["NextJS","NodeJS","ExpressJS","Material-UI","MySQL","Redis","JSON Web Tokens"]
    },
    {
        name:"Code Collab",
        summary:`Built a cloud-based code editor, which supports multiple programming languages (HTML, CSS, JavaScript)
        real-time code editing and rendering of the result aimed at making code collaboration easier. Unique feature includes an image to code convertor which employs Machine Learning algorithms to convert
        an image of code snippet to actual code.`,
        images:[{src:"../public/media/codecollab_1.png",ratio:"1.9335"},{src:"../public/media/codecollab_2.png",ratio:"1.9538"},{src:"../public/media/codecollab_3.png",ratio:"1.9538"},{src:"../public/media/codecollab_4.png",ratio:"1.9365"},{src:"../public/media/codecollab.gif",ratio:"1.7778"}],
        link:"https://github.com/bjain853/codecollab",
        techStack:["ReactJS","NodeJS","GraphQL","Express","TessaractJS","Tailwind CSS"]
    },
    {
        name:"Web Gallery",
        summary:"Created a secure image repository which focuses on providing an intuitive User Experience along with a space for users to share and comment on other users’ posts",
        images:[{src:"../public/media/webgallery_1.png",ratio:"2.0808"},{src:"../public/media/webgallery_2.png",ratio:"2.0796"},{src:"../public/media/webgallery_3.png",ratio:"1.6164"}],
        link:"https://github.com/bjain853/webgallery",
        techStack:["HTML","Javascript (ES6)","CSS3","NodeJS","Clam Scan Anti-virus"]
    },
    {
        name:"Microblog",
        summary:"A simple blog page where people can post their thoughts while also being able to comment on and like and/or dislike other user's posts",
        images:[{src:"../public/media/microblog_1.png",ratio:"1.9219"},{src:"../public/media/microblog_2.png",ratio:"1.9497"},{src:"../public/media/microblog_3.png",ratio:"2.0031"},{src:"../public/media/microblog_4.png",ratio:"2.1333"}],
        link:"https://github.com/bjain853/microblog",
        techStack:["HTML","CSS3","JavaScript","NodeJS"]
    },
    {
        name:"UImpactify MVP",
        summary:"A beautiful online course management system built for an Ed-Tech, UImpactify",
        link:"https://github.com/bjain853/UImpactify",
        images:[{src:"../public/media/UImpactify_1.png",ratio:"1.9048"},{src:"../public/media/UImpactify_2.png",ratio:"1.9248"},{src:"../public/media/UImpactify_3.png",ratio:"1.9175"},{src:"../public/media/UImpactify_4.png",ratio:"1.9632"},{src:"../public/media/UImpactify_5.png",ratio:"2.5157"},{src:"../public/media/UImpactify_6.png",ratio:"1.9048"}],
        techStack:["GatsbyJS","MongoDB","NodeJS","ExpressJS","Material UI"]
    },
];

function renderProjects(){
    let projectHTML = '';
    Projects.forEach(function(project){
        projectHTML+=`
        <div class="project-slide">
            <div class="images-slider">
            ${renderProjectImages(project.images)}
            </div>
            <div class="project-detail-container">
                <span class="project-title">
                    <a href="${project.link}" target="_blank">
                         ${project.name}
                    </a>
                </span>
                <span class="project-summary">
                    ${project.summary}
                </span>
                ${renderTechStack(project.techStack)}
            </div>  
        </div>
        `;

    });
    return projectHTML;
}

function renderTechStack(technologies){
    let techStackHTML = "";
    technologies.forEach(function(tech){
        techStackHTML +=` 
        <li>
            ${tech} 
        </li>
        `;
    });
    return `<div class="tech-stack-project">
               <span> Tech stack learnt </span>
                <ul>
                 ${techStackHTML}
                </ul>
            </div>
    `;
};


function renderProjectImages(images){
    

    let projectImages = '';
    images.forEach(function(image,idx){
        projectImages+=`
        <div id="slide-${idx}" style="flex:${image.ratio}">
        <img src="${image.src}" style="vertical-align: middle;" />
        </div>
        `;
    });

    return ` 
    <div class="glider_contain">
    <div class="glider">
         ${projectImages}
    </div>
    <div class="dots" role="tablist">
    </div>
    </div>
    `;
};


export default renderProjects;