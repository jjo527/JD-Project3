// src/types.ts

export enum CardColor {
    Red = 'red',
    Green = 'green',
    Blue = 'blue',
    Yellow = 'yellow',
  }

  export enum CardValue {
    Zero = '0',
    One = '1',
    Two = '2',
    // Add other values as needed
  }

  export type Card = {
    id: number;
    color: CardColor;
    value: CardValue | string; // You can use `CardValue` enum here if you want predefined values only
  };

  export type Deck = Card[];
