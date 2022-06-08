import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

import React, { Component } from 'react';

export default class FeedbackOptions extends Component {
    render() {
        const { options, onLeaveFeedback } = this.props;

        return (
            <div>
                <ul className={s.list}>
                    {Object.keys(options).map(option => {
                        const capitalizedFirstLetterWord =
                            option.split('')[0].toUpperCase() + option.slice(1);

                        return (
                            <li key={option} className={s.item}>
                                <button
                                    className={s.button}
                                    type="button"
                                    onClick={() => onLeaveFeedback(option)}
                                >
                                    {capitalizedFirstLetterWord}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

FeedbackOptions.propTypes = {
    options: PropTypes.shape({
        bad: PropTypes.number,
        good: PropTypes.number,
        neutral: PropTypes.number,
    }),
    onLeaveFeedback: PropTypes.func.isRequired,
};
