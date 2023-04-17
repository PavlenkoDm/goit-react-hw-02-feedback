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

    hanndleButtonClick = option => {
        this.setState(prevState => {
            return { [option]: prevState[option] + 1 };
        });
    };

    countTotalFeedback = () => {
        return this.arrFromState.reduce((acc, item) => { // Я оставил данное решение потому что количество элементов
            acc += this.state[item];                    // в state может поменяться. И в видео было показано this.state.reduce()
            return acc;                                 // но this.state это объект а не массив.
        }, 0);
    };

    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        return Math.round((good / this.countTotalFeedback()) * 100) || 0;
    };

    render() {
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage();
        return (
            <Section title="Please leave feedback">
                <FeedbackOptions
                    options={this.arrFromState}
                    onLeaveFeedback={this.hanndleButtonClick}
                />

                {total >= 1 && (
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={total}
                        positivePercentage={
                            positivePercentage
                        }
                    />
                )}
            </Section>
        );
    }
}
