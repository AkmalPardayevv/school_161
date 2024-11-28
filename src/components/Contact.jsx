import React, { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // Success or failure message

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form ma'lumotlarini to'plab yuborish
    try {
      const response = await fetch("/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message }),
      });

      if (response.ok) {
        setStatus("Message Sent!");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Something went wrong! Please, try again later");
      }
    } catch (error) {
      setStatus("Network error. Please try again.");
    }

    // 3 soniyadan so'ng statusni tozalash
    setTimeout(() => {
      setStatus("");
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-3xl font-bold text-purple-500">Contact Us</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-md mt-6"
      >
        {/* Email input */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-2 border-2 rounded-md"
        />
        {/* Message input */}
        <textarea
          placeholder="Write your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="p-2 border-2 rounded-md"
          rows="4"
        />
        {/* Submit button */}
        <button
          type="submit"
          className="bg-purple-500 text-white p-2 rounded-md"
        >
          Send Message
        </button>
      </form>

      {/* Status message */}
      {status && <p className="mt-4 text-xl text-green-500">{status}</p>}
    </div>
  );
};

export default Contact;
