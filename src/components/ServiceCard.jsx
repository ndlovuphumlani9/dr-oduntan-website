function ServiceCard({ icon, title, description, link }) {
  return (
    <div className="service-card">

      <div className="service-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <a href={link}>
        Learn More →
      </a>

    </div>
  );
}

export default ServiceCard;