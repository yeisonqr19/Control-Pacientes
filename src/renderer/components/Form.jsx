import React, { useState, useEffect } from 'react';
import { Error } from '../components';
import { v4 as uuidv4 } from 'uuid';
export const Form = ({ setPacientes, paciente, pacientes, setPaciente }) => {
  const [datos, setDatos] = useState({
    nombre: '',
    propietario: '',
    email: '',
    alta: '',
    sintomas: '',
  });

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length !== 0) {
      setDatos(paciente);
    }
  }, [paciente]);

  const handleChange = ({ target }) => {
    setDatos({ ...datos, [target.name]: target.value });
    datos;
    setError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Validacion del formulario:

    if (
      datos.nombre.trim() === '' ||
      datos.propietario.trim() === '' ||
      datos.email.trim() === '' ||
      datos.alta.trim() === '' ||
      datos.sintomas.trim() === ''
    ) {
      console.log('Todos los campos son obligatorios');
      setError(true);
      return;
    }
    setError(false);

    if (paciente.id) {
      //editando paciente:
      datos.id = paciente.id;
      console.log('Editando');

      const pacientesEditados = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? datos : pacienteState
      );
      setPacientes(pacientesEditados);
      setPaciente({});
    } else {
      //Nuevo paciente:
      datos.id = uuidv4();
      setPacientes((pacientes) => [datos, ...pacientes]);
    }

    //Reinicio el Formulario:
    setDatos({
      nombre: '',
      propietario: '',
      email: '',
      alta: '',
      sintomas: '',
    });
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black md:text-2xl lg:text-4xl text-xl text-center">
        Seguimiento de Pacientes
      </h2>

      <p className="md:text-lg lg:text-2xl mt-5 text-center mb-10">
        Añade Pacientes y
        <span className="text-indigo-600 font-bold"> Administralos</span>
      </p>
      {error && <Error mensaje="Todos los campos Son Obligatorios" />}
      <form
        className="bg-white shadow-lg rounded-xl py-10 px-5 mb-10 mx-3"
        onSubmit={handleSubmit}
      >
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="nombre"
          >
            Nombre Mascota
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            type="text"
            placeholder="Nombre de la Mascota"
            name="nombre"
            id="nombre"
            value={datos.nombre}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="propietario"
          >
            Nombre Propietario
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            type="text"
            placeholder="Nombre del propietario"
            name="propietario"
            id="propietario"
            value={datos.propietario}
            onChange={handleChange}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="email"
          >
            Email del Propietario
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            type="email"
            placeholder="Email del propietario"
            name="email"
            id="email"
            value={datos.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="alta"
          >
            fecha de Alta
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            type="date"
            name="alta"
            id="alta"
            value={datos.alta}
            onChange={handleChange}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="sintomas"
          >
            sintomas
          </label>
          <textarea
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            id="sintomas"
            name="sintomas"
            placeholder="Describe los sintomas"
            value={datos.sintomas}
            onChange={handleChange}
          />
        </div>

        <input
          type="submit"
          value={
            Object.keys(paciente).length === 0
              ? 'Agregar Paciente'
              : 'Editar Paciente'
          }
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-700 cursor-pointer transition-all duration-300 mt-2"
        />
      </form>
    </div>
  );
};
