import {
  Stethoscope,
  HeartPulse,
  Baby,
  ShieldCheck,
  MapPin,
  Clock,
} from "lucide-react";

import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import WhatsAppButton from "../components/WhatsAppButton";

function Home() {
  return (
    <>
      <Hero />

      {/* Services Overview */}
      <section className="services-section">
        <div className="container">

          <div className="section-heading">
            <span>OUR SERVICES</span>

            <h2>
              Healthcare For You
              <strong> & Your Family</strong>
            </h2>

            <p>
              We provide professional medical, surgical and
              obstetric services for adults and children of all ages.
            </p>
          </div>

          <div className="services-grid">

            <ServiceCard
              icon={<Stethoscope size={32} />}
              title="Medicals"
              description="Medical consultations and treatment for adults and children of all ages, including chronic conditions, infections, women's and men's health."
              link="/services#medicals"
            />

            <ServiceCard
              icon={<HeartPulse size={32} />}
              title="Surgicals"
              description="General surgical procedures for adults and children, including circumcision, hernia repair, appendicitis and various other surgical conditions."
              link="/services#surgicals"
            />

            <ServiceCard
              icon={<Baby size={32} />}
              title="Obstetrics"
              description="Comprehensive women's healthcare including antenatal care, pregnancy support, family planning and selected obstetric and gynaecological procedures."
              link="/services#obstetrics"
            />

          </div>

        </div>
      </section>

      {/* About Practice */}
        <section className="about-section">
        <div className="container about-grid">

            <div className="about-image">

            <div className="doctor-card">

                <div className="doctor-symbol">
                +
                </div>

                <div className="doctor-card-line"></div>

                <h3>DR O.O. ODUNTAN</h3>

                <p>
                Specialist Family Physician
                </p>

                <p>
                Diplomate General Surgeon
                <br />
                & Obstetrician
                </p>

                <div className="doctor-practice">
                <span>Practice No.</span>
                <strong>061 5404</strong>
                </div>

            </div>

            </div>

            <div className="about-content">

            <span className="section-label">
                ABOUT THE PRACTICE
            </span>

            <h2>
                Professional Care With
                <strong> Your Health In Mind</strong>
            </h2>

            <p>
                Dr O.O. Oduntan provides specialist family medical,
                surgical and obstetric care in Ermelo.
            </p>

            <p>
                Our practice provides healthcare services for adults
                and children, with a focus on professional,
                accessible and comprehensive patient care.
            </p>

            <div className="about-features">

                <div>
                <ShieldCheck size={24} />
                <span>
                    Professional Medical Care
                </span>
                </div>

                <div>
                <HeartPulse size={24} />
                <span>
                    Adults & Children
                </span>
                </div>

            </div>

            </div>

        </div>
        </section>

      {/* Practice Information */}
      <section className="info-section">
        <div className="container info-grid">

          <div className="info-card">
            <MapPin size={30} />

            <div>
              <h3>Visit Our Practice</h3>

              <p>
                Shop L, 3 Oosthuise Street
                <br />
                Corner of Oosthuise & Wessel Street
                <br />
                Ermelo, 2350
              </p>
            </div>
          </div>

          <div className="info-card">
            <Clock size={30} />

            <div>
              <h3>Appointments</h3>

              <p>
                Contact the practice to enquire about
                consultations and appointments.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Contact CTA */}
      <section className="cta-section" id="contact">
        <div className="container">

          <div className="cta-content">

            <span>
              NEED MEDICAL ASSISTANCE?
            </span>

            <h2>
              Speak To The Practice
            </h2>

            <p>
              Contact Dr O.O. Oduntan's practice for
              appointments and enquiries.
            </p>

            <a href="#" className="btn btn-white">
              Contact Us
            </a>

          </div>

        </div>
      </section>

      <WhatsAppButton />
    </>
  );
}

export default Home;