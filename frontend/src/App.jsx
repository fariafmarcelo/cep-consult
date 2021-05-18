import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from 'react';
import apiViaCep from './services/apiViaCep';
import localApi from './services/apiMongo';

const initialData = {
  cep: '',
  logradouro: '',
  complemento: '',
  bairro: '',
  localidade: '',
  uf: '',
  ibge: '',
  gia: '',
  ddd: '',
  siafi: '',
};

export default function App() {
  const [data, setData] = useState(initialData);

  function handleOnChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  async function getDataFromApi() {
    const response = await localApi.get(`/?cep=${data.cep}`);

    if (!response.data.length) {
      const response = await apiViaCep.get(`/${data.cep}/json`);
      setData(response.data);
    } else {
      setData(response.data);
    }
  }

  return (
    <div className="container">
      <h1 className="title text-center mt-5">Consulta CEP</h1>
      <div className="row">
        <div className="form-group">
          <label className="form-label" htmlFor="cep"> CEP </label>
          <input
            className="form-control"
            onChange={(e) => handleOnChange(e)}
            type="text"
            id="cep"
            name="cep"
            value={data.cep}
          />
        </div>
        <div className="form-group col-6">
          <label className="form-label" htmlFor="logradouro"> Logradouro </label>
          <input
            className="form-control"
            onChange={(e) => handleOnChange(e)}
            type="text"
            id="logradouro"
            name="logradouro"
            value={data.logradouro}
          />
        </div>
        <div className="form-group col-6">
          <label className="form-label" htmlFor="bairro"> Bairro </label>
          <input
            className="form-control"
            onChange={(e) => handleOnChange(e)}
            type="text"
            id="bairo"
            name="bairo"
            value={data.bairro}
          />
        </div>
        <div className="form-group col-6">
          <label className="form-label" htmlFor="localidade"> Localidade </label>
          <input
            className="form-control"
            onChange={(e) => handleOnChange(e)}
            type="text"
            id="localidade"
            name="localidade"
            value={data.localidade}
          />
        </div>
        <div className="form-group col-6">
          <label className="form-label" htmlFor="uf"> UF </label>
          <input
            className="form-control"
            onChange={(e) => handleOnChange(e)}
            type="text"
            id="uf"
            name="uf"
            value={data.uf}
          />
        </div>
      </div>
      <div className="form-group mt-4">
        <button
          type="button"
          onClick={(e) => getDataFromApi()}
          className="btn btn-success"
        >
          Buscar CEP
        </button>
      </div>
    </div>
  );
}
