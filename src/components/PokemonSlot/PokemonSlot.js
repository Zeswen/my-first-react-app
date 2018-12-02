import React from 'react';

import { SlotWrapper } from './PokemonSlot.styled';

const PokemonSlot = ({ name, spriteUrl }) => (
    <SlotWrapper>
        <p>{name}</p>
        <img src={spriteUrl} alt={`${name}_image`}/>
    </SlotWrapper>
)

export default PokemonSlot;