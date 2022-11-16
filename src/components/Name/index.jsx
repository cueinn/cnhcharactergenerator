import './styles.css'

export function Name(props) {

  return (
    <h2 className="character-name">
      {props.characterName}, <small>{props.characterClass}</small>
    </h2>
  )

}