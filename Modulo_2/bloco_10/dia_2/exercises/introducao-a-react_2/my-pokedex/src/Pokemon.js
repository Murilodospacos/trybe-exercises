import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    const { value, measurementUnit } = averageWeight;
    return (
      <div>
        <li>{name}</li>
        <li>{type}</li>
        <li>{value} {measurementUnit}</li>
        <img src={image} alt="pokemons" />
      </div>
    );
  }
}

export default Pokemon;