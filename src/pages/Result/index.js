import React from 'react';

import { Link } from 'react-router-dom';

import { StyledResult, Container, RestartGame } from './style/StyledResult';

import arteIndicadores from './images/arte_indicadores.png';

import FeedbackClient from '../../components/FeedbackClient';

const Result = () => {    
    return(
        <StyledResult>
            <Container>
                <main>
                    <section>
                        <img src={arteIndicadores} alt="Painel de Indicadores" />
                        <h2>
                            Veja sua <i>performance</i> <br />
                            em cada indicador:
                        </h2>  
                    </section>

                    <FeedbackClient background="transparent" animated={false} />
                    
                    <RestartGame>
                        <Link to="/introducao" className="btn btn-advance">Reiniciar quiz</Link>
                    </RestartGame>
                </main>
            </Container>
        </StyledResult>
    );
};

export default Result;