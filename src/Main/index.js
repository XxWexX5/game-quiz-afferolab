import React from 'react';

import { Link } from 'react-router-dom';

import { StyledMain } from './style/StyledMain';

const Main = () => (
    <StyledMain>
        <aside>
            <h1>Game Quiz</h1>
            <p>
                Seja bem-vindo(a)! A partir de agora, você terá a oportunidade de colocar em prática
                tudo o que já aprendeu. Para isso, será necessário super alguns desafios, tomas a
                <span className="highlighted"> melhor decisão para você, para o cliente e para o negócio</span>
                . Está preparado?
            </p>
            <Link to="/introducao">Clique aqui para aceitar o desafio!</Link>
        </aside>
    </StyledMain>
);

export default Main;