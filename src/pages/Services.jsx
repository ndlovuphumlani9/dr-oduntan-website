import {
  Stethoscope,
  HeartPulse,
  Baby,
  AlertCircle,
  Send,
} from "lucide-react";

function Services() {
  return (
    <>

      {/* Page Header */}
      <section className="services-header">
        <div className="container">
          <span>OUR SERVICES</span>

          <h1>
            Medical Care For
            <strong> You & Your Family</strong>
          </h1>

          <p>
            Professional medical, surgical and obstetric services
            for adults and children.
          </p>
        </div>
      </section>


      {/* Medical Services */}
      <section className="service-detail-section" id="medicals">
        <div className="container">

          <div className="service-detail-heading">

            <div className="large-service-icon">
              <Stethoscope size={34} />
            </div>

            <div>
              <span>01</span>
              <h2>Medicals</h2>
              <p>
                Medical consultations for adults and children of all ages.
              </p>
            </div>

          </div>


          <div className="service-list">

            <div>Fever</div>
            <div>Hypertension</div>
            <div>Heart diseases</div>
            <div>Epilepsy</div>
            <div>Ulcer</div>
            <div>Asthma</div>
            <div>Headaches & Migraines</div>
            <div>Arthritis</div>
            <div>Obesity management</div>
            <div>TB, HIV prevention & treatment</div>
            <div>Cancer screening</div>
            <div>Dispensing of medications</div>
            <div>Injections & drips</div>
            <div>Men's sexual health</div>
            <div>Women's sexual health</div>
            <div>Abnormal bleeding</div>
            <div>STI treatment</div>
            <div>Pimples & skin problems</div>
            <div>Ear, nose & sinus conditions</div>
            <div>Medical forms & assessments</div>

          </div>

          <div className="service-note">
            <strong>Obesity Management:</strong>
            Medications, lypolysis injections and selected cases
            for operations.
          </div>

          <div className="service-note">
            <strong>Medical Forms:</strong>
            PDP, disability assessment for SASSA, J88,
            Department of Labour, maternity, pension funds
            and BI (Death Certificate).
          </div>

        </div>
      </section>


      {/* Surgical Services */}
      <section className="service-detail-section service-detail-alt" id="surgicals">
        <div className="container">

          <div className="service-detail-heading">

            <div className="large-service-icon">
              <HeartPulse size={34} />
            </div>

            <div>
              <span>02</span>
              <h2>Surgicals</h2>
              <p>
                Surgical operations for adults and children.
              </p>
            </div>

          </div>


          <div className="service-list">

            <div>Circumcision</div>
            <div>Appendix & intestinal blockages</div>
            <div>Hernia repair</div>
            <div>Hydrocelectomy</div>
            <div>Skin tags, lipomas, cysts & warts</div>
            <div>Piles</div>
            <div>Gall bladder procedures</div>
            <div>Adenoids & Tonsils</div>
            <div>Abscesses & wounds</div>
            <div>Breast lump / Mastectomy</div>
            <div>Urine blockages</div>
            <div>Growths on toes & fingers</div>
            <div>Amputations</div>
            <div>Vasectomy</div>
            <div>Thyroid masses</div>
            <div>Enlarged prostate</div>
            <div>Prostate cancer diagnosis</div>

          </div>

        </div>
      </section>


      {/* Obstetrics */}
      <section className="service-detail-section" id="obstetrics">
        <div className="container">

          <div className="service-detail-heading">

            <div className="large-service-icon">
              <Baby size={34} />
            </div>

            <div>
              <span>03</span>
              <h2>Obstetrics</h2>
              <p>
                Women's healthcare, pregnancy and obstetric services.
              </p>
            </div>

          </div>


          <div className="service-list">

            <div>Ante-natal care & sonar checks</div>
            <div>Pregnancy problems</div>
            <div>Normal & Caesarian delivery</div>
            <div>Womb cleaning after miscarriages</div>
            <div>Infertility investigations</div>
            <div>Hormone tests</div>
            <div>Fallopian tube & womb checks</div>
            <div>Pap smear & cancer checks</div>
            <div>Family planning</div>
            <div>Tablets, injections & patches</div>
            <div>IUCD & implants</div>
            <div>Sterilization</div>
            <div>Hysterectomy</div>
            <div>Ovarian cystectomy</div>
            <div>Myomectomy</div>
            <div>Lower abdominal pain</div>
            <div>Abnormal bleeding in women</div>

          </div>

        </div>
      </section>


      {/* Services Not Offered */}
      <section className="not-offered-section">

        <div className="container">

          <div className="not-offered-content">

            <div className="not-offered-icon">
              <AlertCircle size={30} />
            </div>

            <div>

              <span>REFERRAL SERVICES</span>

              <h2>
                Services We Do Not Offer
              </h2>

              <p>
                Where a service falls outside our scope of practice,
                patients are referred to competent healthcare providers.
              </p>

            </div>

          </div>


          <div className="not-offered-list">

            <span>Dental</span>
            <span>Orthopaedic broken bones <small>(POP only)</small></span>
            <span>Ophthalmology <small>(eyes / glasses)</small></span>
            <span>Neurosurgery</span>
            <span>Occupational Medical Screening <small>(Red ticket)</small></span>
            <span>Immunization</span>

          </div>

        </div>

      </section>


      {/* Contact Form */}
      <section className="contact-section" id="contact">

        <div className="container contact-grid">

          <div className="contact-intro">

            <span>CONTACT THE PRACTICE</span>

            <h2>
              Need Medical
              <strong> Assistance?</strong>
            </h2>

            <p>
              Contact Dr O.O. Oduntan's practice for appointments,
              enquiries or more information about our services.
            </p>

            <div className="contact-practice">

              <strong>Practice No. 061 5404</strong>

              <p>
                Shop L, 3 Oosthuise Street
                <br />
                Corner of Oosthuise & Wessel Street
                <br />
                Ermelo, 2350
              </p>

            </div>

          </div>


          <div className="contact-form-card">

            <form>

              <div className="form-row">

                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                  />
                </div>

              </div>


              <div className="form-group">

                <label>Email Address</label>

                <input
                  type="email"
                  placeholder="Enter your email"
                />

              </div>


              <div className="form-group">

                <label>Service</label>

                <select>

                  <option value="">
                    Select a service
                  </option>

                  <option value="medical">
                    Medical Consultation
                  </option>

                  <option value="surgical">
                    Surgical Services
                  </option>

                  <option value="obstetrics">
                    Obstetrics
                  </option>

                  <option value="other">
                    General Enquiry
                  </option>

                </select>

              </div>


              <div className="form-group">

                <label>Message</label>

                <textarea
                  rows="5"
                  placeholder="How can we assist you?"
                ></textarea>

              </div>


              <button
                type="submit"
                className="btn btn-primary form-submit"
              >
                <Send size={18} />
                Send Enquiry
              </button>

            </form>

          </div>

        </div>

      </section>

    </>
  );
}

export default Services;