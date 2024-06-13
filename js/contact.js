document.getElementById('submitBtn').addEventListener('click', function(event) {
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
    // Send the data to the server
    fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ fullName: name, email, topic: subject, phone, message })

    }).then(response => {
        console.log(response);
        if (response.ok) {
            alert('Message sent successfully');
            window.location.href = 'confirmation.html';
        } else {
            alert('An error occurred while sending the message');
        }
    })

});