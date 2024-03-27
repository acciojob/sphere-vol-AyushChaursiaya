// script.js
document.getElementById("MyForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Call the volume_sphere function when the form is submitted
    volume_sphere();
});

function volume_sphere() {
    // Retrieve the radius value entered by the user
    const radiusInput = document.getElementById("radius").value;

    // Convert the radius input to a floating point number
    const radius = parseFloat(radiusInput);

    // Check if the radius is a valid number and non-negative
    if (!isNaN(radius) && radius >= 0) {
        // Calculate the volume of the sphere using the formula V = (4/3) * π * r^3
        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

        // Round the volume to four decimal places
        const roundedVolume = volume.toFixed(4);

        // Display the calculated volume in the designated output field
        document.getElementById("volume").value = roundedVolume;
    } else {
        // If input is not valid, display 'NaN' in the output field
        document.getElementById("volume").value = 'NaN';
    }
}


window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
