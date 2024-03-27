// script.js
function volume_sphere() {
    // Retrieve the radius value entered by the user
    var radiusInput = document.getElementById("radius").value;

    // Validate the input
    if (!isNaN(radiusInput) && radiusInput >= 0) {
        // Calculate the volume of the sphere
        var radius = parseFloat(radiusInput);
        var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

        // Round the calculated volume to four decimal places
        volume = volume.toFixed(4);

        // Display the calculated volume in the designated output field
        document.getElementById("result").value = volume;
    } else {
        // If input is not valid, display 'NaN'
        document.getElementById("result").value = 'NaN';
    }
}


window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
