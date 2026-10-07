import { Link } from "react-router-dom";
import { Calendar, MessageCircle } from "lucide-react";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">

        <div className="hero-text">

          <span className="hero-badge">
            Specialist Medical Practice
          </span>

          <h1>
            Quality Healthcare
            <span> You Can Trust.</span>
          </h1>

          <p className="hero-description">
            Specialist family medical care, general surgery and
            obstetric services for adults and children in Ermelo.
          </p>

          <div className="hero-actions">

            <Link to="/services" className="btn btn-primary">
              <Calendar size={20} />
              View Our Services
            </Link>

            <Link to="/services#contact" className="btn btn-outline">
            <MessageCircle size={20} />
            Contact Practice
            </Link>

          </div>

          <div className="practice-details">
            <div>
              <strong>Practice No.</strong>
              <span>061 5404</span>
            </div>

            <div>
              <strong>Location</strong>
              <span>Ermelo, Mpumalanga</span>
            </div>
          </div>

        </div>

        <div className="hero-card">
          <div className="medical-cross">+</div>

          <h2>Dr O.O. Oduntan</h2>

          <p>
            Specialist Family Physician
          </p>

          <p>
            Diplomate General Surgeon & Obstetrician
          </p>

          <div className="hero-card-line"></div>

          <span>
            Professional healthcare for you and your family.
          </span>
        </div>

      </div>
    </section>
  );
}

export default Hero;