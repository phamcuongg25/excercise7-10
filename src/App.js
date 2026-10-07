import React from 'react';
import EventHandlingDemo from './components/EventHandlingDemo';
import RenderAndCommitDemo from './components/RenderAndCommitDemo';
import SnapshotDemo from './components/SnapshotDemo';

import AnimalCard from './components/AnimalCard';
import animals from './data/animals';

function App() {
  const showAdditionalData = (additional) => {
    const additionalData = Object.entries(additional)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n');

    alert(additionalData);
  };

  return (
    <div>
      <EventHandlingDemo />
      <RenderAndCommitDemo />
      <SnapshotDemo />
      <h1>Animals</h1>

      {animals.map((animal) => (
        <AnimalCard
          key={animal.name}
          name={animal.name}
          scientificName={animal.scientificName}
          size={animal.size}
          diet={animal.diet}
          additional={animal.additional}
          showAdditional={showAdditionalData}
        />
      ))}
    </div>
  );
}

export default App;
