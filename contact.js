function tap() {
    // Get the input values
    const firstName = document.querySelector('.fname').value;
    const lastName = document.querySelector('.lname').value;
    const email = document.querySelector('.email').value;
    const phone = document.querySelector('.phone').value;
    const message = document.querySelector('textarea[name="message"]').value;

    // Validate the input values (basic validation)
    if (!firstName || !lastName || !email || !phone || !message) {
      alert("Please fill in all fields.");
      return; // Stop the function if validation fails
    }

    // Here, you can process the data as needed, for now, we just log it
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Message:", message);

    // Confirmation message
    alert("Thank you, " + firstName + "! Your message has been sent.");
    
    // Optionally, you can reset the form fields after submission
    document.querySelector('form').reset();
  }