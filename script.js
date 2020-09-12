var modalInfo = {
  1: {
    title: "Project 1",
    info: "A Deep Learning Project that uses Recurrent Neural Networks to produce artificial music based on Kanye West melodies.",
    link: "https://v4lakers.github.io/kanyeWestMusicGeneration/"
  },
  2: {
    title: "Project 2",
    info: "Software that allows users to build machine learning models and visualize Kobe Bryant's shooting history.",
    link: "https://github.com/v4lakers/mlkobe"
  },
  3: {
    title: "Project 3",
    info: "A project that uses various Machine Learning Models to determine which features of a dating profile helps nail that first impression.",
    link: "https://github.com/v4lakers/CS329E_team11"
  },
  4: {
    title: "Project 4",
    info: "Paper that examines the idea of a single language (the matrix language) serving as the underlying base in language switching.",
    link: "https://www.aclweb.org/anthology/W18-3208.pdf"
  },
  5: {
    title: "Project 5",
    info: "Project that uses Machine Learning and Signal Processing Tools to distinguish between artificial and authentic voice clips.",
    link: "https://github.com/v4lakers/Voice-Conversion-Detection"
  },
  6: {
    title: "Project 6",
    info: "Dashboard that gives key insight and analytics of my hiking adventures. ",
    link: "https://v4lakers.github.io/hike/"
  }
};

// Get the modal
var modal = document.getElementById('preview');

// button that opens the modal
var btn = document.getElementsByClassName("button");

// <span> that closes the modal
var span = document.getElementsByClassName("close")[0];

// open modal
for(let i = 0; i < btn.length; i++){
  btn[i].addEventListener("click", function() {
    var project = btn[i].parentElement;
    openModal(project);
  })
};

function openModal(project){
  var id = project.id;
  var img = project.getElementsByTagName("img")[0].src;
  fillOut(id, img);
  modal.style.display = "block";
  document.getElementsByClassName("modal-content")[0].classList.add("scale");
}

function fillOut(id, img){
  document.getElementById("title").innerHTML = modalInfo[id].title;
  document.getElementById("info").innerHTML = modalInfo[id].info;
  document.getElementById("img").src = img;
  document.getElementById("live").onclick = function(){
    window.open(modalInfo[id].link,'_blank');
  }

}

// close the modal
span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}