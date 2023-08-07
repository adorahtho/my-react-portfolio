export default function Contact() {
  return (
    <div className="form-container">
      <h3>
        Contact Information:
      </h3>
      <br></br>
      <p>
        Email: adorahtho@gmail.com
      </p>
      <p>
        Phone #: 555.555.5555
      </p>
      <br></br>
      <br></br>
      <form className="contact-form">
        <h3 id="contact-title">Send me a message:</h3>
        <br></br>
        <div>
          <label>Name:</label>
          <input />
        </div>
        <br></br>
        <div>
          <label>Email:</label>
          <input />
        </div>
        <br></br>
        <div>
          <label>Message:</label>
          <textarea className="message-textbox"></textarea>
        </div>
        <br></br>
        <div>
          <button>Send</button>
        </div>
      </form>
    </div>
  );
}
