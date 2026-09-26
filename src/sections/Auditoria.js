import React from 'react';
import { FaMagnifyingGlassChart } from 'react-icons/fa6';
import '../styles/Auditoria.css';

const Auditoria = () => {
  const vulneraciones = [
    {
      articulo: 'Art. 5(1)(f)',
      principio: 'Integridad y Confidencialidad',
      problema:
        'Datos sensibles almacenados sin anonimización ni medidas de seguridad adecuadas.',
      impacto: 'Exposición de datos de salud identificables',
    },
    {
      articulo: 'Art. 7',
      principio: 'Condiciones para el Consentimiento',
      problema:
        'Checkbox premarcado no constituye consentimiento libre, específico, informado e inequívoco.',
      impacto: 'Todo el procesamiento carece de base legal válida',
    },
    {
      articulo: 'Art. 9(2)(a)',
      principio: 'Tratamiento de Datos Sensibles',
      problema:
        'Tratamiento de datos de salud requiere consentimiento explícito, no genérico.',
      impacto: 'Procesamiento ilícito de categorías especiales de datos',
    },
    {
      articulo: 'Art. 17',
      principio: 'Derecho de Supresión (Olvido)',
      problema:
        'No existe protocolo para eliminar datos del dataset de entrenamiento.',
      impacto: 'Imposibilidad de ejercer derechos fundamentales del titular',
    },
    {
      articulo: 'Art. 25',
      principio: 'Protección desde el Diseño',
      problema:
        'Pipeline no incorpora Privacy by Design ni Privacy by Default.',
      impacto: 'Arquitectura sin garantías de privacidad integradas',
    },
    {
      articulo: 'Art. 32',
      principio: 'Seguridad del Tratamiento',
      problema:
        'Ausencia de RBAC permite acceso indiscriminado a datos personales.',
      impacto: 'Riesgo de brechas de seguridad y accesos no autorizados',
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h2>
            <span className="section-icon">
              <FaMagnifyingGlassChart />
            </span>{' '}
            Auditoría de Cumplimiento RGPD
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="audit-intro">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800"
            alt="Regulación RGPD"
            className="audit-image"
          />
          <div className="audit-intro-text">
            <h3>Marco Regulatorio Aplicable</h3>
            <p>
              El análisis se basa en el{' '}
              <strong>
                Reglamento General de Protección de Datos (RGPD)
              </strong>{' '}
              de la Unión Europea, complementado con la{' '}
              <strong>Ley N° 29733</strong> de Protección de Datos Personales
              de Perú y su reglamento.
            </p>
            <p>
              Se identificaron múltiples vulneraciones que comprometen la
              licitud del tratamiento de datos en el pipeline de entrenamiento
              e inferencia del modelo de IA.
            </p>
          </div>
        </div>

        <div className="audit-table-container">
          <table className="audit-table">
            <thead>
              <tr>
                <th>Artículo RGPD</th>
                <th>Principio</th>
                <th>Problema Detectado</th>
                <th>Impacto</th>
              </tr>
            </thead>
            <tbody>
              {vulneraciones.map((v, i) => (
                <tr key={i}>
                  <td>
                    <span className="article-badge">{v.articulo}</span>
                  </td>
                  <td>
                    <strong>{v.principio}</strong>
                  </td>
                  <td>{v.problema}</td>
                  <td>
                    <span className="impact-text">{v.impacto}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Auditoria;