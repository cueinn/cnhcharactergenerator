import './styles.css'
import classes from '../../libs/classes'
import weapons from '../../libs/weapons'
import armor from '../../libs/armor'
import equipment from '../../libs/equipment'
import names from '../../libs/names'

import { Ability } from '../Ability'
import { Button } from '../Button'
import { Name } from '../Name'
import { Traits } from '../Traits'
import { Divider } from '../Divider'

export function Character() {

  const character = {
    abilities: [
      { name: 'FOR', value: 0, alt: "" },
      { name: 'INT', value: 0, alt: "" },
      { name: 'SAB', value: 0, alt: "" },
      { name: 'DES', value: 0, alt: "" },
      { name: 'CON', value: 0, alt: "" },
      { name: 'CAR', value: 0, alt: "" },
    ],
    equipment: []
  }

  function rollDice(size) {
    return Math.floor(Math.random() * size) + 1
  }

  function rollAbilities() {
    character.abilities.map(ability => (
      ability.value = rollDice(6) + rollDice(6) + rollDice(6)
    ))
  }
  rollAbilities()

  function abilityBonus(value) {
    if (value <= 3) return ' /-3'
    if (value >= 4 && value <= 5) return ' /-2'
    if (value >= 6 && value <= 8) return ' /-1'
    if (value >= 9 && value <= 12) return ' /0'
    if (value >= 13 && value <= 15) return ' /+1'
    if (value >= 16 && value <= 17) return ' /+2'
    if (value >= 18) return ' /+3'
  }

  function getSmallerAbility() {
    const abilitiesSmallerThanNine = []

    character.abilities.forEach(a => {
      if (a.value < 9) {
        abilitiesSmallerThanNine.push(a.name)
      }
    })

    return abilitiesSmallerThanNine
  }

  function filterPossibleClasses() {
    const smallerAbilities = getSmallerAbility()
    return classes.filter(cls => !smallerAbilities.includes(cls.abilityRequired) && !smallerAbilities.includes(cls.abilityRequired[0]) && !smallerAbilities.includes(cls.abilityRequired[1]))
  }

  function chooseClass() {
    let classes = filterPossibleClasses()
    let randomClass = Math.floor(Math.random() * classes.length)
    character.charClass = classes[randomClass]
  }
  chooseClass()

  function getOpenDoors() {
    let str = character.abilities[0].value

    if (str < 9) character.openDoors = "1 em 6"
    if (str >= 9 && str <= 12) character.openDoors = "2 em 6"
    if (str >= 13 && str <= 15) character.openDoors = "3 em 6"
    if (str == 16 || str == 17) character.openDoors = "4 em 6"
    if (str >= 18) character.openDoors = "5 em 6"
  }
  getOpenDoors()

  function rollHP() {
    character.hp = rollDice(character.charClass.hp)
  }
  rollHP()

  function getLanguages() {
    character.languages = character.charClass.languages
  }
  getLanguages()

  function rollMoney() {
    character.money = (rollDice(6) + rollDice(6) + rollDice(6)) * 10
  }
  rollMoney()

  function buyEquip(equip) {
    let randomEntry = Math.floor(Math.random() * equip.length)
    let pickedItem = equip[randomEntry]

    // add the item to character equips if it's affordable
    if (pickedItem.price <= character.money) {
      character.equipment.push(pickedItem)
      character.money -= pickedItem.price
    }
  }
  buyEquip(weapons)
  buyEquip(armor)
  buyEquip(equipment)
  buyEquip(equipment)
  buyEquip(equipment)

  function addAC() {
    let equippedArmor = character.equipment.find((equip, index) => {
      if (equip.type == 'armor') return true;
    })

    if (equippedArmor) {
      character.ac = equippedArmor.ac
    } else {
      character.ac = "9 [0]"
    }
  }
  addAC()

  function addName() {
    let randomNumber = Math.floor(Math.random() * names.length)
    let randomName = names[randomNumber]
    character.name = randomName
  }
  addName()

  console.log(character)

  return (
    <main>

      <Button />

      <Name characterName={character.name} characterClass={character.charClass.name} />

      <Traits />

      <Divider />

      <div className="mainAbilities">
        <Ability
          name="CA"
          value={character.ac}
        />
      </div>

      <div className="abilities">
        {
          character.abilities.map(ability => (
            <Ability
              name={ability.name}
              value={ability.value}
              alt={abilityBonus(ability.value)}
              key={ability.name}
            />
          ))
        }
      </div>
    </main>
  )
}