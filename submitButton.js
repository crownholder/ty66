const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", async () => {
  const customerFName = document.getElementById("fname").value;
  const customerLName = document.getElementById("lname").value;
  const customerEmail = document.getElementById("email").value;
  
  try {
    const response = await fetch('/api/customers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: customerName,
        email: customerEmail,
        phone: customerPhone
      })
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
});
