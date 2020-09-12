var modalInfo = {
  1: {
    title: "Kanye West Music Generation",
    info: "A Deep Learning Project that uses Recurrent Neural Networks to produce artificial music based on Kanye West melodies.",
    link: "https://v4lakers.github.io/kanyeWestMusicGeneration/"
  },
  2: {
    title: "Project 2",
    info: "...",
    link: "#",
  },
  3: {
    title: "Project 3",
    info: "...",
    link: "#",

  },
  4: {
    title: "Project 4",
    info: "....",
    link: "#",

  },
  5: {
    title: "Project 5",
    info: "...",
    link: "#",

  },
  6: {
    title: "Project 6",
    info: "...",
    link: "#",

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