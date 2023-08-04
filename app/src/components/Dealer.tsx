// src/components/Dealer.tsx

import React, { useState } from 'react';
import shuffle from 'shuffle-array';
import { Card, Deck } from '../card_types';
import generateUNOCards from '../utils';

const Dealer: React.FC = () => {
  const [deck, setDeck] = useState<Deck>(generateUNOCards());

  const handleDeal = () => {
    if (deck.length === 0) {
      alert('The deck is empty!');
      return;
    }

    const dealtCard = deck.pop();
    // Implement logic to handle dealing the card to players/hands
    console.log('Dealt Card:', dealtCard);
    setDeck([...deck]); // Update state to trigger a re-render
  };

  return (
    <div>
      <button onClick={handleDeal}>Deal Card</button>
    </div>
  );
};

export default Dealer;
