import React,{useState} from "react";
import './css/Footer.css';

const Footer = () => {
    const [formData, setFormData] = useState({
        firstName:'',
        lastName:'',
        email:'',
        telephone:'',
        message:'',
        agree:'false'
    });

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData((prev) =>({
            ...prev,
            [name]:value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form submitted...",formData);
    }

    return ( 
        <div className="footer">
            <div className="footer-head">
                <h2>How to reach us</h2>
                <p>
                Lorem ipsum dolor sit amet, consetetur.
                </p>
            </div>

            <div className="footer-middle">
                <div className="n">
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="name-fields">
                        <div className="field">
                            <label className="lable">First Name *</label>
                            <input
                                type="text"
                                name="firstName"
                                className="name"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="field">
                            <label className="lable">Last Name *</label>
                            <input
                                type="text"
                                name="lastName"
                                className="name"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>  
                    </div>

                    <div className="other-fields">
                        <div className="field-o">
                            <label className="lable">Email *</label> 
                            <input
                                type="text"
                                name="email"
                                className="name"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div> 
                        <div className="field-o">
                            <label className="lable">Telephone</label>
                            <input
                                type="text"
                                name="telephone"
                                className="name"
                                value={formData.telephone}
                                onChange={handleChange}
                                
                            />
                        </div>
                        <div className="field-o">
                            <label className="lable">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={6}
                                className="message"
                            />
                        </div>
                        <div className="field-o">
                            <label className="lable">* required fields</label>
                            <div className="check-box">
                                <input
                                    type="checkbox"
                                    name="agree"
                                    value={formData.agree}
                                    onChange={handleChange}
                                    className="c-box"
                                />
                                <label className="c-box-lable">I agree to the Terms & Conditions</label>
                            </div>
                        </div>
                        <button className="btn-submit">SUBMIT</button>
                    </div>
                </form>
                </div>
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48588.133010545425!2d-3.7152472!3d40.4363503!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422f35d4f0c269%3A0x754405946e8ca584!2sAmadeus%20IT%20Group!5e0!3m2!1sen!2slk!4v1750428594601!5m2!1sen!2slk"
                    width="60%"
                    height="auto"
                    style={{ border: 0}}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="map">     
                </iframe>
                
            </div>
        </div>
     );
}
 
export default Footer;