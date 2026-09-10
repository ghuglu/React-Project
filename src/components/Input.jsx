const Input = ({ label, type, placeholder, value, onChange, hint }) => {
  return (
    <div className="input-group">
      <label className="input-label">{label}</label>
      <input 
        type={type} 
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input-field"
      />
      {hint && <span className="input-hint">{hint}</span>}
    </div>
  )
}
export default Input