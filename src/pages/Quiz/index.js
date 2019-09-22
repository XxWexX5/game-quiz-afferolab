import React from 'react';

import { StyledQuiz, Demonstration, Container, ContainerQuestions, Question } from './style/StyledQuiz';

import arteIndicadores from './image/arte_indicadores.png';

import FeedbackClient from '../../components/FeedbackClient';

const Quiz = () => (
    <StyledQuiz>
        <Demonstration>
            <img src={arteIndicadores} alt="Painel de Indicadores" className="image-indicators" />

            <FeedbackClient className="feedback-client" background="#cb2031" />  
        </Demonstration>

        <Container>
            <main>
                <section className="question">
                    <h3>Pergunta?</h3>
                    <p>A certificação de metodologias que nos auxiliam a lidar com o entendimento das
                    metas propostas faz parte de um processo de gerenciamento das novas proposições.</p>
                </section>

                <ContainerQuestions>
                    <Question>
                        <button>A</button>
                        <p>Alternativa 1.</p>
                    </Question>

                    <Question>
                        <button>B</button>
                        <p>Alternativa 2.</p>
                    </Question>

                    <Question>
                        <button>C</button>
                        <p>Alternativa 3.</p>
                    </Question>
                </ContainerQuestions>

                <a href="" className="btn btn-advance">Confirmar</a>
            </main>
        </Container>
    </StyledQuiz>
);

export default Quiz;