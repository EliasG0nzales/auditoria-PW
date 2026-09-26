import React from 'react';
import {
  FaMapLocationDot,
  FaHospital,
  FaClock,
  FaChartColumn,
  FaSatelliteDish,
  FaMagnifyingGlass,
  FaFlaskVial,
} from 'react-icons/fa6';
import '../styles/Contexto.css';

const Contexto = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h2>
            <span className="section-icon">
              <FaMapLocationDot />
            </span>{' '}
            Presentación del Contexto Profesional
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="context-grid">
          {/* Tarjeta Principal */}
          <div className="context-card main-card">
            <div className="card-image-container">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800"
                alt="IA en Salud"
                className="card-image"
              />
              <div className="card-image-overlay">
                <span>HealthAnalytics AI Corp.</span>
              </div>
            </div>
            <div className="card-content">
              <h3>
                <span className="section-icon">
                  <FaHospital />
                </span>{' '}
                Sobre la Empresa
              </h3>
              <p>
                <strong>HealthAnalytics AI Corp.</strong> ha desarrollado una
                plataforma basada en Inteligencia Artificial y Machine Learning
                orientada a{' '}
                <strong>
                  predecir la reincidencia de enfermedades crónicas
                </strong>{' '}
                en pacientes a partir de:
              </p>
              <div className="data-sources">
                <div className="data-source">
                  <span className="data-icon">
                    <FaHospital />
                  </span>
                  <span>Datos clínicos</span>
                </div>
                <div className="data-source">
                  <span className="data-icon">
                    <FaClock />
                  </span>
                  <span>Datos biométricos de wearables</span>
                </div>
                <div className="data-source">
                  <span className="data-icon">
                    <FaChartColumn />
                  </span>
                  <span>Historial socioeconómico</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tarjetas Laterales */}
          <div className="context-side">
            <div className="context-card side-card">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600"
                alt="Data Analytics"
                className="side-image"
              />
              <div className="card-content">
                <h4>
                  <span className="section-icon">
                    <FaSatelliteDish />
                  </span>{' '}
                  Fuentes de Datos
                </h4>
                <ul>
                  <li>Centros de salud</li>
                  <li>Encuestas digitales</li>
                  <li>Registros públicos</li>
                </ul>
              </div>
            </div>

            <div className="context-card side-card">
              <img
                src="https://images.unsplash.com/photo-1563986768609-322da13575f2?w=600"
                alt="Auditoría"
                className="side-image"
              />
              <div className="card-content">
                <h4>
                  <span className="section-icon">
                    <FaMagnifyingGlass />
                  </span>{' '}
                  Auditoría Preliminar
                </h4>
                <p>
                  Durante la auditoría previa a producción se detectaron
                  <strong className="text-danger">
                    {' '}
                    graves inconsistencias
                  </strong>{' '}
                  en el tratamiento de información.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Descripción adicional */}
        <div className="context-description">
          <div className="desc-card">
            <img
              src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600"
              alt="Pipeline de datos"
              className="desc-image"
            />
            <div className="desc-content">
              <h3>
                <span className="section-icon">
                  <FaFlaskVial />
                </span>{' '}
                Objetivo del Proyecto
              </h3>
              <p>
                Para entrenar y desplegar el modelo, el equipo de ciencia de
                datos ha integrado bases de datos procedentes de centros de
                salud, encuestas digitales y registros públicos. El objetivo es
                crear un sistema predictivo que permita anticipar la
                reincidencia de enfermedades crónicas y mejorar la atención
                preventiva.
              </p>
              <p>
                Como{' '}
                <strong>
                  Consultores de Compliance y Gobernanza de Datos en IA
                </strong>
                , el equipo ha sido contratado para evaluar la situación,
                auditar las brechas normativas según marcos internacionales
                como el <strong>RGPD</strong> y diseñar las medidas de
                adecuación legal y técnica.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contexto;