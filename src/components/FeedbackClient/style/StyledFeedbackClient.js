import styled from 'styled-components';

export const StyledFeedbackClient = styled.div`
    background-color: ${ props => props.background };
    padding: 30px 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 8px;

    p {
        margin: 0;
        max-width: 100px;
        line-height: 1.1em;
        font-size: 18px;
        color: #FFFFFF;

        &:last-child {
            margin-bottom: 0;
        }
    }

    .container-feedback {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`; 

export const Progress = styled.div`
    display: flex;
    align-items: center;
    width: 200px;
    height: 20px;
    border-radius: 5px;
    background-color: #FFFFFF;
    padding: 3px;
`;

export const Bar = styled.div`
    height: 12px;
    border-radius: 200px;
    background-color: ${props => props.color};
    width: ${props => props.level};
    animation: ${props => props.animated ? '3s animate-bar infinite alternate' : null};

    &.bar-slow {
        animation-delay: .5s;
    }

    @keyframes animate-bar {
        0% {
            width: 0%;
        } 
        100% {
            width: 100%;
        }    
    }
`;