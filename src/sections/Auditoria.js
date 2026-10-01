import React from 'react';
import { FaMagnifyingGlassChart } from 'react-icons/fa6';
import '../styles/Auditoria.css';

const Auditoria = () => {
  const equivalencias = [
    {
      tema: 'Consentimiento',
      peru: 'Ley 29733, arts. 5 y 13: consentimiento previo, informado, expreso e inequívoco.',
      unionEuropea: 'RGPD, arts. 6 y 7: base jurídica, condiciones y demostración del consentimiento.',
    },
    {
      tema: 'Datos de salud',
      peru: 'Ley 29733, art. 2.5 y art. 13.6: dato sensible y consentimiento por escrito, salvo excepción legal.',
      unionEuropea: 'RGPD, art. 9: categorías especiales de datos y excepciones para su tratamiento.',
    },
    {
      tema: 'Derechos de las personas',
      peru: 'Ley 29733, arts. 20-23: derechos ARCO (acceso, rectificación, cancelación y oposición).',
      unionEuropea: 'RGPD, arts. 12-22: información, acceso, rectificación, supresión, oposición y otros derechos.',
    },
    {
      tema: 'Seguridad y diseño',
      peru: 'Ley 29733, art. 9, y D.S. 016-2024-JUS: medidas de seguridad y protección desde la planificación.',
      unionEuropea: 'RGPD, arts. 25 y 32: protección desde el diseño y seguridad adecuada al riesgo.',
    },
    {
      tema: 'Conservación',
      peru: 'Ley 29733, art. 10: los datos no deben conservarse más tiempo del necesario para su finalidad.',
      unionEuropea: 'RGPD, art. 5.1.e: limitación del plazo de conservación.',
    },
  ];

  const vulneraciones = [
    {
      articulo: 'Art. 9, Ley 29733',
      principio: 'Integridad y Confidencialidad',
      problema:
        'Datos sensibles almacenados sin anonimización ni medidas de seguridad adecuadas.',
      impacto: 'Exposición de datos de salud identificables',
    },
    {
      articulo: 'Art. 13, Ley 29733',
      principio: 'Condiciones para el Consentimiento',
      problema:
        'Checkbox premarcado no constituye consentimiento libre, específico, informado e inequívoco.',
      impacto: 'Todo el procesamiento carece de base legal válida',
    },
    {
      articulo: 'Art. 13.6, Ley 29733',
      principio: 'Tratamiento de Datos Sensibles',
      problema:
        'Tratamiento de datos de salud requiere consentimiento explícito, no genérico.',
      impacto: 'Procesamiento ilícito de categorías especiales de datos',
    },
    {
      articulo: 'Arts. 22-23, Ley 29733',
      principio: 'Derecho de Supresión (Olvido)',
      problema:
        'No existe protocolo para eliminar datos del dataset de entrenamiento.',
      impacto: 'Imposibilidad de ejercer derechos fundamentales del titular',
    },
    {
      articulo: 'Arts. 5 y 9, Ley 29733',
      principio: 'Protección desde el Diseño',
      problema:
        'Pipeline no incorpora Privacy by Design ni Privacy by Default.',
      impacto: 'Arquitectura sin garantías de privacidad integradas',
    },
    {
      articulo: 'Art. 9, Ley 29733',
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
            Auditoría de Cumplimiento en Protección de Datos Personales
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="audit-intro">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800"
            alt="Regulación peruana de protección de datos personales"
            className="audit-image"
          />
          <div className="audit-intro-text">
            <h3>Marco Regulatorio Aplicable</h3>
            <p>
              El análisis se basa en el artículo 2, numeral 6, de la{' '}
              <strong>Constitución Política del Perú</strong>, la{' '}
              <strong>Ley N.° 29733</strong>, Ley de Protección de Datos
              Personales, y su Reglamento vigente, aprobado por el{' '}
              <strong>D.S. N.° 016-2024-JUS</strong>.
            </p>
            <p>
              Se identificaron múltiples vulneraciones que comprometen la
              licitud del tratamiento de datos en el pipeline de entrenamiento
              e inferencia del modelo de IA.
            </p>
          </div>
        </div>

        <div className="audit-comparison-grid">
          <div className="audit-table-container">
            <h3 className="audit-subtitle">Tabla 1. Equivalencia de obligaciones</h3>
            <table className="audit-table comparison-table">
              <thead>
                <tr>
                  <th>Tema</th>
                  <th>Perú</th>
                  <th>Unión Europea</th>
                </tr>
              </thead>
              <tbody>
                {equivalencias.map((fila) => (
                  <tr key={fila.tema}>
                    <td><strong>{fila.tema}</strong></td>
                    <td>{fila.peru}</td>
                    <td>{fila.unionEuropea}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

        <div className="audit-table-container">
          <table className="audit-table">
            <thead>
              <tr>
                <th>Base legal peruana</th>
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