import shortid from 'shortid';

export const Statistics = props => {
    const { good, neutral, bad, total, positivePercentage } = props;
    const stateObj = { good, neutral, bad };
    const stateArr = Object.keys(stateObj);

    return (
        <>
            <p>Statistics</p>
            <ul>
                {stateArr.map(item => {
                    return (
                        <li key={shortid.generate()} style={{textTransform: 'capitalize'}}>
                            {item}: {stateObj[item]}
                        </li>
                    );
                })}
            </ul>
            <p>Total: {total()}</p>
            <p>Positive feedback: {positivePercentage()}%</p>
        </>
    );
};
