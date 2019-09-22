import React from 'react';

import { StyledFeedbackClient, Progress, Bar } from './style/StyledFeedbackClient';

const FeedbackClient = () => (
    <StyledFeedbackClient>
        <div className="container-feedback">
            <p>Satisfação do cliente</p>
            <Progress >
                <Bar level="0%" color="#F00" animated={true} className="bar-fast"/>
            </Progress>
        </div>

        <div className="container-feedback mt-2">
            <p>Fidelização</p>
            <Progress>
                <Bar level="0%" color="#0F0" animated={true} className="bar-slow"/>
            </Progress>
        </div>
    </StyledFeedbackClient>
);

export default FeedbackClient;