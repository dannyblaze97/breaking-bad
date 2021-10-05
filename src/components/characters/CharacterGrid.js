import React from "react";
import CharacterItem from "./CharacterItem";
import Spinner from "../ui/Spinner";

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharacterItem key={item.char_id} item={item}></CharacterItem>
      ))}
    </section>
  );
};
/*
const CharacterGrid = ({ items, isLoading }) => {
  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <section className="cards">
          {items.map((item) => (
            <h1>{item.name}</h1>
          ))}
        </section>
      )}
    </div>
  );
};
*/
export default CharacterGrid;
