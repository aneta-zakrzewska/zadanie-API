const btn = document.querySelector("button");
const imgDiv = document.querySelector(".images");
const URL = "https://picsum.photos/v2/list?limit=9";

function showImages() {
    fetch(URL)
	.then(res => res.json())
        .then(data => {
   		data.map(image => {
        	const img = document.createElement("img");
       		imgDiv.appendChild(img);
       		img.setAttribute("src", image.download_url);
    })
})
	.catch(err => console.error(err));
}

btn.addEventListener("click", () => {
	btn.style.display = "none";
    	imgDiv.style.display = "visible";
   	showImages()
});


