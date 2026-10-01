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

const problemas = [
  {
    icon: FaShieldHalved,
    categoria: 'Confidencialidad y datos sensibles',
    titulo: 'Datos de salud sin anonimización',
    severidad: 'Crítico',
    resumen: 'Los datos sensibles no cuentan con protección suficiente frente a la reidentificación.',
    descripcion: 'La combinación de información clínica y demográfica puede volver a vincular los registros con un paciente.',
    riesgoBreve: 'Exposición de información médica, reidentificación y acceso indebido.',
    medidasBreves: 'Minimizar y seudonimizar los datos; separar las claves y cifrar la información.',
    baseLegalBreve: 'Ley 29733: arts. 2.5 y 13.6 (datos sensibles) y art. 9 (seguridad); Reglamento: medidas de seguridad y protección desde el diseño.',
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
    severidad: 'Crítico',
    resumen: 'La aceptación premarcada no demuestra una decisión libre y específica del paciente.',
    descripcion: 'Una sola aceptación agrupa finalidades y no registra una acción afirmativa por cada uso de datos.',
    riesgoBreve: 'Tratamiento sin consentimiento válido cuando este sea la base jurídica.',
    medidasBreves: 'Desmarcar las opciones por defecto, separar finalidades y habilitar una revocación sencilla.',
    baseLegalBreve: 'Ley 29733: arts. 5 y 13 (consentimiento informado) y art. 13.6 (datos sensibles); Reglamento: condiciones y revocación.',
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
    severidad: 'Alto',
    resumen: 'No existe un flujo claro para localizar y eliminar los datos cuando corresponde.',
    descripcion: 'La solicitud puede no alcanzar las copias, sistemas activos o conjuntos de entrenamiento.',
    riesgoBreve: 'Conservación excesiva y solicitudes de cancelación sin atender.',
    medidasBreves: 'Inventariar sistemas y copias; documentar solicitudes y verificar la purga antes de responder.',
    baseLegalBreve: 'Ley 29733: art. 10 (conservación limitada) y arts. 20–23 (derechos ARCO); Reglamento: procedimientos y plazos aplicables.',
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
    severidad: 'Crítico',
    resumen: 'Los perfiles técnicos pueden consultar identificadores que no necesitan para su función.',
    descripcion: 'El pipeline no limita de forma suficiente el acceso según las responsabilidades de cada perfil.',
    riesgoBreve: 'Consulta, extracción o divulgación no autorizada de datos personales.',
    medidasBreves: 'Aplicar mínimo privilegio, separar identificadores y auditar periódicamente los permisos.',
    baseLegalBreve: 'Ley 29733: art. 9 (seguridad) y Reglamento: controles de acceso, trazabilidad y deber de confidencialidad.',
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

        <div className="problems-overview" aria-label="Resumen de los cuatro hallazgos">
          {problemas.map((item, index) => {
            const Icon = item.icon;

            return (
              <article className="problem-overview-item" key={item.titulo}>
                <header className="problem-overview-header">
                  <span className="problem-overview-icon"><Icon /></span>
                  <div>
                    <span className="problem-overview-category">HALLAZGO {String(index + 1).padStart(2, '0')} · {item.categoria}</span>
                    <h3>{item.titulo}</h3>
                  </div>
                  <span className={`severity-badge severity-${item.severidad.toLowerCase()}`}>
                    {item.severidad}
                  </span>
                </header>
                <p className="problem-overview-summary">{item.resumen}</p>
                <dl className="problem-overview-details">
                  <div>
                    <dt>Descripción</dt>
                    <dd>{item.descripcion}</dd>
                  </div>
                  <div className="problem-overview-risk">
                    <dt>Riesgo</dt>
                    <dd>{item.riesgoBreve}</dd>
                  </div>
                  <div>
                    <dt>Medida clave</dt>
                    <dd>{item.medidasBreves}</dd>
                  </div>
                  <div>
                    <dt><FaFileLines aria-hidden="true" /> Base legal peruana</dt>
                    <dd>{item.baseLegalBreve}</dd>
                  </div>
                </dl>
              </article>
            );
          })}
          </div>

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
