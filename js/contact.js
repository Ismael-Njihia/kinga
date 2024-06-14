document.getElementById('submitBtn').addEventListener('click', async function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Subject:', subject);
    console.log('Phone:', phone);
    console.log('Message:', message);

    // Show the spinner
    document.getElementById('spinner').style.display = 'block';

    try {
        const response = await fetch('https://kinga-wellness.onrender.com/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ fullName: name, email, topic: subject, phone, message })
        });

        console.log(response);
        if (response.ok) {
            alert('Message sent successfully');
            window.location.href = 'confirmation.html';
        } else {
            const data = await response.json();
            alert('An error occurred: ' + data.Message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while sending the message.');
    } finally {
        // Hide the spinner
        document.getElementById('spinner').style.display = 'none';
    }
});
