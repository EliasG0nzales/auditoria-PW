import React from 'react';
import {
  FaShieldHalved,
  FaClipboardCheck,
  FaTrashCan,
  FaKey,
  FaTriangleExclamation,
  FaFileLines,
  FaBolt,
} from 'react-icons/fa6';
import '../styles/Problemas.css';

const Problemas = () => {
  const problemas = [
    {
      icon: FaShieldHalved,
      titulo: 'Sin Anonimización',
      descripcion:
        'Los datos de salud (sensibles) y datos demográficos se almacenan sin anonimización clara.',
      severidad: 'CRÍTICO',
      imagen:
        'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400',
      articulo: 'RGPD Art. 5(1)(f), Art. 32',
    },
    {
      icon: FaClipboardCheck,
      titulo: 'Consentimiento Inválido',
      descripcion:
        'Los usuarios aceptaron los términos mediante un checkbox premarcado general en una app móvil.',
      severidad: 'CRÍTICO',
      imagen:
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400',
      articulo: 'RGPD Art. 7, Art. 9(2)(a)',
    },
    {
      icon: FaTrashCan,
      titulo: 'Sin Protocolo de Eliminación',
      descripcion:
        'No existe un protocolo para la eliminación de los datos de entrenamiento cuando un paciente solicita retirar su información.',
      severidad: 'ALTO',
      imagen:
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400',
      articulo: 'RGPD Art. 17 (Derecho al Olvido)',
    },
    {
      icon: FaKey,
      titulo: 'Sin Control RBAC',
      descripcion:
        'El pipeline carece de controles de acceso basados en roles (RBAC), permitiendo que los científicos de datos accedan a identificadores directos (nombres y DNI/Cédula).',
      severidad: 'CRÍTICO',
      imagen:
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400',
      articulo: 'RGPD Art. 25, Art. 32',
    },
  ];

  return (
    <section className="section section-dark">
      <div className="container">
        <div className="section-header">
          <h2>
            <span className="section-icon">
              <FaTriangleExclamation />
            </span>
            Problemas Detectados en la Auditoría
          </h2>
          <div className="section-line"></div>
          <p className="section-subtitle">
            Inconsistencias graves identificadas durante la auditoría
            preliminar previa a la fase de producción
          </p>
        </div>

        <div className="problems-grid">
          {problemas.map((prob, index) => {
            const Icon = prob.icon;
            return (
              <div key={index} className="problem-card">
                <img
                  src={prob.imagen}
                  alt={prob.titulo}
                  className="problem-image"
                />
                <div className="problem-content">
                  <div className="problem-header-row">
                    <span className="problem-icon">
                      <Icon />
                    </span>
                    <span
                      className={`severity-badge severity-${prob.severidad.toLowerCase()}`}
                    >
                      {prob.severidad}
                    </span>
                  </div>
                  <h3>{prob.titulo}</h3>
                  <p>{prob.descripcion}</p>
                  <div className="article-ref">
                    <span>
                      <span className="section-icon">
                        <FaFileLines />
                      </span>
                      {prob.articulo}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="problems-summary">
          <div className="summary-icon">
            <FaBolt />
          </div>
          <p>
            Estas deficiencias representan <strong>riesgos legales significativos</strong> que
            podrían resultar en sanciones de hasta el <strong>4% de la facturación global anual</strong> según
            el RGPD.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problemas;