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
            Rol del Data Protection Officer (DPO)
          </h2>
          <div className="section-line"></div>
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
              <ul>
                <li>Supervisar el cumplimiento del RGPD y la Ley 29733</li>
                <li>Gestionar las solicitudes de derechos ARCO de los pacientes</li>
                <li>Evaluar las Evaluaciones de Impacto de Protección de Datos (DPIA)</li>
                <li>Ser punto de contacto con la autoridad de protección de datos</li>
                <li>Asesorar sobre bases legales para el tratamiento</li>
              </ul>
            </div>

            <div className="dpo-card">
              <h3>
                <span className="section-icon">
                  <FaWrench />
                </span>
                Funciones Técnicas
              </h3>
              <ul>
                <li>Auditar el pipeline de ML para verificar Privacy by Design</li>
                <li>Validar las técnicas de anonimización/seudonimización</li>
                <li>Revisar controles RBAC y políticas de acceso</li>
                <li>Supervisar el cifrado en tránsito y en reposo</li>
                <li>Coordinar procesos de Machine Unlearning</li>
              </ul>
            </div>

            <div className="dpo-card">
              <h3>
                <span className="section-icon">
                  <FaHandshake />
                </span>
                Coordinación con Data Engineering y MLOps
              </h3>
              <ul>
                <li>Participar en reviews de diseño del pipeline de datos</li>
                <li>Definir políticas de retención conjuntas con el equipo</li>
                <li>Establecer checklists de compliance en el CI/CD</li>
                <li>Implementar alertas automáticas ante accesos anómalos</li>
                <li>Documentar el linaje de datos para trazabilidad</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DPO;