import styled from 'styled-components';

import TelephoneOperator from '../images/bg2.png';

export const StyledIntroduction = styled.section`
    background-image: url(${ TelephoneOperator });
    background-size: cover;
    background-position: center 1%;
    background-repeat: no-repeat;
    min-height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    @media screen and (max-width: 1200px){
        background-image: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${ TelephoneOperator });  
        justify-content: center;
        padding: 30px;
    }
`;

export const Container = styled.aside`
    border: 2px solid #cb2031;
    border-radius: 20px;
    padding: 10px;
    margin-top: 200px;
    margin-left: 70px;

    @media screen and (max-width: 1200px) {
        margin: 0;
    }

    main {
        display: flex;
        position: relative;
        background-color: #cb2031;
        padding: 20px;
        border-radius: 15px;

        @media screen and (max-width: 800px) {
            flex-direction: column;
            justify-content: center;
        }

        aside {
            margin-left: 35px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;

            @media screen and (max-width: 800px) {
                margin: 0;

                img {
                    margin: 20px 0;
                }
            }
        }

        .btn.btn-advance {
            position: absolute;
            bottom: -28px;
            left: 0;
            right: 0;
            margin: auto;
            width: 145px;
            border: 1px solid;
        }
    }
    
    p {
        font-size: 20px;
        line-height: 1.5em;
        color: #FFFFFF;
        max-width: 400px;
        margin-bottom: 20px;

        &:last-child {
            margin-bottom: 0;
        }
    }
`;