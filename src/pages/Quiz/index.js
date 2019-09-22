import React, { Fragment, Component } from 'react';

import axios from 'axios';

import { toaster } from 'evergreen-ui';

import { Redirect } from 'react-router-dom';

import { renderWord } from '../../utilities/question';

import { StyledQuiz, Demonstration, Container, ContainerQuestions, Question } from './style/StyledQuiz';

import arteIndicadores from './image/arte_indicadores.png';

import FeedbackClient from '../../components/FeedbackClient';

export default class Quiz extends Component {
    state = {
        answer: '',
        idAnswer: '',
        data: '',
        step: 0,
        chosenQuestions: [],
        limiteQuestions: '',
    }

    chooseMyAnswer = (answer, idAnswer) => {
        this.setState({
            answer,
            idAnswer,
        });
    };

    renderChosenQuestions = (data) => {
        const elements = [];

        while(elements.length < data.questoes_randomizar) {
            data.banco_questoes.map((question, indice) => {
                let number = Math.floor(Math.random() * data.banco_questoes.length);
                    
                if(elements.indexOf(number) === -1) {
                    return elements.push(number)
                }

                return false;
            });
        }

        return elements;
    }

    async componentDidMount() {
        const response = await axios.get('/api/quiz.json');

        if(localStorage.getItem('step') && localStorage.getItem('chosenQuestions')) {
            return this.setState({
                data: response.data,
                step: parseInt(localStorage.getItem('step')),
                chosenQuestions: JSON.parse(localStorage.getItem('chosenQuestions')),
                limiteQuestions: response.data.questoes_randomizar,
            });
        }

        return this.setState({
            data: response.data,
            chosenQuestions: this.renderChosenQuestions(response.data),
            limiteQuestions: response.data.questoes_randomizar,
        });
    }
    
    nextStep = (e) => {
        e.preventDefault();
        const { answer } = this.state;
        
        if(!answer) {
            return toaster.danger('Por favor! Selecione uma opção para continuar.');   
        }

        return this.setState({
            answer: '',
            idAnswer: '',
            step: this.state.step += 1,
        })
    };

    render() {
        const { data, chosenQuestions, step, limiteQuestions } = this.state;
        
        if(data) {
            localStorage.setItem('chosenQuestions', JSON.stringify(chosenQuestions));
            localStorage.setItem('step', step);
        }

        console.log(localStorage.getItem('chosenQuestions'))
        
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
                                                    <input type="radio" id={alternativa.id} value={alternativa.id} name="question" onChange={() => this.chooseMyAnswer(alternativa.impacto_indicadores, alternativa.id)} checked={(this.state.idAnswer === alternativa.id) ? true : false}/>
                                                    <label htmlFor={alternativa.id}>{renderWord(id)}</label>
                                                    <label htmlFor={alternativa.id}>{ alternativa.descricao }</label>
                                                </Question>    
                                            )) }
                                        </ContainerQuestions>
                                    </Fragment>
                                }

                                <button className="btn btn-advance" onClick={(e) => this.nextStep(e)}>Confirmar</button>
                            </main>
                        ) : null
                    }
                </Container>
            </StyledQuiz>
        );
    }
}