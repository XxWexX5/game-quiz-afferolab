import React, { Fragment, Component } from 'react';

import axios from 'axios';

import { Redirect } from 'react-router-dom';

import { renderWord } from '../../utilities/question';

import { StyledQuiz, Demonstration, Container, ContainerQuestions, Question } from './style/StyledQuiz';

import arteIndicadores from './image/arte_indicadores.png';

import FeedbackClient from '../../components/FeedbackClient';

export default class Quiz extends Component {
    state = {
        answer: '',
        data: '',
        step: 0,
        chosenQuestions: [],
        limiteQuestions: '',
    }

    chooseMyAnswer = (answer) => {
        this.setState({
            answer: answer.target.value
        })
    };

    renderChosenQuestions = (data) => {
        const elements = [];
        const { chosenQuestions } = this.state;

        while(elements.length < data.questoes_randomizar) {
            data.banco_questoes.map((question, indice) => {
                let number = Math.floor(Math.random() * data.banco_questoes.length);
                    
                if(elements.indexOf(number) === -1) {
                    elements.push(number)
                }
            });
        }

        return elements;
    }

    async componentDidMount() {
        const { data } = this.state;

        const response = await axios.get('/api/quiz.json');
        this.setState({
            data: response.data,
            chosenQuestions: this.renderChosenQuestions(response.data),
            limiteQuestions: response.data.questoes_randomizar,
        });
    }
    
    nextStep = (e) => {
        e.preventDefault();

        this.setState({
            step: this.state.step += 1,
        })
    };

    render() {
        const { data, chosenQuestions, step, limiteQuestions } = this.state;

        console.log(step);
        console.log(limiteQuestions);

        if(step === limiteQuestions) {
            return <Redirect to={{ pathname: '/resultado', state: { from: this.props.location } }}/>
        }

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
                                    <Fragment key={data.banco_questoes[chosenQuestions[step]].id}>
                                        <section className="question">
                                            <h3>Pergunta:</h3>
                                            <p>{data.banco_questoes[chosenQuestions[step]].pergunta}</p>
                                        </section>  
                                            
                                        <ContainerQuestions>
                                            { data.banco_questoes[chosenQuestions[step]].alternativas.map((alternativa, id) => (
                                                <Question key={alternativa.id}>
                                                    <input type="radio" id={alternativa.id} value={alternativa.impacto_indicadores} name="question" onChange={(e) => this.chooseMyAnswer(e)} />
                                                    <label htmlFor={alternativa.id}>{renderWord(id)}</label>
                                                    <label htmlFor={alternativa.id}>{ alternativa.descricao }</label>
                                                </Question>    
                                            )) }
                                        </ContainerQuestions>
                                    </Fragment>
                                }

                                <a href="" className="btn btn-advance" onClick={(e) => this.nextStep(e)}>Confirmar</a>
                            </main>
                        ) : null
                    }
                </Container>
            </StyledQuiz>
        );
    }
}