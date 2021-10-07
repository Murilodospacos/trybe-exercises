import { useState, useEffect } from 'react';

const useAbility = () => {
  const [pokeUrl, setPokeUrl] = useState('');
  const [abilities, setAbilities] = useState('');
  
  useEffect(() => {
    const getAbilities = async () => {
      if(pokeUrl) {
        const { abilities: abilitiesList } = await fetch(pokeUrl).then(data => data.json())
        const result = abilitiesList.map(({ ability: { name } }) => name);

        setAbilities(result);
      }
    }
    getAbilities();
  },[pokeUrl]);

  return [abilities, setPokeUrl]
}

export default useAbility;