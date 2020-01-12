
// New education article

function addEducation() {
    let num = $('.education-article').length;
    let article;
    switch(document.getElementsByTagName("input")[0].value){
        case "en":
            article = '<div class="education-article"><img class="close" onclick="rmArticle(this)" src="images/close.svg"/> <span class="red"> School name: </span> <br/> <input type="text" name="education['+num+'][schoolname]" value=""> <br/> <span class="red"> Degree: </span> <br/> <input type="text" name="education['+num+'][degree]" value=""> <br/> <span class="red"> Description </span> <br/> <textarea name="education['+num+'][description]" class="large-input" rows="7"></textarea><br/> <span class="red"> Date in </span> <br/> <input type="date" name="education['+num+'][datein]" value=""> <br/> <span class="red"> Date out </span> <br/> <input type="date" name="education['+num+'][dateout]" value=""> <br/><br/><br/></div>';
        break;
        case "es":
            article = '<div class="education-article"><img class="close" onclick="rmArticle(this)" src="images/close.svg"/> <span class="red"> Centro de estudios </span> <br/> <input type="text" name="education['+num+'][schoolname]" value=""> <br/> <span class="red"> Titulación </span> <br/> <input type="text" name="education['+num+'][degree]" value=""> <br/> <span class="red"> Descripción </span> <br/> <textarea name="education['+num+'][description]" class="large-input" rows="7"></textarea><br/> <span class="red"> Fecha de inicio </span> <br/> <input type="date" name="education['+num+'][datein]" value=""> <br/> <span class="red"> Fecha de finalización </span> <br/> <input type="date" name="education['+num+'][dateout]" value=""> <br/><br/><br/></div>';
        break;
    }
    $('#education').append(article);
}

//  New experience article

function addExperience() {
    let num = $('.experience-article').length;
    let article;
    switch(document.getElementsByTagName("input")[0].value){
        case "en":
            article = '<div class="experience-article"><img class="close" onclick="rmArticle(this)" src="images/close.svg"/><span class="red"> Position </span> <br/> <input type="text" name="experience['+num+'][position]" value=""> <br/> <span class="red"> Company name </span> <br/> <input type="text" name="experience['+num+'][companyname]" value=""> <br/> <span class="red"> Description </span> <br/> <textarea name="experience['+num+'][description]" class="large-input" rows="7"></textarea> <br/> <span class="red"> Date in </span> <br/> <input type="date" name="experience['+num+'][datein]" value=""> <br/> <span class="red"> Date out </span> <br/> <input type="date" name="experience['+num+'][dateout]" value=""> <br/><br/><br/></div> ';
        break;
        case "es":
            article = '<div class="experience-article"><img class="close" onclick="rmArticle(this)" src="images/close.svg"/><span class="red"> Puesto </span> <br/> <input type="text" name="experience['+num+'][position]" value=""> <br/> <span class="red"> Empresa </span> <br/> <input type="text" name="experience['+num+'][companyname]" value=""> <br/> <span class="red"> Descripción </span> <br/> <textarea name="experience['+num+'][description]" class="large-input" rows="7"></textarea> <br/> <span class="red"> Fecha de inicio </span> <br/> <input type="date" name="experience['+num+'][datein]" value=""> <br/> <span class="red"> Fecha de finalización </span> <br/> <input type="date" name="experience['+num+'][dateout]" value=""> <br/><br/><br/></div> ';
        break;

    }
    $('#experience').append(article);
}

// Remove added article

function rmArticle(article) {
    article.parentNode.parentNode.removeChild(article.parentNode);
}

// Show download modal

function download() {
    let preMessage;
    let postMessage;
    switch(document.getElementsByTagName("input")[0].value){
        case "en":
            preMessage = "Your download is starting";
            postMessage = "Downloaded. Files are ready to be deployed in your server.";
        break;
        case "es":
            preMessage = "Comenzando la descarga";
            postMessage = "Descargado. Los archivos están listos para ser desplegados en su servidor.";
        break;
    }
    document.getElementById("download-text").innerHTML = preMessage;
    document.getElementById("spinner").style.display="inline-block";
    document.getElementById("response").style.display="block";
    setTimeout(function(){
        document.getElementById("spinner").style.display="none";
        document.getElementById("download-text").innerHTML = postMessage;
    }, 3000);
}

// Close download modal

function clickOut(){
    document.getElementById("response").style.display="none";
}

// Language selection and page translations

function language(lang){
    switch(lang) {
        case "es":
                // Spanish translations
            let esPage = "Generador de perfiles";
            let esTitles = ["Información personal","Redes sociales","Experiencia","Formación"];
            let esSpans = ["Nombre","Apellidos","Dirección","Ciudad","Teléfono","Correo electrónico","Biografía","Imagen","LinkedIn","GitHub","Twitter","Facebook"];
            let esButtons = ["Color","Generar","Borrar"];
            // Translate page titles
            document.getElementsByTagName("h1")[0].innerHTML = esPage;
            document.title = esPage;
            // Translate form titles
            for (let i = 0; i < document.getElementsByTagName("h4").length; i++) {
                document.getElementsByTagName("h4")[i].innerHTML = esTitles[i];
            }
            // Translate spans
            for (let i = 0; i < document.getElementsByTagName("span").length; i++) {
                document.getElementsByTagName("span")[i].innerHTML = esSpans[i];
            }
            // Translate buttons
            for (let i = 0; i < document.getElementsByTagName("button").length; i++) {
                document.getElementsByTagName("button")[i].innerHTML = esButtons[i];
            }
        break;
        // English as default language
    }

    document.getElementsByTagName("input")[0].value = lang;
    document.getElementById("language").style.display="none";
}