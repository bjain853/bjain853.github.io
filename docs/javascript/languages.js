const Languages = [
    { lang: 'C', prof: '90%' },
    { lang: 'C++', prof: '60%' },
    { lang: 'Java', prof: '80%' },
    { lang: 'Python', prof: '75%' },
    { lang: 'JavaScript', prof: '90%' },
    { lang: 'TypeScript', prof: '60%' },
    { lang: 'CSS3', prof: '85%' },
    { lang: 'HTML5', prof: '90%' }
];

function renderLangauges(){
    let languageHTML = '';
    Languages.forEach(function(langObj) {
        languageHTML += `<li class="skill-item"> 
        <span class="language">
        ${langObj.lang}
        </span>
        <div>
        <div class="skill-bar" style="width:${langObj.prof}"></div>
      </div> 
        </li>`;
    });
    return languageHTML;
}

export default renderLangauges;