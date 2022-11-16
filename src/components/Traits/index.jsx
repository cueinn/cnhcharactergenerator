import quirk from '../../libs/quirk'
import humor from '../../libs/humor'
import physicalTrait from '../../libs/physical-trait'
import otherPhysicalTrait from '../../libs/other-physical-trait'
import personality from '../../libs/personality'

import './styles.css'

export function Traits() {

  const trait = getRandomEntry(quirk)
  const characteristicsList = [
    `${getRandomEntry(physicalTrait)}, ${getRandomEntry(humor)} e é ${getRandomEntry(personality)}`,
    `${getRandomEntry(physicalTrait)} e ${getRandomEntry(otherPhysicalTrait)}`,
    `${getRandomEntry(physicalTrait)} e ${getRandomEntry(personality)}`,
    `${getRandomEntry(physicalTrait)}, ${getRandomEntry(otherPhysicalTrait)}, e ${getRandomEntry(humor)}`,
    `${getRandomEntry(physicalTrait)}`,
    `${getRandomEntry(otherPhysicalTrait)} e ${getRandomEntry(personality)}`,
    `${getRandomEntry(physicalTrait)}, ${getRandomEntry(otherPhysicalTrait)}, ${getRandomEntry(humor)} e é ${getRandomEntry(personality)}`,
    `${getRandomEntry(otherPhysicalTrait)}`,
    `${getRandomEntry(personality)}`
  ]
  const characteristics = getRandomEntry(characteristicsList)

  function getRandomEntry(arr) {
    let randomNumber = Math.floor(Math.random() * arr.length)
    return arr[randomNumber]
  }

  return (
    <p className='traits'>
      {characteristics} <br />
      {trait}
    </p>
  )
}