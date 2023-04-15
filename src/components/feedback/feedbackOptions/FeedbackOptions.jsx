import shortid from 'shortid';

export const FeedbackOptions = props => {
  const { options, onLeaveFeedback } = props;
  return (
    <ul>
      {options.map(item => {
        return (
          <li key={shortid.generate()}>
            <button type="button" onClick={onLeaveFeedback}>
              {item}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
