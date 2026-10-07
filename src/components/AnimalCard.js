import PropTypes from 'prop-types';

export default function AnimalCard({
  name,
  scientificName,
  size,
  diet,
  additional,
  showAdditional,
}) {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '20px',
        margin: '15px',
        borderRadius: '10px',
      }}
    >
      <h2>{name}</h2>

      <p>
        <strong>Scientific Name:</strong> {scientificName}
      </p>

      <p>
        <strong>Size:</strong> {size} kg
      </p>

      <p>
        <strong>Diet:</strong> {diet.join(', ')}
      </p>

      <button onClick={() => showAdditional(additional)}>
        More Info
      </button>
    </div>
  );
}

AnimalCard.propTypes = {
  additional: PropTypes.shape({
    link: PropTypes.string,
    notes: PropTypes.string,
  }),

  diet: PropTypes.arrayOf(PropTypes.string).isRequired,

  name: PropTypes.string.isRequired,

  scientificName: PropTypes.string.isRequired,

  showAdditional: PropTypes.func.isRequired,

  size: PropTypes.number.isRequired,
};

AnimalCard.defaultProps = {
  additional: {
    notes: 'No Additional Information',
  },
};