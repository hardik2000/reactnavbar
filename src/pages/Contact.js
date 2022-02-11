import 'react-toastify/dist/ReactToastify.min.css';

const ContactForm = () => {

  return (
    <div className="card shadow-sm border-0 px-3 rounded-2 mb-3 py-4 mx-auto mt-5 bg-light">
      <div className="card-header bg-transparent border-0 text-center text-uppercase"><h3>Contact Us</h3></div>
      <div className="card-body">
        <form encType="multipart/form-data" autoComplete="off">
          <div className="form-group">
            <label className="mb-0">Your name<span className="text-danger"></span></label>
            <input name="name" type="text" className="form-control" placeholder="Name" />
            
          </div>
          <div className="form-group">
            <label className="mb-0">Your email<span className="text-danger"></span></label>
            <input name="email" type="email" className="form-control" placeholder="Email" />
            
          </div>
          <div className="form-group">
            <label className="mb-0">Your contact number (Optional)</label>
            <input name="contact" type="text" className="form-control" placeholder="Contact" />
          </div>
          <div className="form-group">
            <label className="mb-0">Message<span className="text-danger">*</span></label>
            <textarea name="message" type="text" className="form-control" placeholder="Message"  />
            
          </div>
            <p></p>
            <p className="text-center mb-0"><input type="submit" value="Submit Now" /></p>
        </form>
        
      </div>
    </div>
  );
};

export default ContactForm;