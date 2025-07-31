import React, { useState } from "react";
import { Send, Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Mock form submission
    alert("¡Mensaje enviado! Te contactaré pronto.");
    setFormData({
      name: "",
      email: "",
      service: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hola@creamix-ds.com",
      action: "mailto:hola@creamix-ds.com"
    },
    {
      icon: Phone,
      title: "Teléfono",
      value: "+52 123 456 7890",
      action: "tel:+5211234567890"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "Chatear ahora",
      action: "https://wa.me/5211234567890"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      value: "Ciudad de México, MX",
      action: null
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="dark-content-container">
        <div className="section-header">
          <h2 className="display-large section-title">
            Comencemos tu Proyecto
          </h2>
          <p className="body-large section-description">
            ¿Tienes una idea increíble? Hablemos sobre cómo puedo ayudarte 
            a convertirla en realidad.
          </p>
        </div>
        
        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="heading-2 contact-info-title">
              Información de Contacto
            </h3>
            
            <div className="contact-methods">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-method">
                  <div className="contact-method-icon">
                    <info.icon size={24} />
                  </div>
                  <div className="contact-method-content">
                    <span className="contact-method-title">{info.title}</span>
                    {info.action ? (
                      <a 
                        href={info.action} 
                        className="contact-method-value contact-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="contact-method-value">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="contact-cta">
              <h4 className="heading-3">¿Listo para empezar?</h4>
              <p className="body-medium">
                Respondo en menos de 24 horas. Hablemos sobre tu proyecto 
                y cómo puedo ayudarte a alcanzar tus objetivos.
              </p>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="tu@email.com"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="service" className="form-label">
                  Servicio de interés
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="form-select"
                  required
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="web-development">Desarrollo Web</option>
                  <option value="mobile-development">App Móvil</option>
                  <option value="ui-ux-design">UI/UX Design</option>
                  <option value="consulting">Consultoría</option>
                  <option value="maintenance">Mantenimiento</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  placeholder="Cuéntame sobre tu proyecto..."
                  rows={5}
                  required
                />
              </div>
              
              <button type="submit" className="btn-primary form-submit">
                <span>Enviar Mensaje</span>
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;