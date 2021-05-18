import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from 'react';
import apiViaCep from './services/apiViaCep';
import localApi from './services/apiMongo';
import { cepMask } from './mask/cepMask';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            if (response.data.erro) {
                toast.error("Erro na consulta do CEP. Por favor tente novamente.");
                document.getElementById("cep").focus();
                setData(initialData)
            } else {
                await localApi.post(`/`, response.data);
                setData(response.data);
            }
        } else {
            setData(response.data[0]);
        }
    }

    function sOnChange(e) {
        const { name, value } = e.target;
        setData({ ...data, [name]: cepMask(value) });
    }

    return (
        <div className="container">
            <h1 className="title text-center m-5">Consulta CEP</h1>
            <div className="row">
                <div className="form-group">
                <label className="form-label" htmlFor="cep"> CEP </label>
                <input
                    className="form-control"
                    onChange={(e) => sOnChange(e)}
                    type="text"
                    id="cep"
                    name="cep"
                    value={data.cep}
                />
                </div>
                <div className="form-group">
                <label className="form-label" htmlFor="logradouro"> Logradouro </label>
                <input
                    disabled
                    className="form-control"
                    onChange={(e) => handleOnChange(e)}
                    type="text"
                    id="logradouro"
                    name="logradouro"
                    value={data.logradouro}
                />
                </div>
                <div className="form-group">
                <label className="form-label" htmlFor="bairro"> Bairro </label>
                <input
                    disabled
                    className="form-control"
                    onChange={(e) => handleOnChange(e)}
                    type="text"
                    id="bairo"
                    name="bairo"
                    value={data.bairro}
                />
                </div>
                <div className="form-group">
                <label className="form-label" htmlFor="localidade"> Localidade </label>
                <input
                    disabled
                    className="form-control"
                    onChange={(e) => handleOnChange(e)}
                    type="text"
                    id="localidade"
                    name="localidade"
                    value={data.localidade}
                />
                </div>
                <div className="form-group">
                <label className="form-label" htmlFor="uf"> UF </label>
                <input
                    disabled
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
                className="btn btn-success btn-100"
                >
                Buscar CEP
                </button>
            </div>
            <ToastContainer autoClose={3000} position="top-center" />
        </div>
    );
}
