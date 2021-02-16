const Headercolor = ({ isActive, setClicked, children }) => {
  const clickMe = (name) => {
    setClicked(name);
  };

  const showColor = (
    <button
      type="button"
      onClick={() => clickMe(children)}
      className={isActive ? 'capitalize text-blue-700' : 'capitalize'}
    >
      {children}
    </button>
  );

  return showColor;
};
export default Headercolor;
