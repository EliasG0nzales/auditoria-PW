import React, { useState } from 'react';
import {
  FaFileLines,
  FaChartColumn,
  FaBuildingColumns,
  FaMagnifyingGlassPlus,
  FaMagnifyingGlassMinus,
  FaExpand,
  FaXmark,
} from 'react-icons/fa6';
import '../styles/Flujos.css';

const Flujos = () => {
  const [zoom, setZoom] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [governanceZoom, setGovernanceZoom] = useState(1);
  const [isGovernanceFullscreen, setIsGovernanceFullscreen] = useState(false);

  const changeZoom = (amount) => {
    setZoom((currentZoom) => Math.min(3, Math.max(1, currentZoom + amount)));
  };

  const changeGovernanceZoom = (amount) => {
    setGovernanceZoom((currentZoom) => Math.min(3, Math.max(1, currentZoom + amount)));
  };

  const imageControls = (closeFullscreen = false) => (
    <div className="diagram-image-controls" aria-label="Controles de imagen">
      <button
        type="button"
        onClick={() => changeZoom(-0.25)}
        disabled={zoom <= 1}
        aria-label="Alejar imagen"
        title="Alejar"
      >
        <FaMagnifyingGlassMinus />
      </button>
      <span aria-live="polite">{Math.round(zoom * 100)}%</span>
      <button
        type="button"
        onClick={() => changeZoom(0.25)}
        disabled={zoom >= 3}
        aria-label="Acercar imagen"
        title="Acercar"
      >
        <FaMagnifyingGlassPlus />
      </button>
      {closeFullscreen ? (
        <button
          type="button"
          onClick={() => setIsFullscreen(false)}
          aria-label="Cerrar pantalla completa"
          title="Cerrar"
        >
          <FaXmark />
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setIsFullscreen(true)}
          aria-label="Ampliar a pantalla completa"
          title="Pantalla completa"
        >
          <FaExpand />
        </button>
      )}
    </div>
  );

  return (
    <section className="section section-dark">
      <div className="container">
        <div className="section-header">
          <h2>
            <span className="section-icon">
              <FaChartColumn />
            </span>
            Diagramas de Flujos y Procesos
          </h2>
          <div className="section-line"></div>
        </div>

        {/* GRÁFICO 1 */}
        <div className="diagram-container consent-diagram-container">
          <h3 className="diagram-title">
            <span className="section-icon">
              <FaFileLines />
            </span>
            Gráfico 1: Flujo de Consentimiento Informado y Gestión de
            Derechos ARCO/RGPD
          </h3>
          <div className="consent-content-frame">
            {imageControls()}
            <div className="diagram-image-viewport">
              <img
                className="consent-diagram-image"
                src="/Diagrama%20en%20blanco%20-%20P%C3%A1gina%201%20Gr%C3%A1fico%201_%20Consentimiento%20y%20ciclo%20de%20vida%20del%20dato.png"
                alt="Diagrama del consentimiento informado y el ciclo de vida de los datos del paciente"
                style={{ width: `${zoom * 100}%` }}
              />
            </div>
            <p className="diagram-description">
              En este primer diagrama mostramos qué pasa con los datos del paciente desde el momento en que se solicita su consentimiento hasta que puede retirar ese consentimiento o pedir que se eliminen sus datos.
              <br /><br />
              Primero, el paciente recibe información clara sobre qué datos se van a utilizar y para qué se van a utilizar. Después se solicita un consentimiento explícito, es decir, que el usuario realmente marque la opción y no que venga seleccionada por defecto.
              <br /><br />
              Si el paciente acepta, se pueden recopilar los datos necesarios, por ejemplo, su información clínica, datos de los wearables, hábitos y ubicación. Luego estos datos pasan por un proceso de protección y preparación antes de utilizarse en el modelo de inteligencia artificial.
              <br /><br />
              Finalmente, el modelo utiliza estos datos para generar una predicción. Pero el proceso no termina ahí. Si el paciente posteriormente retira su consentimiento o solicita la eliminación de sus datos, la organización tiene que identificar dónde se encuentran esos datos, eliminarlos o aplicar las medidas correspondientes y evaluar si también es necesario actualizar los conjuntos de entrenamiento o el modelo.
            </p>
          </div>
        </div>

        {isFullscreen && (
          <div
            className="diagram-fullscreen"
            role="dialog"
            aria-modal="true"
            aria-label="Diagrama de consentimiento y ciclo de vida del dato"
            onClick={() => setIsFullscreen(false)}
          >
            <div className="diagram-fullscreen-content" onClick={(event) => event.stopPropagation()}>
              {imageControls(true)}
              <div className="diagram-fullscreen-viewport">
                <img
                  className="consent-diagram-image"
                  src="/Diagrama%20en%20blanco%20-%20P%C3%A1gina%201%20Gr%C3%A1fico%201_%20Consentimiento%20y%20ciclo%20de%20vida%20del%20dato.png"
                  alt="Diagrama del consentimiento informado y el ciclo de vida de los datos del paciente"
                  style={{ width: `${zoom * 100}%` }}
                />
              </div>
            </div>
          </div>
        )}

        {/* GRÁFICO 2 */}
        <div className="diagram-container consent-diagram-container">
          <h3 className="diagram-title">
            <span className="section-icon">
              <FaBuildingColumns />
            </span>
            Gráfico 2: Arquitectura de Seguridad y Gobernanza de Datos -
            Privacy by Design Pipeline
          </h3>
          <div className="consent-content-frame">
            <button
              className="governance-image-trigger"
              type="button"
              onClick={() => {
                setGovernanceZoom(1);
                setIsGovernanceFullscreen(true);
              }}
              aria-label="Ampliar diagrama de Privacy by Design y Data Governance"
              title="Pulsa para ampliar"
            >
              <img
                className="consent-diagram-image"
                src="/Diagrama%20en%20blanco%20-%20P%C3%A1gina%201%20Privacy%20by%20Design%20%2B%20Data%20Governance.png"
                alt="Diagrama de arquitectura Privacy by Design y gobernanza de datos"
              />
            </button>
            <p className="diagram-description">
              En el segundo diagrama ya nos enfocamos más en la parte técnica. Aquí mostramos cómo proteger los datos durante todo el pipeline de inteligencia artificial.
              <br /><br />
              Primero tenemos las diferentes fuentes de información, como los centros de salud, los wearables, las encuestas y los registros públicos. Cuando los datos ingresan al sistema, deben hacerlo mediante una conexión segura y con mecanismos de autenticación.
              <br /><br />
              Después clasificamos los datos para saber cuáles son personales, cuáles están relacionados con la salud, cuáles son biométricos y cuáles pueden representar un mayor riesgo. Luego aplicamos minimización y pseudonimización, de manera que los equipos que trabajan con el modelo no tengan acceso innecesario a identificadores directos como el nombre o el DNI.
              <br /><br />
              También utilizamos cifrado para proteger los datos cuando se almacenan y cuando se transmiten. Además, aplicamos RBAC, que significa control de acceso basado en roles, para que cada trabajador solamente pueda acceder a la información que necesita para realizar su función.
              <br /><br />
              Finalmente, después del entrenamiento y despliegue del modelo, mantenemos monitoreo, auditoría y una política de conservación. Cuando los datos ya no son necesarios o corresponde eliminarlos, se ejecuta el proceso de purga.
            </p>
          </div>
        </div>

        {isGovernanceFullscreen && (
          <div
            className="diagram-fullscreen"
            role="dialog"
            aria-modal="true"
            aria-label="Diagrama de Privacy by Design y gobernanza de datos"
            onClick={() => setIsGovernanceFullscreen(false)}
          >
            <div className="diagram-fullscreen-content" onClick={(event) => event.stopPropagation()}>
              <div className="diagram-image-controls" aria-label="Controles de zoom">
                <button
                  type="button"
                  onClick={() => changeGovernanceZoom(-0.25)}
                  disabled={governanceZoom <= 1}
                  aria-label="Alejar imagen"
                  title="Alejar"
                >
                  <FaMagnifyingGlassMinus />
                </button>
                <span aria-live="polite">{Math.round(governanceZoom * 100)}%</span>
                <button
                  type="button"
                  onClick={() => changeGovernanceZoom(0.25)}
                  disabled={governanceZoom >= 3}
                  aria-label="Acercar imagen"
                  title="Acercar"
                >
                  <FaMagnifyingGlassPlus />
                </button>
                <button
                  type="button"
                  onClick={() => setIsGovernanceFullscreen(false)}
                  aria-label="Cerrar imagen ampliada"
                  title="Cerrar"
                >
                  <FaXmark />
                </button>
              </div>
              <div className="diagram-fullscreen-viewport">
                <img
                  className="consent-diagram-image"
                  src="/Diagrama%20en%20blanco%20-%20P%C3%A1gina%201%20Privacy%20by%20Design%20%2B%20Data%20Governance.png"
                  alt="Diagrama de arquitectura Privacy by Design y gobernanza de datos"
                  style={{ width: `${governanceZoom * 100}%` }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Flujos;