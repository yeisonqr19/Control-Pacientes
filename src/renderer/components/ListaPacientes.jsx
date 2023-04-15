import React from 'react';
import { Paciente } from '../components';
import { v4 as uuidv4 } from 'uuid';

export const ListaPacientes = ({
  pacientes,
  setPaciente,
  eliminarPaciente,
}) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-scroll">
      {pacientes.length === 0 ? (
        <>
          <h2 className="font-black md:text-2xl lg:text-4xl text-xl text-center">
            Agrega tus Pacientes
          </h2>
          <p className="md:text-lg lg:text-2xl mt-5 text-center mb-10">
            Agrega tus primeros pacientes{' '}
            <span className="text-indigo-600 font-bold">
              Para Administralos Aqui
            </span>
          </p>
        </>
      ) : (
        <>
          <h2 className="font-black md:text-2xl lg:text-4xl text-xl text-center">
            Listado de Pacientes
          </h2>
          <p className="md:text-lg lg:text-2xl mt-5 text-center mb-10">
            Administra tus{' '}
            <span className="text-indigo-600 font-bold">Pacientes y citas</span>
          </p>

          {pacientes.map((paciente) => (
            <Paciente
              key={uuidv4()}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      )}
    </div>
  );
};
