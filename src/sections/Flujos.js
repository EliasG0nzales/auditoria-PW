import React, { useEffect, useState } from 'react';
import { animate } from 'animejs';
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
  const [selectedConsentStep, setSelectedConsentStep] = useState(0);
  const [selectedGovernanceStep, setSelectedGovernanceStep] = useState(0);
  const [lastSelectedDiagram, setLastSelectedDiagram] = useState(null);

  useEffect(() => {
    if (!lastSelectedDiagram || window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;

    const diagramSelector = `[data-diagram="${lastSelectedDiagram}"]`;
    const selectedIndicators = document.querySelectorAll(
      `${diagramSelector} .diagram-hotspot.is-selected span`
    );
    const selectedPanels = document.querySelectorAll(
      `${diagramSelector}.diagram-selected-step`
    );

    animate(selectedIndicators, {
      scale: [0.75, 1.2, 1],
      duration: 420,
      ease: 'out(3)',
    });
    animate(selectedPanels, {
      opacity: [0, 1],
      translateY: [9, 0],
      duration: 300,
      ease: 'out(3)',
    });
  }, [lastSelectedDiagram, selectedConsentStep, selectedGovernanceStep]);

  const selectConsentStep = (index) => {
    setSelectedConsentStep(index);
    setLastSelectedDiagram('consent');
  };

  const selectGovernanceStep = (index) => {
    setSelectedGovernanceStep(index);
    setLastSelectedDiagram('governance');
  };

  const consentSteps = [
    { title: 'Informar al paciente', description: 'Se explican con claridad los datos que se recogerán, el propósito del tratamiento y los derechos del paciente.', x: 6.2, y: 50, width: 4.4, height: 18 },
    { title: 'Solicitar consentimiento', description: 'El paciente expresa su autorización de forma explícita, libre e informada antes de utilizar sus datos.', x: 10.1, y: 50, width: 4.4, height: 18 },
    { title: 'Registrar la decisión', description: 'La organización registra la autorización y las condiciones aceptadas para demostrar que el uso está permitido.', x: 14.1, y: 50, width: 4.4, height: 18 },
    { title: 'Verificar la autorización', description: 'Se comprueba si el paciente acepta. Si no autoriza el uso, sus datos no pasan al procesamiento previsto.', x: 18.4, y: 50, width: 4.4, height: 18 },
    { title: 'Preparar y proteger los datos', description: 'Los datos autorizados se recopilan, minimizan y protegen antes de incorporarlos al flujo de análisis.', x: 28.8, y: 50, width: 4.4, height: 18 },
    { title: 'Usar los datos en el modelo', description: 'El conjunto protegido se utiliza para entrenar o ejecutar el modelo y producir una predicción.', x: 42, y: 50, width: 4.4, height: 18 },
    { title: 'Atender una solicitud del paciente', description: 'Si el paciente retira su consentimiento o ejerce sus derechos, se localizan sus datos en los sistemas.', x: 62, y: 50, width: 4.4, height: 18 },
    { title: 'Eliminar o actualizar los datos', description: 'Se eliminan los registros correspondientes y se evalúa si también deben actualizarse los datos de entrenamiento o el modelo.', x: 71, y: 50, width: 4.4, height: 18 },
    { title: 'Confirmar el cierre del proceso', description: 'La organización verifica que la solicitud se haya completado y deja constancia de las acciones realizadas.', x: 84, y: 50, width: 4.4, height: 18 },
  ];

  const governanceSteps = [
    { title: 'Iniciar el tratamiento', description: 'Se define el propósito y se incorporan únicamente fuentes de datos necesarias para el sistema.', x: 16, y: 5, width: 26, height: 3 },
    { title: 'Recibir las fuentes de datos', description: 'La información clínica, de wearables y otras fuentes ingresa mediante conexiones seguras y con autenticación.', x: 16, y: 11, width: 26, height: 3 },
    { title: 'Clasificar los datos', description: 'Se identifican los datos personales, de salud y biométricos para determinar su sensibilidad y nivel de riesgo.', x: 16, y: 17, width: 26, height: 3 },
    { title: 'Minimizar y seudonimizar', description: 'Se reducen los datos a lo necesario y se separan los identificadores directos para limitar la reidentificación.', x: 16, y: 23, width: 26, height: 3 },
    { title: 'Aplicar controles de acceso', description: 'El acceso basado en roles permite que cada persona consulte únicamente la información necesaria para su trabajo.', x: 16, y: 29, width: 26, height: 3 },
    { title: 'Proteger y almacenar', description: 'Los datos se cifran en tránsito y en reposo, y se conservan en entornos con acceso controlado.', x: 16, y: 35, width: 26, height: 3 },
    { title: 'Entrenar y validar el modelo', description: 'El modelo se desarrolla y valida utilizando datos protegidos y controles de privacidad incorporados al proceso.', x: 16, y: 42, width: 26, height: 3 },
    { title: 'Desplegar el sistema', description: 'Antes de su uso, se revisan los riesgos, las autorizaciones y las medidas de seguridad del modelo.', x: 16, y: 50, width: 26, height: 3 },
    { title: 'Monitorear y auditar', description: 'Se registran accesos y actividad para detectar anomalías, revisar el cumplimiento y responder a incidentes.', x: 16, y: 58, width: 26, height: 3 },
    { title: 'Gestionar cambios y solicitudes', description: 'Las solicitudes de derechos y los cambios en el tratamiento activan las tareas de revisión, actualización o eliminación pertinentes.', x: 35, y: 66, width: 28, height: 3 },
    { title: 'Retener o eliminar', description: 'Al concluir el periodo de conservación o cuando corresponda, los datos se purgan de forma controlada.', x: 16, y: 94, width: 26, height: 3 },
  ];

  const interactiveDiagram = (src, alt, diagramName, scale, steps, selectedIndex, onSelect) => (
    <>
      <div className="diagram-image-viewport">
        <div
          className="diagram-hotspot-stage"
          data-diagram={diagramName}
          style={{ width: `${scale * 100}%` }}
        >
          <img className="consent-diagram-image" src={src} alt={alt} />
          {steps.map((step, index) => (
            <button
              className={`diagram-hotspot${selectedIndex === index ? ' is-selected' : ''}`}
              key={step.title}
              type="button"
              style={{
                left: `${step.x}%`,
                top: `${step.y}%`,
                width: `${step.width}%`,
                height: `${step.height}%`,
              }}
              onClick={() => onSelect(index)}
              aria-label={`Paso ${index + 1}: ${step.title}`}
              aria-pressed={selectedIndex === index}
              title={step.title}
            >
              <span>{index + 1}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="diagram-selected-step" data-diagram={diagramName} aria-live="polite">
        <span className="diagram-selected-step-number">PASO {String(selectedIndex + 1).padStart(2, '0')}</span>
        <div>
          <h4>{steps[selectedIndex].title}</h4>
          <p>{steps[selectedIndex].description}</p>
        </div>
      </div>
    </>
  );

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
            Derechos ARCO y protección de datos personales
          </h3>
          <div className="consent-content-frame">
            {imageControls()}
            {interactiveDiagram(
              '/Diagrama%20en%20blanco%20-%20P%C3%A1gina%201%20Gr%C3%A1fico%201_%20Consentimiento%20y%20ciclo%20de%20vida%20del%20dato.png',
              'Diagrama interactivo del consentimiento informado y el ciclo de vida de los datos',
              'consent',
              zoom,
              consentSteps,
              selectedConsentStep,
              selectConsentStep
            )}
            <p className="diagram-description">
              Resume el ciclo del consentimiento informado: desde la autorización del paciente y el uso protegido de sus datos hasta la atención de solicitudes de retiro o eliminación.
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
              {interactiveDiagram(
                '/Diagrama%20en%20blanco%20-%20P%C3%A1gina%201%20Gr%C3%A1fico%201_%20Consentimiento%20y%20ciclo%20de%20vida%20del%20dato.png',
                'Diagrama interactivo del consentimiento informado y el ciclo de vida de los datos',
                'consent',
                zoom,
                consentSteps,
                selectedConsentStep,
                selectConsentStep
              )}
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
            <div className="diagram-image-controls" aria-label="Controles de imagen">
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
                onClick={() => {
                  setGovernanceZoom(1);
                  setIsGovernanceFullscreen(true);
                }}
                aria-label="Ampliar diagrama"
                title="Pantalla completa"
              >
                <FaExpand />
              </button>
            </div>
            {interactiveDiagram(
              '/Diagrama%20en%20blanco%20-%20P%C3%A1gina%201%20Privacy%20by%20Design%20%2B%20Data%20Governance.png',
              'Diagrama interactivo de arquitectura Privacy by Design y gobernanza de datos',
              'governance',
              governanceZoom,
              governanceSteps,
              selectedGovernanceStep,
              selectGovernanceStep
            )}
            <p className="diagram-description">
              Resume las salvaguardas del pipeline de IA: clasificación y minimización de datos, seudonimización, cifrado, acceso por roles y monitoreo hasta su eliminación.
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
              {interactiveDiagram(
                '/Diagrama%20en%20blanco%20-%20P%C3%A1gina%201%20Privacy%20by%20Design%20%2B%20Data%20Governance.png',
                'Diagrama interactivo de arquitectura Privacy by Design y gobernanza de datos',
                'governance',
                governanceZoom,
                governanceSteps,
                selectedGovernanceStep,
                selectGovernanceStep
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Flujos;