import './styles.css'

export function Ability({ name, value, alt }) {
  return (
    <div className='ability'>
      <h3 className='ability-label'>{name}</h3>
      <strong>{value}</strong>
      {alt && <small>{alt}</small>}
    </div>
  )
}