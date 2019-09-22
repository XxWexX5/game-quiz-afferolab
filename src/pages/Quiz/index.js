import React, { Component } from 'react';

import { StyledQuiz, Demonstration, Container, ContainerQuestions, Question } from './style/StyledQuiz';

import arteIndicadores from './image/arte_indicadores.png';

import FeedbackClient from '../../components/FeedbackClient';

export default class Quiz extends Component {
    state = {
        answer: '',
    }

    chooseMyAnswer = (answer) => {
        console.log(answer.target.value);
    };

    render() {
        return(
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
                                <input type="radio" id="question_a" value="A" name="question" onChange={(e) => this.chooseMyAnswer(e)} />
                                <label htmlFor="question_a">A</label>
                                <label htmlFor="question_a">Alternativa 1.</label>
                            </Question>

                            <Question>
                                <input type="radio" id="question_b" value="B" name="question" onChange={(e) => this.chooseMyAnswer(e)} />
                                <label htmlFor="question_b">B</label>
                                <label htmlFor="question_b">Alternativa 2.</label>
                            </Question>

                            <Question>
                                <input type="radio" id="question_c" value="C" name="question" onChange={(e) => this.chooseMyAnswer(e)} />
                                <label htmlFor="question_c">C</label>
                                <label htmlFor="question_c">Alternativa 3.</label>
                            </Question>
                        </ContainerQuestions>

                        <a href="" className="btn btn-advance">Confirmar</a>
                    </main>
                </Container>
            </StyledQuiz>
        );
    }
}