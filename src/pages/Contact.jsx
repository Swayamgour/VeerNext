import React from 'react'
import AllPageHeader from './components/AllPageHeader'

function ContactUS() {
    return (
        <>
            <AllPageHeader props="Contact Us" />
            {/* <!-- contact us card section start  --> */}
            <section class="features-area pt-70 pb-70 p-relative bg-white z-index-2">
                <div class="container">
                    <div class="row g-4">
                        {/* <!-- Left Column: Contact Details --> */}
                        <div class="col-lg-6">
                            <div class="contact-details-card">
                                <h3 class="contact-details-card-title">Contact Information</h3>

                                {/* <!-- Phone --> */}
                                <div class="contact-details-card-item">
                                    <div class="contact-details-card-icon">
                                        <i class="fas fa-phone-alt"></i>
                                    </div>
                                    <div class="contact-details-card-content">
                                        <h5>Phone Numbers</h5>
                                        <p><a href="tel:+918883336753">+91 +91-8883336753</a></p>

                                    </div>
                                </div>

                                {/* <!-- Email --> */}
                                <div class="contact-details-card-item">
                                    <div class="contact-details-card-icon">
                                        <i class="fas fa-envelope"></i>
                                    </div>
                                    <div class="contact-details-card-content">
                                        <h5>Email Addresses</h5>
                                        <p><a href="mailto:support@projectveer.org">Support@projectveer.org</a></p>
                                    </div>
                                </div>

                                {/* <!-- Address --> */}
                                <div class="contact-details-card-item">
                                    <div class="contact-details-card-icon">
                                        <i class="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div class="contact-details-card-content">
                                        <h5>Our Address</h5>
                                        <p>6th Floor, Cosmos Vijay, Shivaji Path, Opp Jagdish Book Depot, Navpada, Thane (West), Maharashtra - 400601.</p>
                                    </div>
                                </div>



                                {/* <!-- Social Media --> */}
                                <div class="contact-details-card-socl-sec">
                                    <h5 class="contact-details-card-socl-title">Follow Us</h5>
                                    <div class="contact-details-card-socl-icons">
                                        <a href="#" class="contact-details-card-socl-icon" title="Facebook">
                                            <i class="fab fa-facebook-f"></i>
                                        </a>
                                        <a href="#" class="contact-details-card-socl-icon" title="Twitter">
                                            <i class="fab fa-twitter"></i>
                                        </a>
                                        <a href="#" class="contact-details-card-socl-icon" title="Instagram">
                                            <i class="fab fa-instagram"></i>
                                        </a>
                                        <a href="#" class="contact-details-card-socl-icon" title="LinkedIn">
                                            <i class="fab fa-linkedin-in"></i>
                                        </a>
                                        <a href="#" class="contact-details-card-socl-icon" title="YouTube">
                                            <i class="fab fa-youtube"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Right Column: Contact Form --> */}
                        <div class="col-lg-6">
                            <div class="contact-details-form-card">
                                <h3 class="contact-details-form-card-title">Send Us a Message</h3>


                                {/* <!-- Contact Form --> */}
                                <form id="contactForm" class="contact-details-form">
                                    <div class="row">
                                        <div class="col-md-6 mb-3 form-group">
                                            <label for="firstName" class="form-label">First Name *</label>
                                            <input type="text" class="form-control" id="firstName" placeholder="John" required />

                                        </div>
                                        <div class="col-md-6 mb-3 form-group">
                                            <label for="lastName" class="form-label">Last Name *</label>
                                            <input type="text" class="form-control" id="lastName" placeholder="Doe" required />
                                        </div>
                                        <div class="col-md-6 mb-3 form-group">
                                            <label for="email" class="form-label">Email Address *</label>
                                            <input type="email" class="form-control" id="email" placeholder="john@example.com" required />

                                        </div>

                                        <div class="col-md-6 mb-3 form-group">
                                            <label for="phone" class="form-label">Phone Number</label>
                                            <input type="tel" class="form-control" id="phone" placeholder="+91 9876543210" />
                                        </div>

                                    </div>


                                    <div class="form-group mb-3">
                                        <label for="queryType" class="form-label">Query Type *</label>
                                        <select class="form-control form-select " id="queryType" required>
                                            <option value="" selected disabled>Select a query type</option>
                                            <option value="admission">Admission Inquiry</option>
                                            <option value="technical">Technical Support</option>
                                            <option value="academic">Academic Questions</option>
                                            <option value="fees">Fees & Payment</option>
                                            <option value="certificate">Certificate Request</option>
                                            <option value="feedback">Feedback/Suggestion</option>
                                            <option value="other">Other</option>
                                        </select>

                                    </div>



                                    <div class="form-group mb-3">
                                        <label for="message" class="form-label">Message *</label>
                                        <textarea class="form-control" id="message" rows="4" placeholder="Please provide details of your query..." required></textarea>

                                    </div>


                                    <button type="submit" class="fill-btn">
                                        <i class="fas fa-paper-plane me-2"></i> Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ContactUS