// components/ContactUsPage.jsx
import React from "react";

const ContactUsPage = () => {
  return (
    <div className="text-black font-sans py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-3">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg text-gray-950 max-w-2xl mx-auto">
            Have questions or just want to say hello? We’d love to hear from you.
          </p>
        </header>

        {/* Contact Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Form */}
          <div className="bg-white shadow-md rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-950 text-sm sm:text-base mb-6">
              You can reach us by filling out the form, or contact us through the
              following details. We’ll get back to you as soon as possible.
            </p>
            <ul className="space-y-4">
              <li>
                <span className="font-semibold">📍 Address:</span> 123 Sneaker
                Street, Fashion City, NY 10001
              </li>
              <li>
                <span className="font-semibold">📞 Phone:</span> +1 (555) 123-4567
              </li>
              <li>
                <span className="font-semibold">✉️ Email:</span>{" "}
                support@yourbrand.com
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUsPage;
