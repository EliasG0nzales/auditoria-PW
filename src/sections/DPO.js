import React from 'react';
import {
  FaUserShield,
  FaScaleBalanced,
  FaWrench,
  FaHandshake,
} from 'react-icons/fa6';
import '../styles/DPO.css';

const DPO = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h2>
            <span className="section-icon">
              <FaUserShield />
            </span>
            Responsable de Protección de Datos Personales
          </h2>
          <div className="section-line"></div>
          <p className="section-subtitle dpo-summary">
            El DPO vela por el cumplimiento legal, fortalece la privacidad técnica y coordina con los equipos para proteger los datos durante todo su ciclo de vida.
          </p>
        </div>

        <div className="dpo-layout">
          <div className="dpo-image-container">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600"
              alt="Data Protection Officer"
              className="dpo-image"
            />
          </div>

          <div className="dpo-content">
            <div className="dpo-card">
              <h3>
                <span className="section-icon">
                  <FaScaleBalanced />
                </span>
                Funciones Legales
              </h3>
              <p className="dpo-card-summary">
                Asegura el cumplimiento normativo, asesora sobre el tratamiento de datos y atiende los derechos de los pacientes.
              </p>
            </div>

            <div className="dpo-card">
              <h3>
                <span className="section-icon">
                  <FaWrench />
                </span>
                Funciones Técnicas
              </h3>
              <p className="dpo-card-summary">
                Comprueba que los sistemas protejan los datos mediante anonimización, controles de acceso y cifrado.
              </p>
            </div>

            <div className="dpo-card">
              <h3>
                <span className="section-icon">
                  <FaHandshake />
                </span>
                Coordinación con Data Engineering y MLOps
              </h3>
              <p className="dpo-card-summary">
                Coordina con Data Engineering y MLOps la retención, trazabilidad y aplicación de controles de privacidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DPO;