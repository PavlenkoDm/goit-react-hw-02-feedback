
export const Statistics = props => {
    const { good, neutral, bad, total, positivePercentage } = props;
    const stateArr = Object.entries({ good, neutral, bad });

    return (
        <>
            <p>Statistics</p>
            <ul>
                {stateArr.map(([key, value]) => {
                    return (
                        <li key={key} style={{textTransform: 'capitalize'}}>
                            {key}: {value}
                        </li>
                    );
                })}
            </ul>
            <p>Total: {total}</p>
            <p>Positive feedback: {positivePercentage}%</p>
        </>
    );
};
