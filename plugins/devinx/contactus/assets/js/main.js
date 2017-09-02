$('#contactForm').submit(function(e) {
    var name = document.getElementBy('#inputName'),
        email = document.getElementBy('#inputEmail'),
        message = document.getElementBy('#inputMessage');
    if (!name.value || !email.value || !message.value) {
        alertify.error('Please checko your entries')

    } else {

        $.ajax({
            url: "https://formspree.io/pmutua@live.com",
            method: "POST",
            data: $this().serialize(),
            dataType: "json"
        });
        e.preventDefault()
        $(this).get(0).reset()
        alertify.success('Message Sent')

    }
})