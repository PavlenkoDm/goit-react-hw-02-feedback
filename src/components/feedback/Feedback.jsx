import React, { Component } from 'react';
import { Section } from 'components/index';
import { FeedbackOptions } from 'components/index';
import { Statistics } from 'components/index';

export class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    arrFromState = Object.keys(this.state);

    hanndleButtonClick = event => {
        const { textContent } = event.currentTarget;
        this.setState(prevState => {
            return { [textContent]: prevState[textContent] + 1 };
        });
    };

    countTotalFeedback = () => {
        return this.arrFromState.reduce((acc, item) => {
            acc += this.state[item];
            return acc;
        }, 0);
    };

    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        return Math.round((good / this.countTotalFeedback()) * 100);
    };

    render() {
        const { good, neutral, bad } = this.state;
        return (
            <Section title="Please leave feedback">
                <FeedbackOptions
                    options={this.arrFromState}
                    onLeaveFeedback={this.hanndleButtonClick}
                />

                {this.countTotalFeedback() >= 1 && (
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={this.countTotalFeedback}
                        positivePercentage={
                            this.countPositiveFeedbackPercentage
                        }
                    />
                )}
            </Section>
        );
    }
}
