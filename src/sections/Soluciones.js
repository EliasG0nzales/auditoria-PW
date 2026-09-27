import React, { useEffect } from 'react';
import {
  FaCircleCheck,
  FaDisplay,
  FaHospital,
  FaTriangleExclamation,
  FaArrowRotateRight,
  FaCalendarDays,
  FaFileCircleCheck,
  FaShieldHalved,
  FaHashtag,
  FaMasksTheater,
  FaKey,
  FaTrashCan,
} from 'react-icons/fa6';
import '../styles/Soluciones.css';

const Soluciones = () => {
  useEffect(() => {
    const videos = document.querySelectorAll('.solution-autoplay-video');

    if (!('IntersectionObserver' in window)) {
      videos.forEach((video) => video.play().catch(() => {}));
      return () => videos.forEach((video) => video.pause());
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.play().catch(() => {});
        } else {
          entry.target.pause();
        }
      });
    }, { threshold: 0.4 });

    videos.forEach((video) => observer.observe(video));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h2>
            <span className="section-icon">
              <FaCircleCheck />
            </span>
            Diagnóstico y Propuestas de Solución
          </h2>
          <div className="section-line"></div>
        </div>

        {/* SOLUCIÓN 1 */}
        <div className="solution-block">
          <div className="solution-header-bar">
            <span>1</span>
            <h3>Mecanismo de Consentimiento Informado para IA</h3>
          </div>
          <div className="solution-content-grid">
            <figure className="solution-video-side">
              <video className="solution-autoplay-video" muted loop preload="metadata" playsInline aria-label="Mecanismo de Consentimiento Informado para IA">
                <source src="/Mecanismo%20de%20Consentimiento%20Informado%20para%20IA.mp4" type="video/mp4" />
                Tu navegador no puede reproducir este video.
              </video>
            </figure>
            <div className="solution-text-side">
              <h4>
                <span className="section-icon">
                  <FaDisplay />
                </span>
                Diseño de Interfaz UX
              </h4>
              <div className="consent-mockup">
                <div className="mockup-header">
                  <h5>
                    <span className="section-icon">
                      <FaHospital />
                    </span>
                    HealthAnalytics AI - Consentimiento de Datos
                  </h5>
                </div>
                <div className="mockup-body">
                  <p className="mockup-text">
                    Estimado paciente, solicitamos su autorización explícita
                    para:
                  </p>
                  <div className="consent-item">
                    <input type="checkbox" disabled />
                    <label>
                      <span className="section-icon">
                        <FaCircleCheck />
                      </span>
                      Recopilar sus datos clínicos para análisis predictivo
                    </label>
                  </div>
                  <div className="consent-item">
                    <input type="checkbox" disabled />
                    <label>
                      <span className="section-icon">
                        <FaCircleCheck />
                      </span>
                      Utilizar datos biométricos de su wearable
                    </label>
                  </div>
                  <div className="consent-item">
                    <input type="checkbox" disabled />
                    <label>
                      <span className="section-icon">
                        <FaCircleCheck />
                      </span>
                      Entrenar modelos de IA con sus datos anonimizados
                    </label>
                  </div>
                  <div className="consent-item">
                    <input type="checkbox" disabled />
                    <label>
                      <span className="section-icon">
                        <FaCircleCheck />
                      </span>
                      Compartir resultados con su médico tratante
                    </label>
                  </div>
                  <p className="mockup-note">
                    <span className="section-icon">
                      <FaTriangleExclamation />
                    </span>
                    Ninguna casilla viene premarcada. Puede revocar su
                    consentimiento en cualquier momento.
                  </p>
                </div>
              </div>
              <div className="solution-features">
                <div className="feature">
                  <span className="section-icon">
                    <FaCircleCheck />
                  </span>
                  Consentimiento granular y desagregado por finalidad
                </div>
                <div className="feature">
                  <span className="section-icon">
                    <FaCircleCheck />
                  </span>
                  Lenguaje claro y accesible (no legal)
                </div>
                <div className="feature">
                  <span className="section-icon">
                    <FaCircleCheck />
                  </span>
                  Registro con timestamp y versión del documento
                </div>
                <div className="feature">
                  <span className="section-icon">
                    <FaCircleCheck />
                  </span>
                  Opción de revocación accesible en todo momento
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SOLUCIÓN 2 */}
        <div className="solution-block">
          <div className="solution-header-bar">
            <span>2</span>
            <h3>Estrategia de Retención y Eliminación en Modelos de ML</h3>
          </div>
          <div className="solution-content-grid reverse">
            <div className="solution-text-side">
              <h4>
                <span className="section-icon">
                  <FaArrowRotateRight />
                </span>
                Machine Unlearning Protocol
              </h4>
              <div className="retention-policy">
                <div className="policy-item">
                  <div className="policy-icon">
                    <FaCalendarDays />
                  </div>
                  <div>
                    <strong>Retención máxima:</strong> 24 meses desde la última
                    actividad
                  </div>
                </div>
                <div className="policy-item">
                  <div className="policy-icon">
                    <FaArrowRotateRight />
                  </div>
                  <div>
                    <strong>Re-entrenamiento periódico:</strong> Cada 6 meses
                    sin datos revocados
                  </div>
                </div>
                <div className="policy-item">
                  <div className="policy-icon">
                    <FaTrashCan />
                  </div>
                  <div>
                    <strong>Purga automática:</strong> Eliminación tras
                    vencimiento del período
                  </div>
                </div>
                <div className="policy-item">
                  <div className="policy-icon">
                    <FaFileCircleCheck />
                  </div>
                  <div>
                    <strong>Certificado de eliminación:</strong> Evidencia para
                    el titular
                  </div>
                </div>
                <div className="policy-item">
                  <div className="policy-icon">
                    <FaShieldHalved />
                  </div>
                  <div>
                    <strong>Verificación:</strong> Auditoría post-eliminación
                    para confirmar no persistencia
                  </div>
                </div>
              </div>
            </div>
            <figure className="solution-video-side">
              <video className="solution-autoplay-video" muted loop preload="metadata" playsInline aria-label="Estrategia de Retención y Eliminación en Modelos de ML">
                <source src="/Estrategia%20de%20Retenci%C3%B3n%20y%20Eliminaci%C3%B3n%20en%20Modelos%20de%20ML.mp4" type="video/mp4" />
                Tu navegador no puede reproducir este video.
              </video>
            </figure>
          </div>
        </div>

        {/* SOLUCIÓN 3 */}
        <div className="solution-block">
          <div className="solution-header-bar">
            <span>3</span>
            <h3>Plan de Mitigación de Accesos no Autorizados</h3>
          </div>
          <div className="security-grid">
            <div className="security-card" tabIndex="0">
              <figure className="security-video">
                <video className="solution-autoplay-video" muted loop preload="metadata" playsInline aria-label="Cifrado">
                  <source src="/cifrado.mp4" type="video/mp4" />
                  Tu navegador no puede reproducir este video.
                </video>
              </figure>
              <div className="security-card-content">
                <h4>
                  <span className="section-icon">
                    <FaShieldHalved />
                  </span>
                  Cifrado
                </h4>
                <ul>
                  <li>TLS 1.3 para datos en tránsito</li>
                  <li>AES-256 para datos en reposo</li>
                  <li>Cifrado de campo para datos sensibles</li>
                </ul>
              </div>
            </div>
            <div className="security-card" tabIndex="0">
              <figure className="security-video">
                <video className="solution-autoplay-video" muted loop preload="metadata" playsInline aria-label="Hashing">
                  <source src="/haching.mp4" type="video/mp4" />
                  Tu navegador no puede reproducir este video.
                </video>
              </figure>
              <div className="security-card-content">
                <h4>
                  <span className="section-icon">
                    <FaHashtag />
                  </span>
                  Hashing
                </h4>
                <ul>
                  <li>SHA-256 para identificadores directos</li>
                  <li>Salt único por registro</li>
                  <li>Separación de tablas de mapping</li>
                </ul>
              </div>
            </div>
            <div className="security-card" tabIndex="0">
              <figure className="security-video">
                <video className="solution-autoplay-video" muted loop preload="metadata" playsInline aria-label="Enmascaramiento">
                  <source src="/enmascaramiento.mp4" type="video/mp4" />
                  Tu navegador no puede reproducir este video.
                </video>
              </figure>
              <div className="security-card-content">
                <h4>
                  <span className="section-icon">
                    <FaMasksTheater />
                  </span>
                  Enmascaramiento
                </h4>
                <ul>
                  <li>Enmascaramiento dinámico según rol</li>
                  <li>Datos sintéticos para desarrollo</li>
                  <li>k-anonimato (k≥5)</li>
                </ul>
              </div>
            </div>
            <div className="security-card" tabIndex="0">
              <figure className="security-video">
                <video className="solution-autoplay-video" muted loop preload="metadata" playsInline aria-label="RBAC">
                  <source src="/RBAC.mp4" type="video/mp4" />
                  Tu navegador no puede reproducir este video.
                </video>
              </figure>
              <div className="security-card-content">
                <h4>
                  <span className="section-icon">
                    <FaKey />
                  </span>
                  RBAC
                </h4>
                <ul>
                  <li>Principio de mínimo privilegio</li>
                  <li>Roles: Admin, DPO, Data Scientist, Viewer</li>
                  <li>Auditoría de accesos en tiempo real</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Soluciones;