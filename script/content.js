function addEducation() {
    let article = '<div><img class="close" onclick="rmArticle(this)" src="img/cancel-music.svg"/> <span class="rojo"> Centro de estudios: </span> <br/> <input type="text" name="centro" value=""> <br/> <span class="rojo"> Titulación: </span> <br/> <input type="text" name="titulacion" value=""> <br/> <span class="rojo"> Descripción: </span> <br/> <textarea name="descripcionformacion" class="largeinput" rows="7"></textarea><br/> <span class="rojo"> Fecha Inicio: </span> <br/> <input type="date" name="fechaInicioFormacion" value=""> <br/> <span class="rojo"> Fecha Fin: </span> <br/> <input type="date" name="fechaFinFormacion" value=""> <br/><br/><br/></div>';
    //document.getElementById('education').insertAdjacentHTML("beforebegin", article);
    //document.getElementById('education').innerHTML += article;
    $('#education').append(article);
}

function addExperience() {
    let article = '<div><img class="close" onclick="rmArticle(this)" src="img/cancel-music.svg"/><span class="rojo"> Puesto: </span> <br/> <input type="text" name="puesto" value=""> <br/> <span class="rojo"> Empresa: </span> <br/> <input type="text" name="empresa" value=""> <br/> <span class="rojo"> Descripción: </span> <br/> <textarea name="descripcion" class="largeinput" rows="7"></textarea> <br/> <span class="rojo"> Fecha Inicio: </span> <br/> <input type="date" name="fechaInicio" value=""> <br/> <span class="rojo"> Fecha Fin: </span> <br/> <input type="date" name="fechaFin" value=""> <br/><br/><br/></div> ';
    //document.getElementById('experience').insertAdjacentHTML("afterend", article);
    //document.getElementById('education').innerHTML += article;
    $('#experience').append(article);
}

function rmArticle(article) {
    //let education = document.getElementById("education");
    //let article = education.getElementsByTagName("div")[education.getElementsByTagName("div").length-1];
    article.parentNode.parentNode.removeChild(article.parentNode);
}



/*
function check(checkbox){
    if(checkbox.checked == true)
        article.parentNode.parentNode.removeChild(article.parentNode);        
}
    <input type="checkbox" onchange="check(this)" name="enCurso" id="enCurso">En curso.
*/