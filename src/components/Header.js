import React from 'react';
import {
  FaClipboardList,
  FaGraduationCap,
  FaLaptopCode,
  FaCalendarDays,
} from 'react-icons/fa6';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <video
        className="header-video"
        src="/principal.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="header-overlay">
        <div className="container">
          <div className="header-badge">
            <span className="header-icon">
              <FaClipboardList />
            </span>
            Informe Técnico de Auditoría
          </div>
          <h1 className="header-title">
            Auditoría y Adecuación Normativa en el Despliegue de un
            <span className="highlight">
              {' '}
              Modelo Predictivo de Salud en IA
            </span>
          </h1>
          <div className="header-meta">
            <span className="meta-item">
              <span className="meta-icon">
                <FaGraduationCap />
              </span>
              Legislación de Datos
            </span>
            <span className="meta-item">
              <span className="meta-icon">
                <FaLaptopCode />
              </span>
              Ing. Ciencia de Datos e IA
            </span>
            <span className="meta-item">
              <span className="meta-icon">
                <FaCalendarDays />
              </span>
              Semestre VIII
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;