import React from 'react';
import {
  FaFileLines,
  FaBullseye,
  FaCircle,
} from 'react-icons/fa6';
import '../styles/Conclusiones.css';

const Conclusiones = () => {
  return (
    <section className="section section-dark">
      <div className="container">
        <div className="section-header">
          <h2>
            <span className="section-icon">
              <FaFileLines />
            </span>{' '}
            Conclusiones y Recomendaciones
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="conclusions-grid">
          <div className="conclusion-card">
            <div className="conclusion-number">01</div>
            <h4>Urgencia Normativa</h4>
            <p>
              Las brechas identificadas pueden vulnerar la Ley N.° 29733 y su
              Reglamento. La empresa debe implementar las correcciones antes
              de pasar a producción para reducir el riesgo de sanciones
              administrativas de hasta 100 UIT, según la gravedad de la
              infracción.
            </p>
          </div>
          <div className="conclusion-card">
            <div className="conclusion-number">02</div>
            <h4>Privacy by Design</h4>
            <p>
              La arquitectura del pipeline debe rediseñarse integrando
              privacidad desde el diseño. Cada etapa del flujo de datos debe
              incorporar controles de seguridad y anonimización como parte
              inherente del sistema.
            </p>
          </div>
          <div className="conclusion-card">
            <div className="conclusion-number">03</div>
            <h4>Consentimiento Válido</h4>
            <p>
              El mecanismo de consentimiento actual es inválido. Se requiere un
              sistema de consentimiento granular, expreso e informado que
              cumpla con la Ley N.° 29733 y permita su revocación sencilla.
            </p>
          </div>
          <div className="conclusion-card">
            <div className="conclusion-number">04</div>
            <h4>Gobernanza Continua</h4>
            <p>
              La designación de un DPO y la implementación de auditorías
              periódicas son esenciales para mantener el cumplimiento normativo
              a lo largo del ciclo de vida del modelo de IA.
            </p>
          </div>
        </div>

        <div className="recommendations-box">
          <h3>
            <span className="section-icon">
              <FaBullseye />
            </span>{' '}
            Recomendaciones Prioritarias
          </h3>
          <div className="recommendation-timeline">
            <div className="timeline-item">
              <div className="timeline-marker danger"><FaCircle /></div>
              <div className="timeline-content">
                <strong>Inmediato (0-30 días):</strong> Implementar RBAC y
                cifrado. Detener acceso a datos sin anonimizar.
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker warning"><FaCircle /></div>
              <div className="timeline-content">
                <strong>Corto plazo (30-90 días):</strong> Rediseñar mecanismo
                de consentimiento. Designar DPO.
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker info"><FaCircle /></div>
              <div className="timeline-content">
                <strong>Mediano plazo (90-180 días):</strong> Implementar
                Machine Unlearning. Realizar una evaluación de impacto en
                protección de datos personales.
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker success"><FaCircle /></div>
              <div className="timeline-content">
                <strong>Largo plazo (180+ días):</strong> Auditorías
                periódicas. Certificación de cumplimiento.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conclusiones;