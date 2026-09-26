import React from 'react';
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
            <div className="solution-image-side">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600"
                alt="Consentimiento informado"
              />
            </div>
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
            <div className="solution-image-side">
              <img
                src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600"
                alt="Machine Learning Pipeline"
              />
            </div>
          </div>
        </div>

        {/* SOLUCIÓN 3 */}
        <div className="solution-block">
          <div className="solution-header-bar">
            <span>3</span>
            <h3>Plan de Mitigación de Accesos no Autorizados</h3>
          </div>
          <div className="security-grid">
            <div className="security-card">
              <img
                src="https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=400"
                alt="Cifrado"
              />
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
            <div className="security-card">
              <img
                src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400"
                alt="Hashing"
              />
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
            <div className="security-card">
              <img
                src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=400"
                alt="Enmascaramiento"
              />
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
            <div className="security-card">
              <img
                src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400"
                alt="RBAC"
              />
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
    </section>
  );
};

export default Soluciones;