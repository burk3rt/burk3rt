const apiUrl =
  "https://friendifyv2.azurewebsites.net/api/drei-fragezeichen?limit=180&code=Qw39cXFJF7FuwKBhqUuZ";
let spotifyUrl = "";

window.onload = () => {
  fetch(apiUrl, {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => fillApiContent(data))
    .catch((error) => {
      console.error(error);
    });
};

function fillApiContent(content) {
  console.log(content);
  const titleTag = document.getElementById("episode-title");
  const releaseTag = document.getElementById("episode-release-date");
  const image = document.getElementById("episode-img");

  titleTag.innerText = content.name;
  releaseTag.innerText = "Veröffentlicht: " + content.release_date;
  image.src = content.images[0].url;
  spotifyUrl = content.link;

  image.style.filter = "blur(0px)";
}

function openInSpotify() {
  window.open(spotifyUrl, "_blank");
}
