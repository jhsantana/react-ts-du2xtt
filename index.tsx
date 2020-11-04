import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import { FiTrash2 } from "react-icons/fi";

import Personagem, { PersonagemProps } from "./components/Personagem";
import Button from "./components/Button";

import "./style-global.css";
import * as S from "./styles";

const fetchJson = async url => {
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json"
  };
  const response = await fetch(url, { headers });
  return response.json();
};

const App = () => {
  const [personagens, setPersonagens] = useState<PersonagemProps[]>([]);

  useEffect(() => {
    const url = `https://swapi.dev/api/people/?format=json`;
    fetchJson(url).then(({ results }) => {
      const sort = results.sort((a: PersonagemProps, b: PersonagemProps) =>
        a.name.localeCompare(b.name)
      );
      setPersonagens(sort);
    });
  }, []);

  const removeFromList = (idx?: Number) => {
    const element = document.getElementById("select") as HTMLSelectElement;
    let index: Number = parseInt(element.value);
    if (idx !== null) {
      index = idx;
    }

    personagens.splice(index, 1);

    setPersonagens([...personagens]);
  };

  return (
    <main>
      {personagens.length > 0 && (
        <S.SelectContainer>
          <select className="select" id="select">
            {personagens.map((personagem, index) => (
              <option value={index} key={index}>
                {personagem.name}
              </option>
            ))}
          </select>
          <Button
            onClick={() => removeFromList(null)}
            color="transparent"
            icon={<FiTrash2 color="red" size={20} />}
          />
        </S.SelectContainer>
      )}

      <S.Lista>
        {personagens.length > 0 &&
          personagens.map((personagem, index) => (
            <Personagem
              {...personagem}
              key={index}
              onClick={() => removeFromList(index)}
            />
          ))}
      </S.Lista>
    </main>
  );
};

render(<App />, document.getElementById("root"));
