const imageInput = document.getElementById("imageInput");
const preview = document.getElementById("preview");
const generateButton = document.getElementById("generateButton");


// Show uploaded image
imageInput.addEventListener("change", function () {

  const file = this.files[0];

  if (!file) {
    return;
  }

  const imageURL = URL.createObjectURL(file);

  preview.src = imageURL;
  preview.style.display = "block";

});


// Generate button
generateButton.addEventListener("click", function () {

  if (!imageInput.files.length) {

    alert("Please upload an image first.");

    return;
  }

  alert(
    "MotionFrame AI is ready!\n\n" +
    "AI video generation will be connected in the next step."
  );

});
