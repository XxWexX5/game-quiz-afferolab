import React from 'react';

import { Link } from 'react-router-dom';

import { StyledMain, Container } from './style/StyledMain';

const Main = () => (
    <StyledMain>
        <Container>
            <h1>Game Quiz</h1>
            <p>
                Seja bem-vindo(a)! A partir de agora, você terá a oportunidade de colocar em prática
                tudo o que já aprendeu. Para isso, será necessário super alguns desafios, tomas a
                <span className="highlighted"> melhor decisão para você, para o cliente e para o negócio</span>
                . Está preparado?
            </p>
            <Link to="/introducao" className="btn btn-advance">Clique aqui para aceitar o desafio!</Link>
        </Container>
    </StyledMain>
);

export default Main;