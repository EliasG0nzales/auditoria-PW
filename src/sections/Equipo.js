import React from 'react';
import {
  FaUsers,
  FaBookOpen,
  FaGraduationCap,
  FaCalendarDays,
} from 'react-icons/fa6';
import '../styles/Equipo.css';

const Equipo = () => {
  // ============================================
  // 👇 CAMBIA LOS NOMBRES DE TU EQUIPO AQUÍ 👇
  // ============================================
  const integrantes = [
    {
      nombre: 'Nombre Integrante 1',
      rol: 'Análisis Normativo y Auditoría RGPD',
      descripcion:
        'Responsable de la investigación de artículos vulnerados y la auditoría de cumplimiento normativo según RGPD y legislación peruana.',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300',
      skills: ['RGPD', 'Compliance', 'Legislación de Datos'],
    },
    {
      nombre: 'Nombre Integrante 2',
      rol: 'Clasificación de Datos y Diseño de Flujos',
      descripcion:
        'Encargado de la clasificación de variables, diagramación de flujos de consentimiento y arquitectura Privacy by Design.',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300',
      skills: ['Data Classification', 'Privacy by Design', 'UX'],
    },
    {
      nombre: 'Nombre Integrante 3',
      rol: 'Propuestas de Solución y Seguridad',
      descripcion:
        'Desarrolló las propuestas técnicas de seguridad, Machine Unlearning y plan de mitigación de accesos no autorizados.',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300',
      skills: ['Ciberseguridad', 'MLOps', 'Data Engineering'],
    },
  ];

  return (
    <section className="section section-team">
      <div className="container">
        <div className="section-header">
          <h2>
            <span className="section-icon">
              <FaUsers />
            </span>
            Equipo de Trabajo
          </h2>
          <div className="section-line"></div>
          <p className="section-subtitle">
            Consultores de Compliance y Gobernanza de Datos en Inteligencia
            Artificial
          </p>
        </div>

        <div className="team-grid">
          {integrantes.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-card-image">
                <img src={member.avatar} alt={member.nombre} />
                <div className="team-overlay">
                  <span className="team-number">#{index + 1}</span>
                </div>
              </div>
              <div className="team-card-content">
                <h3>{member.nombre}</h3>
                <span className="team-role">{member.rol}</span>
                <p>{member.descripcion}</p>
                <div className="team-skills">
                  {member.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="course-info">
          <div className="course-detail">
            <span className="section-icon">
              <FaBookOpen />
            </span>
            <div>
              <strong>Curso:</strong> Legislación de Datos
            </div>
          </div>
          <div className="course-detail">
            <span className="section-icon">
              <FaGraduationCap />
            </span>
            <div>
              <strong>Carrera:</strong> Ing. Ciencia de Datos e Inteligencia
              Artificial
            </div>
          </div>
          <div className="course-detail">
            <span className="section-icon">
              <FaCalendarDays />
            </span>
            <div>
              <strong>Semestre:</strong> VIII
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Equipo;