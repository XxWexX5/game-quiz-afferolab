import styled from 'styled-components';

import BGWoman from '../../../imagesOptimized/bg1.png';

export const StyledMain = styled.section`
    background-image: url(${ BGWoman });
    background-size: cover;
    background-position: center 1%;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    @media screen and (max-width: 1200px){
        background-image: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${ BGWoman });  
        justify-content: center;  
    }
`;

export const Container = styled.aside`
    max-width: 450px;
    margin-left: 70px;
    margin-top: 150px;

    @media screen and (max-width: 1200px){
        margin: 0;   
        background-color: rgba(0, 0, 0, .4);
        padding: 20px 35px 35px;
        border-radius: 5px;
    }

    h1 {
        font-family: Gilroy-Bold, Arial, Helvetica, sans-serif;
        color: #75308a;
        font-size: 32px;
        margin: 0;
        padding: 0;

        @media screen and (max-width: 1200px){
            font-size: 30px;   
        }
    }

    p {
        font-family: Gilroy, Arial, Helvetica, sans-serif;
        font-size: 21px;
        line-height: 1.2em;
        color: #6e6f72;
        margin: 20px 0;

        @media screen and (max-width: 1200px){
            font-size: 18px;
            color: #FFFFFF;    
        }

        .highlighted {
            font-family: Gilroy-Bold, Arial, Helvetica, sans-serif;
            color: #cb2031;
        }
    }
`;