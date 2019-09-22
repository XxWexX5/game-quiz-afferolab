import React from 'react';

import { StyledFeedbackClient, Progress, Bar } from './style/StyledFeedbackClient';

const FeedbackClient = ({ background, animated }) => (
    <StyledFeedbackClient background={background}>
        <div className="container-feedback">
            <p>Satisfação do cliente</p>
            <Progress >
                <Bar level="0%" color="#3469b3" animated={animated || false} className="bar-fast"/>
            </Progress>
        </div>

        <div className="container-feedback mt-2">
            <p>Fidelização</p>
            <Progress>
                <Bar level="0%" color="#68469c" animated={animated || false} className="bar-slow"/>
            </Progress>
        </div>
    </StyledFeedbackClient>
);

export default FeedbackClient;