import React, { Fragment, Component } from 'react';

import axios from 'axios';

import { renderWord } from '../../utilities/question';

import { StyledQuiz, Demonstration, Container, ContainerQuestions, Question } from './style/StyledQuiz';

import arteIndicadores from './image/arte_indicadores.png';

import FeedbackClient from '../../components/FeedbackClient';

export default class Quiz extends Component {
    state = {
        answer: '',
        data: '',
    }

    chooseMyAnswer = (answer) => {
        this.setState({
            answer: answer.target.value
        })
    };

    async componentDidMount() {
        const { data } = this.state;

        const response = await axios.get('/api/quiz.json');
        this.setState({
            data: response.data,    
        });
    }

    render() {
        const { data } = this.state;

        console.log(renderWord(0));

        return(
            <StyledQuiz>
                <Demonstration>
                    <img src={arteIndicadores} alt="Painel de Indicadores" className="image-indicators" />

                    <FeedbackClient className="feedback-client" background="#cb2031" />  
                </Demonstration>

                <Container>
                    {
                        (data) ? (
                            <main>
                                {
                                    data.banco_questoes.map(question => (
                                        <Fragment key={question.id}>
                                            <section className="question">
                                                <h3>Pergunta?</h3>
                                                <p>{question.pergunta}</p>
                                            </section>  
                                            
                                            <ContainerQuestions>
                                            { question.alternativas.map((alternativa, id) => (
                                                <Question key={alternativa.id}>
                                                    <input type="radio" id={alternativa.id} value={alternativa.impacto_indicadores} name="question" onChange={(e) => this.chooseMyAnswer(e)} />
                                                    <label htmlFor={alternativa.id}>{renderWord(id)}</label>
                                                    <label htmlFor={alternativa.id}>{ alternativa.descricao }</label>
                                                </Question>    
                                            )) }
                                            </ContainerQuestions>
                                            
                                        </Fragment>
                                    ))
                                }
                                <a href="" className="btn btn-advance">Confirmar</a>
                            </main>
                        ) : null
                    }
                </Container>
            </StyledQuiz>
        );
    }
}