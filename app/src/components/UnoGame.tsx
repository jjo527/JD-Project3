import React, { useState } from "react";
import exampleImage from "../assets/images/Blue_4.png";
import { Card, Deck, CardValue, CardColor, Player } from "../card_types";
import generateUNOCards from "../utils";
import shuffle from "shuffle-array";
import Player1Cards from "./Player1Cards";
import NonStringList from "./Test";

const UnoGame: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);

  const handleAddImage = () => {
    setImages([...images, exampleImage]);
  };

  var deck = generateUNOCards();
  deck = shuffle(deck);


  const firstCard: Card = {
    id: 1,
    color: CardColor.BLANK,
    value: CardValue.BLANK
   };



  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState("");
  const [player1Cards, setPlayer1Cards] = useState<Deck>([]);
  const [player2Cards, setPlayer2Cards] = useState<Deck>([]);
  const [turn, setTurn] = useState("");
  const [playCardsPile, setPlayCardsPile] = useState([]);
  const [drawCardPile, setDrawCardPile] = useState<Deck>(deck);
  const [currentCard, setcurrentCard] = useState<Card>(firstCard);

  const [listData, setListData] = useState([1, 2, 3, 4, 5, 6]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedIndex(index);
    console.log("Clicked index:", index);
  };

  const handleStartGame = () => {
    var deck: Deck = drawCardPile;
    var player1 = deck.slice(0, 7);
    var player2 = deck.slice(7, 14);
    var firstCard = deck[14];

    console.log("Deck, len: ", deck.length, " value: ", deck);
    console.log("P1, len: ", player1.length, " value: ", player1);
    console.log("P2, len: ", player2.length, " value: ", player2);
    console.log("first card: ", firstCard);

    deck = deck.slice(15);
    console.log("Reduced Deck, len: ", deck.length, " value: ", deck);

    setTurn(Player.ONE);
    setPlayer1Cards(player1);
    setPlayer2Cards(player2);
    setDrawCardPile(deck);
    setcurrentCard(firstCard);
  };

  const handleDrawCard = () => {
    var deck: Deck = drawCardPile;
    var newCard: Card = deck.shift();
    console.log("draw card, ", newCard);
    setDrawCardPile(deck);


    if(turn == Player.ONE) {
      console.log("Drawing card for Player 1!")
      setPlayer1Cards([...player1Cards, newCard]);
    }
    else {
      console.log("Drawing card for Player 2!")
      setPlayer2Cards([...player2Cards, newCard]);
    }

  };

  const handleSeeValues = () => {
    console.log("Current Turn: ", turn);
    console.log("player 1 num cards: ", player1Cards.length);
    console.log("player 1 cards: ", player1Cards);
    console.log(drawCardPile);
  };

  const handleEndOfTurn = () => {
    // switching turn when theres two players
    // todo: add more players later
    if (turn == Player.TWO || turn == "") {
      setTurn(Player.ONE);
    } else {
      setTurn(Player.TWO);
    }
  };

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      {/* Game Buttons */}
      <div>
        <button onClick={handleStartGame}>Start Game</button>
        <button onClick={handleDrawCard}>Draw Card</button>
        <button onClick={handleSeeValues}>Debug </button>
        <button onClick={handleEndOfTurn}>End Turn</button>
      </div>

      {/* Current Status */}
      <div>
        <h1> Current Turn: {turn} | Current Card: {currentCard.color} {currentCard.value}</h1>
      </div>

      {/*Player 1's Cards sections  */}
      <div>
        <h1>Player 1's Cards</h1>
        {player1Cards.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            style={{
              padding: "10px",
              border:
                index === selectedIndex ? "2px solid blue" : "1px solid black",
              backgroundColor:
                index === selectedIndex ? "lightblue" : "transparent",
              cursor: "pointer",
            }}
          >
            <div>
              {item.color} {item.value}
            </div>
          </div>
        ))}
      </div>

      {/*Player 2's Cards sections  */}
      <div>
        <h1>Player 2's Cards</h1>
        {player2Cards.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            style={{
              padding: "10px",
              border:
                index === selectedIndex ? "2px solid blue" : "1px solid black",
              backgroundColor:
                index === selectedIndex ? "lightblue" : "transparent",
              cursor: "pointer",
            }}
          >
            <div>
              {item.color} {item.value}
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: "flex" }}>
        {images.map((imageUrl, index) => (
          <div key={index} style={{ flex: 1, margin: "5px" }}>
            <img
              src={imageUrl}
              alt={`Image ${index}`}
              style={{ width: "100%", height: "250px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UnoGame;
