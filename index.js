const starsEl = document.querySelectorAll(".fa-star") //array for stars
const emojisEl = document.querySelectorAll(".far"); //array for all emojis
const colorsArray = ["red", "orange", "lightblue", "lightgreen", "green"];

updateRating(0); //so that the default emoji is red color when we once visit the website.

starsEl.forEach((starEl,index) => {
    starEl.addEventListener("click", ()=>{ 
        updateRating(index); //can check using console.log(index) to check which index is clicked once we tried to see at webpage (console at developwer tools).
    });
});

function updateRating(index) {
    starsEl.forEach((starEl, idx)=>{
        if(idx < index + 1){
            starEl.classList.add("active");
        } else{
            starEl.classList.remove("active");
        }
    });

emojisEl.forEach((emojiEl)=>{
    emojiEl.style.transform = `translateX(-${index * 50}px)`; //will transform to second element of emoji once clicked 2 stars
    emojiEl.style.color = colorsArray[index];
});

}