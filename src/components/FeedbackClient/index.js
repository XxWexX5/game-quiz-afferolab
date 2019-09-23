import React from 'react';
import { connect } from 'react-redux';

import { StyledFeedbackClient, Progress, Bar } from './style/StyledFeedbackClient';

const FeedbackClient = ({ background, animated, bar }) => (
    <StyledFeedbackClient background={background}>
        <div className="container-feedback">
            <p>Satisfação do cliente</p>
            <Progress >
                <Bar level={parseInt(localStorage.getItem('satisfacao')) + '%'} color="#3469b3" animated={animated || false} className="bar-fast"/>
            </Progress>
        </div>

        <div className="container-feedback mt-2">
            <p>Fidelização</p>
            <Progress>
                <Bar level={parseInt(localStorage.getItem('fidelizacao')) + '%'} color="#68469c" animated={animated || false} className="bar-slow"/>
            </Progress>
        </div>
    </StyledFeedbackClient>
);

const mapStateToProps = state => ({
    bar: state.bar,
});

export default connect(mapStateToProps)(FeedbackClient);