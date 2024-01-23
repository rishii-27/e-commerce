import React, { useState } from "react";

const ContactUs = () => {
  // Define state variables for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(null);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const info = {
      cname: name,
      cemail: email,
      cphone: phone,
    };

    try {
      const response = await fetch(
        `https://art-gallery-6bbdf-default-rtdb.firebaseio.com/information.json`,
        {
          method: "POST",
          body: JSON.stringify(info),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("API Limit Exhausted");
      }

      const data = await response.json();
      console.log(data);

      // Clear the form fields after successful submission
      setName("");
      setEmail("");
      setPhone("");
    } catch (error) {
      setError("Error submitting data to Firebase: API Limit Exhausted");
      setName("");
      setEmail("");
      setPhone("");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <h1>Contact Us</h1>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                className="form-control"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary mt-3">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
