import React, { useState } from 'react';
import { FaChartColumn, FaArrowLeft, FaArrowRight, FaPlus } from 'react-icons/fa6';
import '../styles/Clasificacion.css';

const Clasificacion = () => {
  const datos = [
    {
      info: 'Identificación del paciente',
      ejemplo: 'Nombre, DNI/Cédula',
      clasificacion: 'Personal general',
      revela: 'Permite saber exactamente quién es el titular',
      riesgo: 'ALTO',
      color: '#e74c3c',
      descripcion: 'Los identificadores directos conectan el expediente clínico con una persona concreta. Deben separarse de los datos usados para análisis y limitarse al personal autorizado.',
      imagen: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1600&q=85',
    },
    {
      info: 'Características demográficas',
      ejemplo: 'Edad, sexo, características poblacionales',
      clasificacion: 'Personal general',
      revela: 'Permite describir al paciente y ayudar a identificarlo',
      riesgo: 'MEDIO',
      color: '#f39c12',
      descripcion: 'La edad y otras características demográficas ayudan a contextualizar la atención, pero su combinación con otros atributos puede facilitar la reidentificación.',
      imagen: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=85',
    },
    {
      info: 'Ubicación del paciente',
      ejemplo: 'Coordenadas GPS, lugares visitados',
      clasificacion: 'Personal / localización',
      revela: 'Puede revelar dónde vive, trabaja o qué lugares frecuenta',
      riesgo: 'ALTO',
      color: '#e74c3c',
      descripcion: 'Los patrones de ubicación pueden revelar domicilio, trabajo, visitas médicas y rutinas. Conviene reducir la precisión y conservarlos solo durante el tiempo necesario.',
      imagen: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=85',
    },
    {
      info: 'Información económica y social',
      ejemplo: 'Historial socioeconómico, situación económica',
      clasificacion: 'Personal general',
      revela: 'Permite conocer condiciones económicas o sociales',
      riesgo: 'ALTO',
      color: '#e74c3c',
      descripcion: 'La información económica y social puede exponer situaciones de vulnerabilidad y afectar decisiones automatizadas sobre acceso, prioridad o cobertura de servicios.',
      imagen: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=85',
    },
    {
      info: 'Hábitos y comportamiento',
      ejemplo: 'Actividad física, sueño, alimentación',
      clasificacion: 'Puede convertirse en info. de salud',
      revela: 'Puede mostrar rutinas relacionadas con estado físico',
      riesgo: 'ALTO',
      color: '#e74c3c',
      descripcion: 'El sueño, la alimentación y la actividad permiten inferir estado físico y rutinas personales. Al asociarse con una persona pueden convertirse en información de salud.',
      imagen: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=85',
    },
    {
      info: 'Información clínica',
      ejemplo: 'Enfermedades, diagnósticos, tratamientos',
      clasificacion: 'Dato sensible',
      revela: 'Revela directamente información sobre la salud',
      riesgo: 'MUY ALTO',
      color: '#c0392b',
      descripcion: 'Diagnósticos y tratamientos son datos de salud especialmente sensibles. Su uso requiere una base jurídica aplicable, controles estrictos y acceso limitado por función.',
      imagen: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1600&q=85',
    },
    {
      info: 'Información biométrica',
      ejemplo: 'Características fisiológicas para identificar',
      clasificacion: 'Dato sensible',
      revela: 'Puede permitir identificar de forma única al paciente',
      riesgo: 'MUY ALTO',
      color: '#c0392b',
      descripcion: 'Una huella, rostro o patrón fisiológico puede identificar de forma única. Es necesario evitar su uso como identificador cuando existan alternativas menos intrusivas.',
      imagen: 'https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&w=1600&q=85',
    },
    {
      info: 'Datos fisiológicos de wearables',
      ejemplo: 'Frecuencia cardíaca, indicadores de sueño',
      clasificacion: 'Info. relacionada con salud',
      revela: 'Puede permitir inferir condiciones de salud',
      riesgo: 'MUY ALTO',
      color: '#c0392b',
      descripcion: 'Los dispositivos portátiles generan mediciones continuas que pueden revelar condiciones o cambios de salud. Deben protegerse durante la captura, transmisión y almacenamiento.',
      imagen: 'https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&w=1600&q=85',
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [transition, setTransition] = useState(null);

  const navigate = (direction) => {
    if (transition) return;
    const nextIndex = direction === 'next'
      ? (activeIndex + 1) % datos.length
      : (activeIndex - 1 + datos.length) % datos.length;
    const nextTransition = {
      current: activeIndex,
      next: nextIndex,
      direction,
      phase: 'preparing',
    };

    setTransition(nextTransition);
    window.requestAnimationFrame(() => {
      setTransition({ ...nextTransition, phase: 'moving' });
      window.setTimeout(() => {
        setActiveIndex(nextIndex);
        setTransition(null);
      }, 460);
    });
  };

  return (
    <section className="section section-dark">
      <div className="container">
        <div className="section-header">
          <h2>
            <span className="section-icon">
              <FaChartColumn />
            </span>{' '}
            Matriz de Clasificación de Datos
          </h2>
          <div className="section-line"></div>
          <p className="section-subtitle">
            Dato → qué representa → qué puede revelar → riesgo
          </p>
        </div>

        <div
          className="classification-showcase"
          role="region"
          aria-label="Carrusel de categorías de datos"
          aria-roledescription="carrusel"
        >
          {datos.map((dato, index) => {
            let status = index === activeIndex ? 'active' : 'inactive';
            if (transition) {
              if (index === transition.current) {
                status = transition.direction === 'next' ? 'before' : 'after';
              } else if (index === transition.next) {
                status = transition.phase === 'preparing'
                  ? `becoming-active-from-${transition.direction === 'next' ? 'after' : 'before'}`
                  : 'active';
              }
            }

            return (
              <article
                className="classification-slide"
                data-status={status}
                aria-hidden={status !== 'active'}
                aria-label={`${dato.info}, categoría ${index + 1} de ${datos.length}`}
                key={dato.info}
              >
                <div
                  className="classification-slide-image classification-slide-section"
                  style={{ backgroundImage: `url("${dato.imagen}")` }}
                  role="img"
                  aria-label={`Imagen relacionada con ${dato.info}`}
                />
                <div className="classification-slide-description classification-slide-section">
                  <p>{dato.descripcion}</p>
                  <div className="classification-slide-meta">
                    <span>{dato.clasificacion}</span>
                    <span style={{ color: dato.color }}>{dato.riesgo}</span>
                  </div>
                </div>
                <div className="classification-slide-title classification-slide-section">
                  <div>
                    <span className="classification-slide-count">DATO {String(index + 1).padStart(2, '0')} / {String(datos.length).padStart(2, '0')}</span>
                    <h3>{dato.info}</h3>
                    <p>Ejemplo: {dato.ejemplo}</p>
                  </div>
                  <FaPlus aria-hidden="true" />
                </div>
                <div className="classification-slide-nav classification-slide-section">
                  <button
                    className="classification-slide-nav-button"
                    type="button"
                    onClick={() => navigate('previous')}
                    aria-label="Categoría anterior"
                    disabled={Boolean(transition)}
                    tabIndex={status === 'active' ? 0 : -1}
                  >
                    <FaArrowLeft />
                  </button>
                  <button
                    className="classification-slide-nav-button"
                    type="button"
                    onClick={() => navigate('next')}
                    aria-label="Siguiente categoría"
                    disabled={Boolean(transition)}
                    tabIndex={status === 'active' ? 0 : -1}
                  >
                    <FaArrowRight />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <div className="classification-note">
          <blockquote>
            "El nivel de riesgo aumenta cuando los datos pueden identificar a
            una persona, revelar información sensible o generar consecuencias
            relevantes a partir de las predicciones realizadas por el sistema de
            inteligencia artificial."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Clasificacion;
