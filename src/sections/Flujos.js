import React from 'react';
import {
  FaArrowRight,
  FaUser,
  FaFileLines,
  FaHand,
  FaCircleQuestion,
  FaRotate,
  FaRobot,
  FaChartColumn,
  FaBell,
  FaTrashCan,
  FaCircleCheck,
  FaBuildingColumns,
  FaNetworkWired,
  FaShieldHalved,
  FaKey,
  FaDatabase,
  FaCloudArrowUp,
  FaBrain,
  FaGaugeHigh,
  FaUsers,
  FaHourglassHalf,
  FaRightLong,
} from 'react-icons/fa6';
import '../styles/Flujos.css';

const Flujos = () => {
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
        <div className="diagram-container">
          <h3 className="diagram-title">
            <span className="section-icon">
              <FaFileLines />
            </span>
            Gráfico 1: Flujo de Consentimiento Informado y Gestión de
            Derechos ARCO/RGPD
          </h3>
          <div className="flow-diagram">
            <div className="flow-row">
              <div className="flow-node flow-start">
                <span className="flow-emoji"><FaUser /></span>
                <span>Usuario accede a la plataforma</span>
              </div>
              <div className="flow-arrow"><FaArrowRight /></div>
              <div className="flow-node flow-process">
                <span className="flow-emoji"><FaFileLines /></span>
                <span>Se presenta información clara y detallada</span>
              </div>
              <div className="flow-arrow"><FaArrowRight /></div>
              <div className="flow-node flow-decision">
                <span className="flow-emoji"><FaHand /></span>
                <span>Consentimiento explícito desagregado</span>
              </div>
            </div>

            <div className="flow-connector"><FaRightLong /></div>

            <div className="flow-row">
              <div className="flow-node flow-decision">
                <span className="flow-emoji"><FaCircleQuestion /></span>
                <span>¿Acepta?</span>
              </div>
              <div className="flow-branch">
                <div className="flow-branch-item">
                  <span className="branch-label yes">SÍ ↓</span>
                  <div className="flow-node flow-process small">
                    <span>Registro con timestamp y versión</span>
                  </div>
                </div>
                <div className="flow-branch-item">
                  <span className="branch-label no">NO ↓</span>
                  <div className="flow-node flow-end small">
                    <span>Acceso limitado / No se recopilan datos</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flow-connector"><FaRightLong /></div>

            <div className="flow-row">
              <div className="flow-node flow-process">
                <span className="flow-emoji"><FaRotate /></span>
                <span>Captura y procesamiento en pipeline ML</span>
              </div>
              <div className="flow-arrow"><FaArrowRight /></div>
              <div className="flow-node flow-process">
                <span className="flow-emoji"><FaRobot /></span>
                <span>Entrenamiento del modelo</span>
              </div>
              <div className="flow-arrow"><FaArrowRight /></div>
              <div className="flow-node flow-process">
                <span className="flow-emoji"><FaChartColumn /></span>
                <span>Inferencia y predicciones</span>
              </div>
            </div>

            <div className="flow-connector"><FaRightLong /></div>

            <div className="flow-row">
              <div className="flow-node flow-warning">
                <span className="flow-emoji"><FaBell /></span>
                <span>Solicitud de revocación del usuario</span>
              </div>
              <div className="flow-arrow"><FaArrowRight /></div>
              <div className="flow-node flow-process">
                <span className="flow-emoji"><FaTrashCan /></span>
                <span>Machine Unlearning / Purga de datos</span>
              </div>
              <div className="flow-arrow"><FaArrowRight /></div>
              <div className="flow-node flow-end">
                <span className="flow-emoji"><FaCircleCheck /></span>
                <span>Confirmación de eliminación al usuario</span>
              </div>
            </div>
          </div>
        </div>

        {/* GRÁFICO 2 */}
        <div className="diagram-container">
          <h3 className="diagram-title">
            <span className="section-icon">
              <FaBuildingColumns />
            </span>
            Gráfico 2: Arquitectura de Seguridad y Gobernanza de Datos -
            Privacy by Design Pipeline
          </h3>
          <div className="architecture-diagram">
            <div className="arch-layer">
              <div className="arch-layer-title">
                <span className="section-icon"><FaNetworkWired /></span>
                Capa de Ingesta
              </div>
              <div className="arch-components">
                <div className="arch-component">
                  <span><FaShieldHalved /> Cifrado en tránsito (TLS 1.3)</span>
                </div>
                <div className="arch-component">
                  <span><FaKey /> Autenticación API Key + OAuth 2.0</span>
                </div>
                <div className="arch-component">
                  <span><FaFileLines /> Logging de acceso</span>
                </div>
              </div>
            </div>

            <div className="arch-arrow"><FaRightLong /></div>

            <div className="arch-layer">
              <div className="arch-layer-title">
                <span className="section-icon"><FaRotate /></span>
                Capa de Preprocesamiento
              </div>
              <div className="arch-components">
                <div className="arch-component highlight-comp">
                  <span><FaDatabase /> Seudonimización (k-anonimato)</span>
                </div>
                <div className="arch-component highlight-comp">
                  <span><FaShieldHalved /> Hashing de identificadores (SHA-256)</span>
                </div>
                <div className="arch-component">
                  <span><FaUser /> Enmascaramiento de datos sensibles</span>
                </div>
              </div>
            </div>

            <div className="arch-arrow"><FaRightLong /></div>

            <div className="arch-layer">
              <div className="arch-layer-title">
                <span className="section-icon"><FaDatabase /></span>
                Capa de Almacenamiento
              </div>
              <div className="arch-components">
                <div className="arch-component">
                  <span><FaShieldHalved /> Cifrado en reposo (AES-256)</span>
                </div>
                <div className="arch-component highlight-comp">
                  <span><FaUsers /> RBAC - Control de Acceso por Roles</span>
                </div>
                <div className="arch-component">
                  <span><FaHourglassHalf /> Políticas de retención automática</span>
                </div>
              </div>
            </div>

            <div className="arch-arrow"><FaRightLong /></div>

            <div className="arch-layer">
              <div className="arch-layer-title">
                <span className="section-icon"><FaBrain /></span>
                Capa de ML/Entrenamiento
              </div>
              <div className="arch-components">
                <div className="arch-component">
                  <span><FaGaugeHigh /> Differential Privacy</span>
                </div>
                <div className="arch-component">
                  <span><FaCloudArrowUp /> Modelos entrenados sin PII</span>
                </div>
                <div className="arch-component highlight-comp">
                  <span><FaTrashCan /> Machine Unlearning Protocol</span>
                </div>
              </div>
            </div>

            <div className="arch-arrow"><FaRightLong /></div>

            <div className="arch-layer">
              <div className="arch-layer-title">
                <span className="section-icon"><FaCloudArrowUp /></span>
                Capa de Despliegue (API)
              </div>
              <div className="arch-components">
                <div className="arch-component">
                  <span><FaShieldHalved /> API Gateway con Rate Limiting</span>
                </div>
                <div className="arch-component">
                  <span><FaChartColumn /> Monitoreo y auditoría continua</span>
                </div>
                <div className="arch-component">
                  <span><FaTrashCan /> Purga periódica programada</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Flujos;