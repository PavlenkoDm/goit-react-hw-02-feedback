
export const FeedbackOptions = props => {
  const { options, onLeaveFeedback } = props;
  return (
    <ul>
      {options.map(item => {
        return (
          <li key={item}>
            <button type="button" onClick={() => onLeaveFeedback(item)}>
              {item}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
