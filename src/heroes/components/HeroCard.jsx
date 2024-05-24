import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const HeroCard = ({ hero }) => {
  return (
    <div className='col animate__animated animate__fadeIn'>
      <div className='card'>
        <div className='row no-gutters'>
          <div className='col-4'>
            <img
              src={`/assets/heroes/${hero.id}.jpg`}
              alt={hero.superhero}
              className='card-img'
            />
          </div>

          <div className='col-8'>
            <div className='card-body'>
              <h5 className='card-title'>{hero.superhero}</h5>
              <p className='card-text'>{hero.alter_ego}</p>

              {hero.alter_ego !== hero.characters && <p>{hero.characters}</p>}

              <p className='card-text'>
                <small className='text-muted'>{hero.first_appearance}</small>
              </p>

              <Link to={`/hero/${hero.id}`}>Más...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroCard.propTypes = {
  hero: PropTypes.string.isRequired,
};
