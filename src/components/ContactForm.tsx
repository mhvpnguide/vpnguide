const ContactForm = () => {
  return (
    <>
      <section>
        <h2 className="mb-6 font-bold text-3xl">Contact</h2>
        <div className="block">
          <div className="ContactForm">
            <form id="contact-form" className="jsx-882709793">
              <div className="mb-5 form-input">
                <label className="mb-2 text-sm">Your name</label>
                <input
                  id="form-name"
                  type="text"
                  required
                  className="contact-Inp p-3"
                //   value=""
                />
              </div>
              <div className="mb-5 form-input">
                <label className="mb-2 text-sm">Email</label>
                <input
                  id="form-email"
                  type="email"
                  required
                  className="contact-Inp p-3"
                //   value=""
                />
              </div>
              <div className="mb-5 form-input">
                <label className="mb-2 text-sm">Subject</label>
                <input
                  id="form-subject"
                  type="text"
                  required
                  className="contact-Inp p-3"
                //   value=""
                />
              </div>
              <div className="mb-5 form-input">
                <label className="mb-2 text-sm">Message</label>
                <textarea
                  id="form-message"
                  required
                  className="contact-Inp p-3"
                ></textarea>
              </div>
              <div
                data-sitekey="6Ld6xwAVAAAAAJFsy3_JH2x9-p2xrLHhrVsepqTW"
                data-callback="successRecaptcha"
                data-size="invisible"
                data-action="contactus"
                data-badge="bottomright"
                className="jsx-882709793 g-recaptcha"
              ></div>
              <button type="submit" className="contact-btn px-3 py-2">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
