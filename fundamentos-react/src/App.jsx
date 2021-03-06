import React from 'react';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Aleatorio from './components/basicos/Aleatorio';

export default () =>
    <div id="app">
        <h1>Fundamentos React</h1>
        <Primeiro></Primeiro>
        <ComParametro
            titulo="Segundo Componente"
            subtitulo="Muito legal!"
        />
        <Aleatorio min={1} max={60} />
    </div>
