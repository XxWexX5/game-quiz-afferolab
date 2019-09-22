import styled from 'styled-components';

import Team from '../images/bg4.png';

export const StyledResult = styled.section`
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${ Team });
    background-size: cover;
    background-position: center 25%;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1200px){
        background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${ Team });  
        justify-content: center;  
    }
`;

export const RestartGame = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px 0 5px;

    a {
        border: 1px solid #FFFFFF;
    }
`;

export const Container = styled.section`
    border: 2px solid #cb2031;
    border-radius: 20px;
    padding: 10px;

    @media screen and (max-width: 1200px) {
        margin: 0;
    }

    main {
        display: flex;
        flex-direction: column;
        position: relative;
        background-color: #cb2031;
        padding: 40px 35px;
        border-radius: 15px;

        .btn.btn-avance {
            width: 182px;
            margin: 20px auto 0;
            border: 1px solid;
        }  

        @media screen and (max-width: 600px) {
            padding: 30px 20px;
        }

        h2 {
            font-size: 32px;
            font-family: Gilroy-Bold, Arial, Helvetica, sans-serif;
            color: #FFFFFF;
        }

        .container-feedback {
            justify-content: flex-start;

            p {
                font-size: 16px;
                font-family: Gilroy-Bold, Arial, Helvetica, sans-serif;
                width: 180px;
                max-width: inherit;
                margin-right: 20px;
                text-align: right;
            }
        }

        @media screen and (max-width: 800px) {
            flex-direction: column;
            justify-content: center;
        }

        section {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-bottom: 20px;

            img {
                margin-right: 35px;
            }

            @media screen and (max-width: 800px) {
                margin: 0;

                img {
                    margin: 20px;
                }
            }
        }
    }
`;