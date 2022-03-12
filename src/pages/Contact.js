import 'react-toastify/dist/ReactToastify.min.css';
import { send } from 'emailjs-com';
import {toast} from 'react-toastify';
import { useState } from 'react';
toast.configure()
const ContactForm = () => {
  const [toSend, setToSend] = useState({
    from_name: '',
    email: '',
    contact: '',
    message: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    
    // send(
    //   'service_gkj3x4m',
    //   'template_iqa74r8',
    //   toSend,
    //   'CU8vsEr_eVByh_DNk'
    // )
    // .then((response) => {
    //   console.log('SUCCESS!', response.status, response.text);
    //   alert("SUCCESS!", response.status)
    //   window.location.reload(false);
    //   // toast.info('Email Sent Successfully!!')
    // })
    // .catch((err) => {
    //   console.log('FAILED...', err);
    //   alert('FAILED...', err)
    //   window.location.reload(false);  
    //   // toast.error('Email Sent FAILED...')  
    // });
    
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <div className="card shadow-sm border-0 px-3 rounded-2 mb-3 py-4 mx-auto mt-5 bg-light">
      <div className="card-header bg-transparent border-0 text-center text-uppercase"><h3>Contact Us</h3></div>
      <div className="card-body">
        <form encType="multipart/form-data" autoComplete="off" onSubmit={onSubmit}>
          <div className="form-group">
            <label className="mb-0">Your name<span className="text-danger"></span></label>
            <input name="from_name" type="text" className="form-control" placeholder="Name" value={toSend.from_name} onChange={handleChange} />
            
          </div>
          <div className="form-group">
            <label className="mb-0">Your email<span className="text-danger"></span></label>
            <input name="email" type="email" className="form-control" placeholder="Email" value={toSend.email} onChange={handleChange}/>
            
          </div>
          <div className="form-group">
            <label className="mb-0">Your contact number (Optional)</label>
            <input name="contact" type="text" className="form-control" placeholder="Contact" value={toSend.contact} onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label className="mb-0">Message<span className="text-danger">*</span></label>
            <textarea name="message" type="text" className="form-control" placeholder="Message" value={toSend.message} onChange={handleChange} />
          </div> 
          <div className="form-group">
            <br></br>
            <center><input type="submit" value="Submit Now" /></center>
          </div>

        </form>
        
      </div>
    </div>
  );
};

export default ContactForm;

