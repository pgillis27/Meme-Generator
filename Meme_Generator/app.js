const myForm = document.querySelector('#Form');
const results = document.querySelector('#results');
const section = document.querySelector('section');
//delete function:
section.addEventListener('click', function (e) {
  if (e.target.tagName === 'BUTTON') {
    e.target.parentElement.remove();
  }
});
//event listener for submitting Meme
myForm.addEventListener('submit', function (e) {
  e.preventDefault();
  // create empty div and image 'buckets'
  const meme = document.createElement("div");
  const textTop = document.createElement("div");
  const textBottom = document.createElement("div");
  const memeImg = document.createElement("img");
  // Take the user inputs to fill those buckets
  memeImg.src = document.getElementById("image").value;
  textBottom.innerText = document.getElementById("lowerText").value;
  textTop.innerText = document.getElementById("upperText").value;
  //add class to divs for positioning
  textBottom.classList.add('textBottom');
  textTop.classList.add('textTop');
  meme.classList.add('meme');
  //append all items now
  meme.appendChild(textTop);
  meme.appendChild(textBottom);
  meme.appendChild(memeImg);
  results.appendChild(meme);
  myForm.reset();
  const deleteBtn = document.createElement('button');
  deleteBtn.id = "remove";
  deleteBtn.innerText = 'Remove Meme';
  deleteBtn.classList = "btn";
  meme.appendChild(deleteBtn);


});











