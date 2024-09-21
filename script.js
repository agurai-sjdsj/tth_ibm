document.getElementById('wishForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Encode the message for the URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create the WhatsApp link
    const whatsappLink = `https://wa.me/${phone}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappLink, '_blank');
});
