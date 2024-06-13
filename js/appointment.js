document.getElementById('submitBtn').addEventListener('click', async function(event) {
    event.preventDefault(); // Prevent the default link behavior

    const fullName = document.getElementById('name').value;
    const phoneNumber = document.getElementById('phone').value;
    const day = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const message = document.getElementById('message').value;

    console.log(message, "received!");

    // Show the spinner
    document.getElementById('spinner').style.display = 'block';

    try {
        const response = await fetch('http://localhost:5000/api/booking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ fullName, phoneNumber, day, time, Message: message })
        });

        const data = await response.json();
        console.log(response);
        console.log(data);
        if (response.ok) {
            alert('Booking submitted successfully!');
            // Navigate to ./confirmation.html
            window.location.href = 'confirmation.html';
        } else {
            alert('Error: ' + data.Message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while submitting the booking.');
    } finally {
        // Hide the spinner
        document.getElementById('spinner').style.display = 'none';
    }
});
