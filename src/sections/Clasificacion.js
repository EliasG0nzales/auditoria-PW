import React from 'react';
import { FaChartColumn } from 'react-icons/fa6';
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
    },
    {
      info: 'Características demográficas',
      ejemplo: 'Edad, sexo, características poblacionales',
      clasificacion: 'Personal general',
      revela: 'Permite describir al paciente y ayudar a identificarlo',
      riesgo: 'MEDIO',
      color: '#f39c12',
    },
    {
      info: 'Ubicación del paciente',
      ejemplo: 'Coordenadas GPS, lugares visitados',
      clasificacion: 'Personal / localización',
      revela: 'Puede revelar dónde vive, trabaja o qué lugares frecuenta',
      riesgo: 'ALTO',
      color: '#e74c3c',
    },
    {
      info: 'Información económica y social',
      ejemplo: 'Historial socioeconómico, situación económica',
      clasificacion: 'Personal general',
      revela: 'Permite conocer condiciones económicas o sociales',
      riesgo: 'ALTO',
      color: '#e74c3c',
    },
    {
      info: 'Hábitos y comportamiento',
      ejemplo: 'Actividad física, sueño, alimentación',
      clasificacion: 'Puede convertirse en info. de salud',
      revela: 'Puede mostrar rutinas relacionadas con estado físico',
      riesgo: 'ALTO',
      color: '#e74c3c',
    },
    {
      info: 'Información clínica',
      ejemplo: 'Enfermedades, diagnósticos, tratamientos',
      clasificacion: 'Dato sensible',
      revela: 'Revela directamente información sobre la salud',
      riesgo: 'MUY ALTO',
      color: '#c0392b',
    },
    {
      info: 'Información biométrica',
      ejemplo: 'Características fisiológicas para identificar',
      clasificacion: 'Dato sensible',
      revela: 'Puede permitir identificar de forma única al paciente',
      riesgo: 'MUY ALTO',
      color: '#c0392b',
    },
    {
      info: 'Datos fisiológicos de wearables',
      ejemplo: 'Frecuencia cardíaca, indicadores de sueño',
      clasificacion: 'Info. relacionada con salud',
      revela: 'Puede permitir inferir condiciones de salud',
      riesgo: 'MUY ALTO',
      color: '#c0392b',
    },
  ];

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

        <div className="classification-image-row">
          <div className="class-img-card">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400"
              alt="Datos Clínicos"
            />
            <span>Datos Clínicos</span>
          </div>
          <div className="class-img-card">
            <img
              src="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400"
              alt="Wearables"
            />
            <span>Wearables</span>
          </div>
          <div className="class-img-card">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400"
              alt="Datos Socioeconómicos"
            />
            <span>Datos Socioeconómicos</span>
          </div>
        </div>

        <div className="classification-cards">
          {datos.map((d, i) => (
            <div key={i} className="class-card">
              <div
                className="class-card-header"
                style={{ borderLeftColor: d.color }}
              >
                <h4>{d.info}</h4>
                <span
                  className="risk-badge"
                  style={{ backgroundColor: d.color }}
                >
                  {d.riesgo}
                </span>
              </div>
              <div className="class-card-body">
                <div className="class-detail">
                  <span className="class-label">Ejemplo:</span>
                  <span>{d.ejemplo}</span>
                </div>
                <div className="class-detail">
                  <span className="class-label">Clasificación:</span>
                  <span className="class-tag">{d.clasificacion}</span>
                </div>
                <div className="class-detail">
                  <span className="class-label">Puede revelar:</span>
                  <span>{d.revela}</span>
                </div>
              </div>
            </div>
          ))}
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