
// Write all JSON data on HTML file

function data(){
    $(document).ready(function(){
        $.getJSON( "data.json", function( data ){
            switch(data.lang){
                case "en": english(data);break;
                case "es": spanish(data);break;
            }
            if(data.experience.length == 0)
                for(i = 0; i < document.getElementsByClassName("display-experience").length; i++)
                    document.getElementsByClassName("display-experience")[i].style.display = "none";
            else
                experience(data);
            
            if(data.education.length == 0)
                for(i = 0; i < document.getElementsByClassName("display-education").length; i++)
                    document.getElementsByClassName("display-education")[i].style.display = "none";
            else
                education(data);
            
            social(data);
            document.documentElement.style.setProperty("--color", data.color)
            document.title = data.name + " " + data.lastname;
            document.description = data.description;
            document.getElementById("navname").innerText = data.name + " " + data.lastname;
            document.getElementById("name").innerText = data.name;
            document.getElementById("lastname").innerText = data.lastname;
            document.getElementById("address").innerText = data.address;
            document.getElementById("city").innerText = data.city;
            document.getElementById("phone").innerText = data.phone;
            document.getElementById("mail").innerText = data.mail;
            document.getElementById("description").innerText = data.description;
        });
    });
}

// Write experience section

function experience(data){
    for(i = 0; i < data.experience.length; i++)
        $('#expContent').append("<div class='resume-item d-flex flex-column flex-md-row justify-content-between mb-5'> <div class='resume-content'> <h3 class='mb-0'>" + data.experience[i].position +"</h3> <div class='subheading mb-3'>" + data.experience[i].companyname +"</div><p>" + data.experience[i].description + "</p></div><div class='resume-date text-md-right'> <span class='text-primary'>" + data.experience[i].datein + " - " + data.experience[i].dateout +"</span> </div></div>");
}

// Write education section

function education(data){
    for(i = 0; i < data.education.length; i++)
        $('#eduContent').append("<div class='resume-item d-flex flex-column flex-md-row justify-content-between mb-5'> <div class='resume-content'> <h3 class='mb-0'>"+data.education[i].schoolname+"</h3> <div class='subheading mb-3'>"+data.education[i].degree+"</div><div>"+data.education[i].description+"</div></div><div class='resume-date text-md-right'> <span class='text-primary'>"+data.education[i].datein+' - '+data.education[i].dateout+"</span> </div>");
}

// Write social networks section

function social(data){
    if(data.social.linkedin == "")
        document.getElementById("linkedin").style.display = "none";
    else
        document.getElementById("linkedin").href = data.social.linkedin;
    if(data.social.github == "")
        document.getElementById("github").style.display = "none";
    else
        document.getElementById("github").href = data.social.github;
    if(data.social.twitter == "")
        document.getElementById("twitter").style.display = "none";
    else
        document.getElementById("twitter").href = data.social.twitter;
    if(data.social.facebook == "")
        document.getElementById("facebook").style.display = "none";
    else
        document.getElementById("facebook").href = data.social.facebook;
}

// Languages translations

function english(data){
    document.getElementsByClassName("nav1")[0].textContent = "About";
    document.getElementsByClassName("nav2")[0].textContent = "Experience";
    document.getElementsByClassName("nav2")[1].textContent = "Experience";
    document.getElementsByClassName("nav3")[0].textContent = "Education";
    document.getElementsByClassName("nav3")[1].textContent = "Education";
}
function spanish(data){
    document.getElementsByClassName("nav1")[0].textContent = "Sobre mí";
    document.getElementsByClassName("nav2")[0].textContent = "Experiencia";
    document.getElementsByClassName("nav2")[1].textContent = "Experiencia";
    document.getElementsByClassName("nav3")[0].textContent = "Formación";
    document.getElementsByClassName("nav3")[1].textContent = "Formación";
}
