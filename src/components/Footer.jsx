
function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-content">

        <div className="footer-brand">
          <h3>DR O.O. ODUNTAN</h3>

          <p className="footer-title">
            Specialist Family Physician, Diplomate General Surgeon
            & Obstetrician
          </p>

          <p>
            Professional medical, surgical and obstetric care
            for adults and children.
          </p>
        </div>

        <div className="footer-practice">
          <h4>Practice Information</h4>

          <p>
            <strong>Practice No:</strong> 061 5404
          </p>

          <p>
            Shop L, 3 Oosthuise Street
            <br />
            Corner of Oosthuise & Wessel Street
            <br />
            Ermelo, 2350
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>
            © {new Date().getFullYear()} Dr O.O. Oduntan Medical Practice.
            All rights reserved.
          </p>
        </div>
      </div>

    </footer>
  );
}

export default Footer;

