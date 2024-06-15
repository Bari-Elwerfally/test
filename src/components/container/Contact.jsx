import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [userEmail, setUserEmail] = useState("");
  const [emailSubject, setEmailSubject] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [emailSent, setEmailSent] = useState(false); // New state for email sent feedback

  useEffect(() => {
    // Reset emailSent state after a delay (e.g., 3 seconds)
    if (emailSent) {
      const timer = setTimeout(() => {
        setEmailSent(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [emailSent]);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Replace these placeholders with your actual IDs
    const SERVICE_ID = "service_1dz04rf";
    const TEMPLATE_ID = "template_hou9gdb"; // Use the template ID you create
    const USER_ID = "U6Jq31NTnq0euqc8_";

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, { userEmail, emailSubject }, USER_ID)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setIsSending(false);
        setUserEmail("");
        setEmailSubject("");
        setEmailSent(true); // Set emailSent state to true
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setIsSending(false);
        // Handle any errors (e.g., display an error message)
      });
  };

  return (
    <div className="section" id="contact">
      <div className="text-center max-w-[600px] mx-auto">
        <div className="sm:text-3xl text-2xl font-bold mb-5">
          Contact Us
        </div>
        <p className="text-sm leading-7 text-gray">
          If you have any questions, feedback, or inquiries, please feel free
          to reach out to us using the contact information provided below. We
          value your input and will make every effort to respond promptly.
        </p>
        <form onSubmit={sendEmail} className="mt-5">
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            className="p-3 outline-none text-sm shadow-md w-full"
          />
          <input
            type="text"
            name="subject"
            placeholder="Enter your subject"
            value={emailSubject}
            onChange={(e) => setEmailSubject(e.target.value)}
            className="p-3 mt-3 outline-none text-sm shadow-md w-full"
          />
          <button
            type="submit"
            className={`text-sm text-white bg-Red p-3 mt-3 shadow-md font-bold w-full ${
              isSending ? "opacity-50 cursor-not-allowed" : ""
            } ${emailSent ? "bg-green-500" : ""}`}
            disabled={isSending || !userEmail || !emailSubject}
          >
            {emailSent ? "Email Sent!" : isSending ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
