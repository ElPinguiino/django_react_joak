import React, {useState} from 'react';
import ReactCardFlip from 'react-card-flip';
import Form from './Form';
import background from '../../images/onlinecatering.png';

const MenuCard = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div>
            <img
                src={background}
                alt="Menu"
            />
          <button onClick={handleClick}>Submit A Request</button>
        </div>

        <div>
          This is the back of the card.
          <button onClick={handleClick}>Click to flip</button>
        </div>
      </ReactCardFlip>
    )
}

export default MenuCard;
