import React, { useState, useEffect } from "react";
import "./BingoSet.css"

const ROWS = 5;
const COLUMNS = 5;

const BingoSet = () => {
  const [bingoCard1, setBingoCard1] = useState([]);
  const [bingoCard2, setBingoCard2] = useState([]);
  const [bingoCard3, setBingoCard3] = useState([]);
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    let numbersArray = [];
    for (let i = 1; i <= 76; i++) {
      numbersArray.push(i);
    }
    setNumbers(numbersArray);
  }, []);

  useEffect(() => {
    if (numbers.length === 0) return;
    let bingoCard = [];
    for (let i = 0; i < ROWS; i++) {
      let row = [];
      for (let j = 0; j < COLUMNS; j++) {
           if (i === 2 && j === 2) {
          row.push(<td key={j} className="icon-smiley">🥳</td>);
          continue;
        }
        let filteredNumbers = numbers.filter(
          (num) => num >= (j * 15 + 1) && num <= (j + 1) * 15
        );
        let randomIndex = Math.floor(Math.random() * filteredNumbers.length);
        row.push(filteredNumbers[randomIndex]);
        let index = numbers.indexOf(filteredNumbers[randomIndex]);
        numbers.splice(index, 1);
      }
      bingoCard.push(row);
    }
    setBingoCard1(bingoCard);
  }, [numbers]);

  useEffect(() => {
    if (numbers.length === 0) return;
    let bingoCard = [];
    for (let i = 0; i < ROWS; i++) {
      let row = [];
      for (let j = 0; j < COLUMNS; j++) {
           if (i === 2 && j === 2) {
          row.push(<td key={j} className="icon-smiley">🎶</td>);
          continue;
        }
        let filteredNumbers = numbers.filter(
          (num) => num >= (j * 15 + 1) && num <= (j + 1) * 15
        );
        let randomIndex = Math.floor(Math.random() * filteredNumbers.length);
        row.push(filteredNumbers[randomIndex]);
        let index = numbers.indexOf(filteredNumbers[randomIndex]);
        numbers.splice(index, 1);
      }
      bingoCard.push(row);
    }
    setBingoCard2(bingoCard);
  }, [numbers]);

  useEffect(() => {
    if (numbers.length === 0) return;
    let bingoCard = [];
    for (let i = 0; i < ROWS; i++) {
      let row = [];
      for (let j = 0; j < COLUMNS; j++) {
           if (i === 2 && j === 2) {
          row.push(<td key={j} className="icon-smiley">🍻</td>);
          continue;
        }
        let filteredNumbers = numbers.filter(
          (num) => num >= (j * 15 + 1) && num <= (j + 1) * 15
        );
        let randomIndex = Math.floor(Math.random() * filteredNumbers.length);
        row.push(filteredNumbers[randomIndex]);
        let index = numbers.indexOf(filteredNumbers[randomIndex]);
        numbers.splice(index, 1);
      }
      bingoCard.push(row);
    }
    setBingoCard3(bingoCard);
  }, [numbers]);

  return (
    <div>
      <table>
        <tbody>
          {bingoCard1.map((row, i) => (
            <tr key={i}>
              {row.map((num, j) => (
                <td key={j}>{num}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <table>
        <tbody>
          {bingoCard2.map((row, i) => (
            <tr key={i}>
              {row.map((num, j) => (
                <td key={j}>{num}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <table>
        <tbody>
          {bingoCard3.map((row, i) => (
            <tr key={i}>
              {row.map((num, j) => (
                <td key={j}>{num}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BingoSet;