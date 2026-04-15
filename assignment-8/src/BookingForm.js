import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

function BookingForm() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/success", { state: form });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Booking Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          required
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <br /><br />

        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <br /><br />

        <input
          type="text"
          placeholder="Mobile"
          required
          onChange={(e) => setForm({ ...form, mobile: e.target.value })}
        />
        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BookingForm;