import React, { useEffect, useRef } from 'react';
import {
  FaClipboardList,
  FaGraduationCap,
  FaLaptopCode,
  FaCalendarDays,
  FaArrowRight,
} from 'react-icons/fa6';
import '../styles/Header.css';

const Header = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncPlayback = () => {
      if (motionPreference.matches) {
        video.pause();
      } else if (video.paused) {
        video.play().catch(() => {});
      }
    };

    syncPlayback();
    if (motionPreference.addEventListener) {
      motionPreference.addEventListener('change', syncPlayback);
      return () => motionPreference.removeEventListener('change', syncPlayback);
    }

    motionPreference.addListener(syncPlayback);
    return () => motionPreference.removeListener(syncPlayback);
  }, []);

  return (
    <header className="header">
      <video
        ref={videoRef}
        className="header-video"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260912_104303_0c6d60b2-9353-408e-9449-585108a22fb5.mp4"
        poster="https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/130837c4-0244-4f37-9c61-8d801d93fd29.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <div className="header-veil" aria-hidden="true" />
      <div className="header-overlay">
        <div className="container header-content">
          <div className="header-main">
            <div className="header-badge">
              <span className="header-icon">
                <FaClipboardList />
              </span>
              Informe Técnico de Auditoría
            </div>
            <h1 className="header-title">
              Auditoría y Adecuación Normativa en el Despliegue de un
              <span className="highlight">Modelo Predictivo de Salud en IA</span>
            </h1>
            <p className="header-description">
              Privacidad, seguridad y cumplimiento en cada etapa del uso de datos de salud.
            </p>
            <a className="header-cta" href="#contexto">
              Explorar la auditoría
              <FaArrowRight aria-hidden="true" />
            </a>
          </div>
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