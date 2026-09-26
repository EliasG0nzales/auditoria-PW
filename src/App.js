import React from 'react';
import './styles/Global.css';
import './App.css';

import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

import Contexto from './sections/Contexto';
import Problemas from './sections/Problemas';
import Auditoria from './sections/Auditoria';
import Clasificacion from './sections/Clasificacion';
import DPO from './sections/DPO';
import Flujos from './sections/Flujos';
import Soluciones from './sections/Soluciones';
import Conclusiones from './sections/Conclusiones';
import Equipo from './sections/Equipo';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <main>
        <div id="contexto">
          <Contexto />
        </div>
        <div id="problemas">
          <Problemas />
        </div>
        <div id="auditoria">
          <Auditoria />
        </div>
        <div id="clasificacion">
          <Clasificacion />
        </div>
        <div id="dpo">
          <DPO />
        </div>
        <div id="flujos">
          <Flujos />
        </div>
        <div id="soluciones">
          <Soluciones />
        </div>
        <div id="conclusiones">
          <Conclusiones />
        </div>
        <div id="equipo">
          <Equipo />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;