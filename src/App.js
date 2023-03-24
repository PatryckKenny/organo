import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import {useState} from "react";
import Time from "./componentes/Time";
import colaborador from "./componentes/Colaborador";
import Rodape from "./componentes/Rodape";

function App() {

    const times = [
        {
            nome: 'Programação',
            corPrimaria: '#57C278',
            corSecuntaria: '#D9F7E9'
        },

        {
            nome: 'Front-End',
            corPrimaria: '#82CFFA',
            corSecuntaria: '#E8F8FF'
        },

        {
            nome: 'Data Science',
            corPrimaria: '#A6D157',
            corSecuntaria: '#F0F8E2'
        },

        {
            nome: 'Devops',
            corPrimaria: '#E06B69',
            corSecuntaria: '#FDE7E8'
        },

        {
            nome: 'UX e Design',
            corPrimaria: '#DB6EBF',
            corSecuntaria: '#FAE9F5'
        },

        {
            nome: 'Mobile',
            corPrimaria: '#FFBA05',
            corSecuntaria: '#FFF5D9'
        },

        {
            nome: 'Inovação e gestão',
            corPrimaria: '#FF8A29',
            corSecuntaria: '#FFEEDF'
        }
    ]

    const [colaboradores, setColaboradores] = useState([])

    const aoNovoColoboradorAdicionado = (colaborador) => {
        setColaboradores([...colaboradores, colaborador])

    }
    return (
        <div className="App">
            <Banner/>
            <Formulario times = {times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColoboradorAdicionado(colaborador)}/>
            {times.map(time => <Time
                    key={time.nome}
                    nome={time.nome}
                    corPrimaria={time.corPrimaria}
                    corSegundaria={time.corSecuntaria}
                    colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
                />
            )}
            <Rodape/>


        </div>
    );
}

export default App;
