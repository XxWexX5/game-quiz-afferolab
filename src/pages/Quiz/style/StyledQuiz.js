import styled from 'styled-components';

import Team from '../image/bg3.png';
import ArtQuiz from '../image/arte_quiz.png';
import Circle from '../image/circle.svg';

export const StyledQuiz = styled.section`
    position: relative;
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${ Team });
    background-size: cover;
    background-position: center 25%;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 850px) {
        display: inline-table;    
    }

    @media screen and (max-width: 1200px){
        background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${ Team });  
        flex-direction: column;
        justify-content: center;
        padding: 45px;
    }

    &:after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        background-image: url(${ ArtQuiz });
        background-size: 950px;
        background-repeat: no-repeat;
        background-position: center center;
        z-index: -1;
    }
`;

export const Demonstration = styled.div`
    position: absolute;
    top: 0;
    right: -20px;
    transform: scale(.8);
    z-index: 1;

    @media screen and (max-width: 1400px) {
        position: absolute;
        top: -25px;
        right: -85px;
        transform: scale(.6);
        z-index: 2;
    }

    @media screen and (max-width: 1200px){
        position: initial; 
        margin-bottom: 35px; 
        display: flex;
        justify-content: center;
        align-items: center;
        transform: scale(.8);
    }

    @media screen and (max-width: 610px){
        position: initial; 
        margin-bottom: 35px;
        display: flex;
        flex-direction: column;
        align-items: center;
        transform: scale(1);

        img {
            margin-bottom: 20px;
        }  
    }

    .image-indicators,
    .feedback-client,
    > div {
        display: inline-block;
        vertical-align: middle;
    }

    img {
        margin-right: 20px;    
    }
`;

export const Container = styled.section`
    border: 2px solid #FFFFFF;
    border-radius: 20px;
    padding: 10px;
    z-index: 1;
    max-width: 1200px;
    width: 100%;

    &.animation {
        opacity: 0;
        animation: 1s animation-show forwards;

        @keyframes animation-show {
            0% {
                transform: translate3d(0, -20px, 0);
                opacity: 0;
            }
            100% {
                transform: translate3d(0, 0, 0);
                opacity: 1;
            }     
        }
    }

    @media screen and (max-width: 1200px) {
        margin: 0;
    }

    main {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        background-color: #FFFFFF;
        padding: 40px 35px;
        border-radius: 15px;
        width: 100%;
        color: #6e6f72;
        font-size: 18px;

        .question {
            margin-bottom: 35px;

            h3 {
                font-size: 18px;
                margin-bottom: 10px;
            }
        }

        .btn.btn-advance {
            margin: 20px auto 0;
            border: 1px solid;
            position: absolute;
            left: 0;
            margin: auto;
            right: 0;
            bottom: -30px;
            width: 145px;
        }  
    }
`;

export const ContainerQuestions = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const Question = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    &:hover {
        input[type="radio"]:checked + label, 
        input[type="radio"]:not(:checked) + label {    
            color: #FFFFFF;
            background-image: url(${ Circle });
            background-position: center;
            background-repeat: no-repeat;
            background-size: 40%;
            animation: .8s animtion-circle forwards;

            @keyframes animtion-circle {
                0% {
                    background-size: 40%;    
                }
                100% {
                    background-size: 250%;    
                }
            }
        }          
    }

    &:last-child {
        margin-bottom: 0;
    }

    label {
        cursor: pointer;
    }

    input[type="radio"]:checked,
    input[type="radio"]:not(:checked) {
        position: absolute;
        left: -9999px;
    }

    input[type="radio"]:checked + label, 
    input[type="radio"]:not(:checked) + label {
        content: '';
        font-family: Gilroy-Bold,Arial,Helvetica,sans-serif;
        font-size: 18px;
        padding: 10px 18px;
        border-radius: 5px;
        background-color: #FFFFFF;
        border: 2px solid #75308a;
        color: #75308a;
        margin-right: 15px;
        cursor: pointer;
    }

    input[type="radio"]:checked + label {
        background-color: #75308a; 
        color: #FFFFFF;   
    }
`;