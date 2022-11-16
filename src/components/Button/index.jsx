import './styles.css'

export function Button() {

  function newCharacter() {
    console.log('que pasaaaa?')
  }
  return (
    <button onClick={newCharacter}>
      Quem vem ai?
    </button>
  )
}