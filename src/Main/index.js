import React from 'react';

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
            <a href="#">Clique aqui para aceitar o desafio!</a>
        </aside>
    </StyledMain>
);

export default Main;