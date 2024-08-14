"use client"; 

import React from 'react';

const ContactForm = () => {

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            access_key: "e6105e47-2456-4121-8a40-c0245efffbcd",
            name: (e.currentTarget.elements.namedItem('name') as HTMLInputElement).value,
            email: (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value,
            message: (e.currentTarget.elements.namedItem('message') as HTMLTextAreaElement).value,
            subject: (e.currentTarget.elements.namedItem('subject') as HTMLInputElement).value,
        }),
    });
    const result = await response.json();
    if (result.success) {
        console.log(result);
    }
  }

  return (
    <section>
      {/* <h2 className="mb-6 font-bold text-3xl">Contact</h2> */}
      <div className="block">
        <div className="ContactForm">
          <form id="contact-form" className="jsx-882709793" onSubmit={handleSubmit}>
            <div className="mb-5 form-input">
              <label className="mb-2 text-sm">Your name</label>
              <input
                id="form-name"
                type="text"
                name="name"
                required
                className="contact-Inp p-3"
              />
            </div>
            <div className="mb-5 form-input">
              <label className="mb-2 text-sm">Email</label>
              <input
                id="form-email"
                type="email"
                name="email"
                required
                className="contact-Inp p-3"
              />
            </div>
            <div className="mb-5 form-input">
              <label className="mb-2 text-sm">Subject</label>
              <input
                id="form-subject"
                type="text"
                name="subject"
                required
                className="contact-Inp p-3"
              />
            </div>
            <div className="mb-5 form-input">
              <label className="mb-2 text-sm">Message</label>
              <textarea
                id="form-message"
                name="message"
                required
                className="contact-Inp p-3"
              ></textarea>
            </div>
            <button type="submit" className="contact-btn px-3 py-2">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;