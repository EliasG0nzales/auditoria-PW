import React, { useState, useEffect, useMemo } from 'react';
import {
  FaMapLocationDot,
  FaTriangleExclamation,
  FaMagnifyingGlassChart,
  FaChartColumn,
  FaUserShield,
  FaCodeBranch,
  FaCircleCheck,
  FaFileContract,
  FaUsers,
} from 'react-icons/fa6';
import '../styles/Navigation.css';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('contexto');

  const sections = useMemo(
    () => [
      { id: 'contexto', label: 'Contexto', icon: FaMapLocationDot },
      { id: 'problemas', label: 'Problemas', icon: FaTriangleExclamation },
      { id: 'auditoria', label: 'Auditoría', icon: FaMagnifyingGlassChart },
      { id: 'clasificacion', label: 'Clasificación', icon: FaChartColumn },
      { id: 'dpo', label: 'DPO', icon: FaUserShield },
      { id: 'flujos', label: 'Flujos', icon: FaCodeBranch },
      { id: 'soluciones', label: 'Soluciones', icon: FaCircleCheck },
      { id: 'conclusiones', label: 'Conclusiones', icon: FaFileContract },
      { id: 'equipo', label: 'Equipo', icon: FaUsers },
    ],
    []
  );

  // Detectar qué sección está visible al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <nav className="navigation">
      <div className="container">
        <div className="nav-items">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                className={`nav-btn ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => scrollToSection(section.id)}
              >
                <span className="nav-icon">
                  <Icon />
                </span>
                {section.label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;