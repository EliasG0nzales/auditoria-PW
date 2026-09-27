import React, { useState } from 'react';
import {
  FaShieldHalved,
  FaClipboardCheck,
  FaTrashCan,
  FaKey,
  FaTriangleExclamation,
  FaFileLines,
  FaBolt,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa6';
import '../styles/Problemas.css';

const problemas = [
  {
    icon: FaShieldHalved,
    categoria: 'Confidencialidad y datos sensibles',
    titulo: 'Datos de salud sin anonimización',
    frase: 'Un identificador indirecto puede volver a señalar a una persona.',
    severidad: 'Crítico',
    imagen: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&q=85',
    alt: 'Código y datos representando información sensible sin protección suficiente',
    hallazgo:
      'Los datos clínicos y demográficos se almacenan sin una estrategia clara de anonimización o seudonimización. La combinación de variables puede permitir identificar nuevamente a una persona.',
    riesgo:
      'La exposición de datos de salud puede afectar la intimidad de los pacientes y facilitar la reidentificación, el acceso no autorizado o usos incompatibles con la finalidad original.',
    medidas: [
      'Clasificar los datos y limitar la captura a lo estrictamente necesario.',
      'Seudonimizar identificadores y mantener las claves de reidentificación separadas y restringidas.',
      'Cifrar los datos y probar de forma periódica los controles técnicos y organizativos.',
    ],
    articulos: [
      { numero: 'Art. 9, Ley 29733', titulo: 'Principio de seguridad', detalle: 'Obliga a adoptar las medidas técnicas, organizativas y legales necesarias para garantizar la seguridad de los datos personales.' },
      { numero: 'Art. 2.5 y art. 13.6, Ley 29733', titulo: 'Datos sensibles', detalle: 'Los datos de salud son datos sensibles y su tratamiento exige consentimiento por escrito, salvo una habilitación legal aplicable.' },
      { numero: 'Arts. 5 y 9, Ley 29733; Reglamento', titulo: 'Protección desde el diseño', detalle: 'La arquitectura debe incorporar desde el inicio los principios de finalidad, proporcionalidad, seguridad y confidencialidad.' },
      { numero: 'Art. 9, Ley 29733; Reglamento', titulo: 'Medidas de seguridad', detalle: 'Exige controles adecuados para prevenir accesos no autorizados, pérdida, alteración o tratamiento indebido.' },
    ],
  },
  {
    icon: FaClipboardCheck,
    categoria: 'Transparencia y base jurídica',
    titulo: 'Consentimiento no válido',
    frase: 'Una casilla ya marcada no demuestra una decisión libre.',
    severidad: 'Crítico',
    imagen: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=85',
    alt: 'Persona consultando una aplicación móvil para gestionar su consentimiento',
    hallazgo:
      'La aplicación utilizaba una casilla premarcada y una aceptación general para varias finalidades. El usuario no realizaba una acción afirmativa, separada y específica para cada uso.',
    riesgo:
      'Si el consentimiento es la base jurídica, una aceptación premarcada o agrupada puede no ser libre, específica, informada e inequívoca. Para datos de salud, además, la excepción invocada debe cumplir los requisitos aplicables.',
    medidas: [
      'Desmarcar por defecto todas las opciones y separar cada finalidad.',
      'Explicar en lenguaje claro qué datos se utilizan, con qué propósito y durante cuánto tiempo.',
      'Registrar la versión del aviso, la fecha, la acción afirmativa y habilitar una revocación sencilla.',
    ],
    articulos: [
      { numero: 'Art. 5, Ley 29733', titulo: 'Principio de consentimiento', detalle: 'El tratamiento requiere el consentimiento previo, informado, expreso e inequívoco del titular, salvo las excepciones previstas por ley.' },
      { numero: 'Art. 13, Ley 29733', titulo: 'Consentimiento válido', detalle: 'La información debe permitir que la persona conozca la finalidad y el uso de sus datos antes de decidir.' },
      { numero: 'Art. 13, Ley 29733; Reglamento', titulo: 'Revocación del consentimiento', detalle: 'Debe habilitarse un mecanismo sencillo para revocar el consentimiento y gestionar los tratamientos que dependían de él.' },
      { numero: 'Art. 13.6, Ley 29733', titulo: 'Consentimiento para datos sensibles', detalle: 'El tratamiento de datos sensibles requiere consentimiento por escrito, salvo las excepciones establecidas en la normativa.' },
    ],
  },
  {
    icon: FaTrashCan,
    categoria: 'Retención y derechos de las personas',
    titulo: 'Sin protocolo de eliminación',
    frase: 'La retirada no debe perderse entre copias, sistemas y modelos.',
    severidad: 'Alto',
    imagen: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=85',
    alt: 'Infraestructura de almacenamiento que representa datos retenidos en sistemas',
    hallazgo:
      'No se identificó un procedimiento que localice y elimine los datos de un paciente cuando corresponda atender una solicitud de supresión o una retirada del consentimiento.',
    riesgo:
      'Los datos pueden permanecer en sistemas activos, copias o conjuntos de entrenamiento más tiempo del necesario. La revocación del consentimiento exige revisar el tratamiento y la cancelación se gestiona mediante los derechos ARCO, conforme a la Ley 29733 y su Reglamento.',
    medidas: [
      'Mantener un inventario de sistemas, copias, conjuntos de entrenamiento y dependencias del modelo.',
      'Definir un flujo para recibir, verificar, ejecutar y documentar solicitudes dentro de los plazos legales.',
      'Evaluar la base jurídica vigente y las excepciones antes de borrar; verificar la purga y comunicar el resultado.',
    ],
    articulos: [
      { numero: 'Art. 10, Ley 29733', titulo: 'Principio de disposición', detalle: 'Los datos no deben conservarse más allá del tiempo necesario para la finalidad que justificó su tratamiento.' },
      { numero: 'Art. 5, Ley 29733; Reglamento', titulo: 'Revocación del consentimiento', detalle: 'Debe existir un procedimiento accesible para retirar el consentimiento y dejar constancia de la solicitud.' },
      { numero: 'Arts. 22-23, Ley 29733', titulo: 'Derechos de cancelación y oposición', detalle: 'La persona puede solicitar la cancelación cuando los datos ya no sean necesarios o se traten de forma incompatible, y oponerse en los casos previstos por ley.' },
      { numero: 'Arts. 20-23, Ley 29733', titulo: 'Derechos ARCO', detalle: 'El sistema debe atender los derechos de acceso, rectificación, cancelación y oposición dentro de los procedimientos y plazos aplicables.' },
    ],
  },
  {
    icon: FaKey,
    categoria: 'Control de acceso y responsabilidad',
    titulo: 'Accesos sin control por roles',
    frase: 'Cada perfil debe ver solo los datos que necesita.',
    severidad: 'Crítico',
    imagen: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=85',
    alt: 'Panel de seguridad digital que representa controles de acceso insuficientes',
    hallazgo:
      'El pipeline no aplica controles RBAC suficientes. Perfiles técnicos pueden acceder a identificadores directos, como nombres y documentos, aunque no sean necesarios para su función.',
    riesgo:
      'El acceso excesivo aumenta la posibilidad de consulta, extracción o divulgación indebida de datos personales y dificulta demostrar que cada acceso estaba autorizado.',
    medidas: [
      'Definir roles por función y aplicar el principio de mínimo privilegio.',
      'Separar identificadores directos de los datos utilizados para análisis y entrenamiento.',
      'Registrar y revisar accesos, revocar permisos al cambiar funciones y probar periódicamente las autorizaciones.',
    ],
    articulos: [
      { numero: 'Art. 9, Ley 29733', titulo: 'Principio de seguridad', detalle: 'Exige proteger la información frente al acceso no autorizado, la pérdida, alteración o tratamiento indebido.' },
      { numero: 'Arts. 5 y 9, Ley 29733; Reglamento', titulo: 'Minimización y protección desde el diseño', detalle: 'Los controles deben limitar el acceso y el uso a lo necesario para la finalidad informada.' },
      { numero: 'Ley 29733 y Reglamento', titulo: 'Deber de confidencialidad', detalle: 'Las personas autorizadas a tratar datos deben mantener la confidencialidad incluso después de terminada su relación con la organización.' },
      { numero: 'Art. 9, Ley 29733; Reglamento', titulo: 'Controles de seguridad', detalle: 'Incluye controles de acceso, trazabilidad, gestión de permisos y revisión periódica de las medidas.' },
    ],
  },
];

const Problemas = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const problema = problemas[activeIndex];
  const Icon = problema.icon;

  const showProblem = (index) => {
    setActiveIndex((index + problemas.length) % problemas.length);
  };

  return (
    <section className="section section-dark problems-section">
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
            Hallazgos, impacto y obligaciones aplicables antes de avanzar a producción
          </p>
        </div>

        {isDetailOpen ? (
          <div className="problem-detail-view">
            <button className="problem-back-button" type="button" onClick={() => setIsDetailOpen(false)}>
              <FaChevronLeft />
              Volver a los hallazgos
            </button>
            <div className="problem-showcase" aria-live="polite">
              <div className="problem-visual">
                <img src={problema.imagen} alt={problema.alt} key={problema.imagen} />
                <div className="problem-visual-shade"></div>
                <div className="problem-visual-topline">
                  <span>HALLAZGO {String(activeIndex + 1).padStart(2, '0')}</span>
                  <span className={`severity-badge severity-${problema.severidad.toLowerCase()}`}>
                    {problema.severidad}
                  </span>
                </div>
                <div className="problem-visual-title">
                  <span className="problem-category">{problema.categoria}</span>
                  <h3>{problema.titulo}</h3>
                </div>
              </div>

              <article
                className="problem-detail"
                id="problem-detail-panel"
                role="tabpanel"
                aria-label={problema.titulo}
              >
            <div className="problem-detail-heading">
              <span className="problem-icon"><Icon /></span>
              <span>DIAGNÓSTICO Y MARCO NORMATIVO</span>
            </div>

            <div className="problem-copy-block">
              <h4>Hallazgo</h4>
              <p>{problema.hallazgo}</p>
            </div>

            <div className="problem-copy-block problem-risk">
              <h4>Riesgo para las personas y la organización</h4>
              <p>{problema.riesgo}</p>
            </div>

            <div className="problem-copy-block">
              <h4>Medidas prioritarias</h4>
              <ul className="problem-measures">
                {problema.medidas.map((medida) => <li key={medida}>{medida}</li>)}
              </ul>
            </div>

            <div className="problem-articles">
              <h4>
                <FaFileLines />
                Bases legales peruanas relacionadas
              </h4>
              <div className="problem-article-list">
                {problema.articulos.map((articulo) => (
                  <div className="problem-article" key={articulo.numero}>
                    <span className="problem-article-number">Art. {articulo.numero}</span>
                    <div>
                      <strong>{articulo.titulo}</strong>
                      <p>{articulo.detalle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
              </article>
            </div>
          </div>
        ) : (
          <div className="problem-carousel">
            <div className="problem-stage" aria-label="Carrusel de hallazgos de auditoría">
              {problemas.map((item, index) => {
                const offset = (index - activeIndex + problemas.length) % problemas.length;
                const position = offset === 0
                  ? 'current'
                  : offset === 1
                    ? 'next'
                    : offset === problemas.length - 1
                      ? 'previous'
                      : 'hidden';

                return (
                  <button
                    className={`problem-slide is-${position}`}
                    type="button"
                    key={item.titulo}
                    aria-label={`${item.titulo}, ${item.severidad}. ${position === 'current' ? 'Abrir diagnóstico completo' : 'Seleccionar hallazgo'}`}
                    aria-current={position === 'current' ? 'true' : undefined}
                    onClick={() => {
                      if (position === 'current') {
                        setIsDetailOpen(true);
                      } else {
                        showProblem(index);
                      }
                    }}
                  >
                    <img src={item.imagen} alt="" />
                    <span className="problem-slide-shade"></span>
                    <span className="problem-slide-side">{item.frase}</span>
                    <span className="problem-slide-topline">
                      <span>HALLAZGO {String(index + 1).padStart(2, '0')}</span>
                      <span className={`severity-badge severity-${item.severidad.toLowerCase()}`}>
                        {item.severidad}
                      </span>
                    </span>
                    <span className="problem-slide-copy">
                      <span>{item.categoria}</span>
                      <strong>{item.titulo}</strong>
                      <span className="problem-slide-prompt">Ver diagnóstico</span>
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="problem-carousel-caption" aria-live="polite">
              <p>{problema.frase}</p>
              <span>{String(activeIndex + 1).padStart(2, '0')} / {String(problemas.length).padStart(2, '0')}</span>
            </div>

            <div className="problem-navigation">
              <button type="button" onClick={() => showProblem(activeIndex - 1)} aria-label="Hallazgo anterior">
                <FaChevronLeft />
              </button>
              <div className="problem-pagination" aria-label="Seleccionar hallazgo">
                {problemas.map((item, index) => (
                  <button
                    className={index === activeIndex ? 'is-active' : ''}
                    key={item.titulo}
                    type="button"
                    aria-label={`Mostrar hallazgo ${index + 1}: ${item.titulo}`}
                    aria-current={index === activeIndex ? 'true' : undefined}
                    onClick={() => showProblem(index)}
                  />
                ))}
              </div>
              <button type="button" onClick={() => showProblem(activeIndex + 1)} aria-label="Siguiente hallazgo">
                <FaChevronRight />
              </button>
            </div>
          </div>
        )}

        <div className="problems-summary">
          <div className="summary-icon"><FaBolt /></div>
          <p>
            Estas deficiencias requieren medidas correctivas antes de producción. La Ley 29733 y su Reglamento contemplan sanciones administrativas graduadas según la gravedad de la infracción, desde <strong>0,5 hasta 100 UIT</strong>, además de medidas correctivas y otras consecuencias previstas por la normativa peruana.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problemas;
