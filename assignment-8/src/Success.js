import { useLocation } from "react-router-dom";

function Success() {
  const { state } = useLocation();
  const bookingId = Math.floor(Math.random() * 100000);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Booking Successful 🎉</h1>

      <p><b>Booking ID:</b> {bookingId}</p>
      <p><b>Name:</b> {state?.name}</p>
      <p><b>Email:</b> {state?.email}</p>
      <p><b>Mobile:</b> {state?.mobile}</p>
    </div>
  );
}

export default Success;