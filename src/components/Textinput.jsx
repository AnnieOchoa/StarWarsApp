const Textinput = ({ name, label, value, onChange, type }) => {
  return (
    <div className="regular-textinput">
      <label>{label}</label>
      <input value={value} onChange={onChange} name={name} type={type} />
    </div>
  );
};

export default Textinput;
