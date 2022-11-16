const weapons = [
  {
    name: "Adaga",
    price: 3,
    damage: "1d4",
    weight: 10,
    about: "corpo-a-corpo , longa distância",
    classesAble: ["Anão", "Elfo", "Guerreiro", "Ladão", "Mago", "Pequenino"]
  },
  {
    name: "Adaga de Prata",
    price: 30,
    damage: "1d4",
    weight: 10,
    about: "corpo-a-corpo, longa distância",
    classesAble: ["Anão", "Elfo", "Guerreiro", "Ladão", "Mago", "Pequenino"]
  },
  {
    name: "Água Benta",
    price: 25,
    damage: "1d8",
    weight: 0,
    about: "esparrame, longa distância",
    classesAble: ["Anão", "Elfo", "Guerreiro", "Ladão", "Pequenino"]
  },
  {
    name: "Alabarda",
    price: 7,
    damage: "1d10",
    weight: 120,
    about: "corpo-a-corpo, duas-mãos, escora, alcance",
    classesAble: ["Anão", "Elfo", "Guerreiro", "Ladão", "Pequenino"]
  },
  {
    name: "Ânfora de Óleo em chamas)",
    price: 2,
    damage: "1d8",
    weight: 0,
    about: "esparrame, longa distância",
    classesAble: ["Anão", "Elfo", "Guerreiro", "Ladão", "Pequenino"]
  },
  {
    name: "Arco Curto",
    price: 25,
    damage: "1d6",
    weight: 30,
    about: "duas-mãos, longa distância",
    classesAble: ["Anão", "Elfo", "Guerreiro", "Ladão", "Pequenino"]
  },
  {
    name: "Arco Longo",
    price: 40,
    damage: "1d8",
    weight: 30,
    about: "duas-mãos, longa distância",
    classesAble: ["Anão", "Elfo", "Guerreiro"]
  },
  {
    name: "Azagaia (Javelin)",
    price: 1,
    damage: "1d6",
    weight: 20,
    about: "longa distância",
    classesAble: ["Anão", "Elfo", "Guerreiro", "Ladão", "Pequenino"]
  },
  {
    name: "Besta Leve",
    price: 16,
    damage: "1d6",
    weight: 50,
    about: "longa distância, recarga",
    classesAble: ["Anão", "Elfo", "Guerreiro", "Ladão", "Mago", "Pequenino"]
  },
  {
    name: "Basta Pesada",
    price: 25,
    damage: "1d8",
    weight: 80,
    about: "longa distância, recarga",
    classesAble: ["Anão", "Elfo", "Guerreiro", "Ladão", "Mago", "Pequenino"]
  },
  {
    name: "Cajado",
    type: "weapon",
    price: 2,
    damage: "1d4",
    weight: 40,
    about: "corpo-a-corpo, duas-mãos, esmagamento",
    classesAble: ["Anão", "Clérigo", "Elfo", "Guerreiro", "Mago", "Pequenino"]
  },
  {
    name: "Cimitarra",
    type: "weapon",
    price: 15,
    damage: "1d8",
    weight: 60,
    about: "corpo-a-corpo",
    classesAble: ["Anão", "Elfo", "Guerreiro", "Ladão", "Pequenino"]
  },
  {
    name: "Clava",
    type: "weapon",
    price: 3,
    damage: "1d6",
    weight: 50,
    about: "corpo-a-corpo, esmagamento",
    classesAble: ["Anão", "Clérigo", "Elfo", "Guerreiro", "Ladão", "Pequenino"]
  },
  {
    name: "Dardo",
    type: "weapon",
    price: 1,
    damage: "1d3",
    weight: 0,
    about: "longa distância",
    classesAble: ["Anão", "Elfo", "Guerreiro", "Ladão", "Pequenino"]
  },
  {
    name: "Espada Bastarda",
    type: "weapon",
    price: 25,
    damage: "1d8/2d4",
    weight: 70,
    about: "corpo-a-corpo",
    classesAble: ["Anão", "Elfo", "Guerreiro", "Ladão", "Pequenino"]
  },
  {
    name: "Eapada Curta",
    type: "weapon",
    price: 7,
    damage: "1d6",
    weight: 30,
    about: "corpo-a-corpo",
    classesAble: ["Anão", "Elfo", "Guerreiro", "Ladão", "Pequenino"]
  },
  {
    name: "Espada da Duas Mãos",
    type: "weapon",
    price: 30,
    damage: "1d10",
    weight: 150,
    about: "corpo-a-corpo, duas-mãos",
    classesAble: ["Anão", "Elfo", "Guerreiro"]
  },
  {
    name: "Eapada Larga",
    type: "weapon",
    price: 10,
    damage: "1d6+1",
    weight: 60,
    about: "corpo-a-corpo",
    classesAble: ["Anão", "Elfo", "Guerreiro", "Ladão", "Pequenino"]
  },
  {
    name: "Eapada Longa",
    type: "weapon",
    price: 15,
    damage: "1d8",
    weight: 60,
    about: "corpo-a-corpo",
    classesAble: ["Anão", "Elfo", "Guerreiro", "Ladão", "Pequenino"]
  },
  {
    name: "Funda",
    type: "weapon",
    price: 2,
    damage: "1d4",
    weight: 0,
    about: "longa distância, esmagamento",
    classesAble: ["Anão", "Clérigo", "Elfo", "Guerreiro", "Ladão", "Pequenino"]
  },
  {
    name: "Lança",
    type: "weapon",
    price: 3,
    damage: "1d6",
    weight: 30,
    about: "corpo-a-corpo, escora, longa distância, alcance",
    classesAble: ["Anão", "Elfo", "Guerreiro", "Ladão", "Pequenino"]
  },
  {
    name: "Lança da cavalaria",
    type: "weapon",
    price: 7,
    damage: "1d6",
    weight: 120,
    about: "corpo-a-corpo, investida, alcance",
    classesAble: ["Anão", "Elfo", "Guerreiro", "Ladão", "Pequenino"]
  },
  {
    name: "Maça",
    type: "weapon",
    price: 5,
    damage: "1d6",
    weight: 30,
    about: "corpo-a-corpo, esmagamento",
    classesAble: ["Anão", "Clérigo", "Elfo", "Guerreiro", "Ladão", "Pequenino"]
  },
  {
    name: "Maça com Espinhos",
    type: "weapon",
    price: 5,
    damage: "2d4",
    weight: 60,
    about: "corpo-a-corpo, duas-mãos",
    classesAble: ["Anão", "Elfo", "Guerreiro", "Pequenino"]
  },
  {
    name: "Maça Pesada",
    type: "weapon",
    price: 7,
    damage: "1d8",
    weight: 50,
    about: "corpo-a-corpo, duas-mãos, esmagamento",
    classesAble: ["Anão", "Clérigo", "Elfo", "Guerreiro", "Pequenino"]
  },
  {
    name: "Machado de Guerra",
    type: "weapon",
    price: 6,
    damage: "1d8",
    weight: 50,
    about: "corpo-a-corpo, duas-mãos",
    classesAble: ["Anão", "Elfo", "Guerreiro", "Pequenino"]
  },
  {
    name: "Machado de Mão",
    type: "weapon",
    price: 3,
    damage: "1d6",
    weight: 30,
    about: "corpo-a-corpo",
    classesAble: ["Anão", "Elfo", "Guerreiro", "Ladão", "Pequenino"]
  },
  {
    name: "Mangual",
    type: "weapon",
    price: 3,
    damage: "1d6",
    weight: 30,
    about: "corpo-a-corpo",
    classesAble: ["Anão", "Clérigo", "Elfo", "Guerreiro", "Ladão", "Pequenino"]
  },
  {
    name: "Mangaal Pesado",
    type: "weapon",
    price: 8,
    damage: "1d8",
    weight: 50,
    about: "corpo-a-corpo, duas-mãos",
    classesAble: ["Anão", "Clérigo", "Elfo", "Guerreiro", "Pequenino"]
  },
  {
    name: "Martalo de Mão",
    type: "weapon",
    price: 5,
    damage: "1d6",
    weight: 20,
    about: "corpo-a-corpo, esmagamento",
    classesAble: ["Anão", "Clérigo", "Elfo", "Guerreiro", "Ladão", "Pequenino"]
  },
  {
    name: "Marteloade Guerra",
    type: "weapon",
    price: 7,
    damage: "1d8",
    weight: 30,
    about: "corpo-a-corpo, duas-mãos, esmagamento",
    classesAble: ["Anão", "Clérigo", "Elfo", "Guerreiro", "Pequenino"]
  },
  {
    name: "Porrete",
    type: "weapon",
    price: 2,
    damage: "1d4",
    weight: 10,
    about: "corpo-a-corpo, esmagamento",
    classesAble: ["Anão", "Elfo", "Guerreiro", "Ladão", "Pequenino"]
  },
  {
    name: "Tridente",
    price: 4,
    damage: "1d6",
    weight: 60,
    about: "corpo-a-corpo, duas-mãos",
    classesAble: ["Anão", "Elfo", "Guerreiro", "Pequenino"]
  },
]

export default weapons