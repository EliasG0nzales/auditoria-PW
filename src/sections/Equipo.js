import React, { useState } from 'react';
import {
  FaUsers,
  FaBookOpen,
  FaGraduationCap,
  FaCalendarDays,
  FaChevronLeft,
  FaChevronRight,
  FaFileLines,
  FaShieldHalved,
  FaChartColumn,
  FaTriangleExclamation,
} from 'react-icons/fa6';
import '../styles/Equipo.css';

const TeamMemberCard = ({ member, index }) => {
  const [activeSection, setActiveSection] = useState('#about');
  const tabs = [
    { id: '#about', label: 'PERFIL' },
    { id: '#contribution', label: 'EXPERIENCIA' },
    { id: '#skills', label: 'COMPETENCIAS' },
  ];
  const reportLinks = [
    { href: '#problemas', label: 'Problemas de auditoría', icon: FaTriangleExclamation },
    { href: '#auditoria', label: 'Resultados de auditoría', icon: FaFileLines },
    { href: '#flujos', label: 'Flujos y procesos', icon: FaChartColumn },
    { href: '#soluciones', label: 'Propuestas de solución', icon: FaShieldHalved },
  ];

  return (
    <article
      className={`team-profile-card ${activeSection !== '#about' ? 'is-active' : ''}`}
      data-state={activeSection}
    >
      <header className="team-profile-header">
        <div
          className="team-profile-cover"
          aria-hidden="true"
        />
        <img className="team-profile-avatar" src={member.avatar} alt={`Retrato de ${member.nombre}`} />
        <h3 className="team-profile-name">{member.nombre}</h3>
        <p className="team-profile-role">{member.rol}</p>
      </header>

      <div className="team-profile-main">
        <section
          className={`team-profile-section ${activeSection === '#about' ? 'is-active' : ''}`}
          id={`team-${index}-about`}
          role="tabpanel"
          aria-labelledby={`team-${index}-about-title`}
          hidden={activeSection !== '#about'}
        >
          <div className="team-profile-content">
            <h4 className="team-profile-subtitle" id={`team-${index}-about-title`}>PERFIL</h4>
            <p className="team-profile-description">{member.descripcion}</p>
            <nav className="team-profile-links" aria-label="Accesos al informe">
              {reportLinks.map((link) => {
                const LinkIcon = link.icon;
                return (
                  <a href={link.href} key={link.href} aria-label={link.label} title={link.label}>
                    <LinkIcon />
                  </a>
                );
              })}
            </nav>
          </div>
        </section>

        <section
          className={`team-profile-section ${activeSection === '#contribution' ? 'is-active' : ''}`}
          id={`team-${index}-contribution`}
          role="tabpanel"
          aria-labelledby={`team-${index}-contribution-title`}
          hidden={activeSection !== '#contribution'}
        >
          <div className="team-profile-content">
            <h4 className="team-profile-subtitle" id={`team-${index}-contribution-title`}>APORTE AL PROYECTO</h4>
            <div className="team-profile-timeline">
              <div className="team-profile-item" data-step={`0${index + 1}`}>
                <strong>{member.rol}</strong>
                <p>{member.descripcion}</p>
              </div>
            </div>
          </div>
        </section>

        <section
          className={`team-profile-section ${activeSection === '#skills' ? 'is-active' : ''}`}
          id={`team-${index}-skills`}
          role="tabpanel"
          aria-labelledby={`team-${index}-skills-title`}
          hidden={activeSection !== '#skills'}
        >
          <div className="team-profile-content">
            <h4 className="team-profile-subtitle" id={`team-${index}-skills-title`}>COMPETENCIAS</h4>
            <p className="team-profile-description">Áreas de conocimiento aplicadas al análisis y protección de datos de salud.</p>
            <div className="team-profile-skills">
              {member.skills.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </div>
        </section>

        <div className="team-profile-tabs" role="tablist" aria-label={`Secciones de ${member.nombre}`}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeSection === tab.id}
              aria-controls={`team-${index}-${tab.id.slice(1)}`}
              className={activeSection === tab.id ? 'is-active' : ''}
              onClick={() => setActiveSection(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </article>
  );
};

const Equipo = () => {
  // ============================================
  // 👇 CAMBIA LOS NOMBRES DE TU EQUIPO AQUÍ 👇
  // ============================================
  const integrantes = [
    {
      nombre: 'Elias Gonzales Jenhua',
      rol: 'Análisis Normativo y Auditoría de Datos Personales',
      descripcion:
        'Responsable de la investigación de artículos vulnerados y la auditoría de cumplimiento según la Ley 29733 y la legislación peruana.',
      avatar: '/integrante%2001.png',
      skills: ['Ley 29733', 'Compliance', 'Legislación de Datos'],
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
  const [activeMemberIndex, setActiveMemberIndex] = useState(0);
  const activeMember = integrantes[activeMemberIndex];

  const changeMember = (direction) => {
    setActiveMemberIndex((currentIndex) => (
      direction === 'next'
        ? (currentIndex + 1) % integrantes.length
        : (currentIndex - 1 + integrantes.length) % integrantes.length
    ));
  };

  return (
    <section className="section section-team team-showcase-section">
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

        <div className="team-profile-stage" aria-label="Navegación entre integrantes">
          <button
            className="team-member-switch"
            type="button"
            onClick={() => changeMember('previous')}
            aria-label="Integrante anterior"
          >
            <FaChevronLeft />
          </button>
          <div className="team-profile-current" aria-live="polite">
            <TeamMemberCard
              key={activeMember.nombre}
              member={activeMember}
              index={activeMemberIndex}
            />
            <p className="team-member-position">
              INTEGRANTE {String(activeMemberIndex + 1).padStart(2, '0')} / {String(integrantes.length).padStart(2, '0')}
            </p>
          </div>
          <button
            className="team-member-switch"
            type="button"
            onClick={() => changeMember('next')}
            aria-label="Siguiente integrante"
          >
            <FaChevronRight />
          </button>
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
