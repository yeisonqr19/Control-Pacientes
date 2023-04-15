import React, { useState, useEffect } from 'react';
import { Header, Form, ListaPacientes } from './components';

export const AdminPacientes = () => {
  const [pacientes, setPacientes] = useState([]);

  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const obtenerPacientes = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];

      setPacientes(pacientesLS);
    };

    obtenerPacientes();
  }, []);

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    const pacientesFiltrados = pacientes.filter(
      (paciente) => paciente.id !== id
    );

    setPacientes(pacientesFiltrados);
  };

  return (
    <div className="container mx-auto mt-11">
      <Header />
      <div className="mt-12 md:flex">
        <Form
          setPacientes={setPacientes}
          paciente={paciente}
          pacientes={pacientes}
          setPaciente={setPaciente}
        />
        <ListaPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
};
