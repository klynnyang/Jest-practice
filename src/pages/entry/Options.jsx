import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import ScoopOptions from "./ScoopOptions";
import ToppingOptions from "./ToppingOptions";
import { Row } from "react-bootstrap";
import AlertBanner from "../common/AlertBanner";

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

  // optionType is 'scoops' or 'toppings'
  useEffect(() => {
    const getOptions = async () => {
      try {
        let axiosResponse = await axios.get(
          `http://localhost:3000/${optionType}`
        );
        let response = await axiosResponse.data;
        setItems(response);
      } catch (error) {
        setError(true);
      }
    };
    getOptions();
  }, [optionType]);

  const ItemComponent = optionType === "scoops" ? ScoopOptions : ToppingOptions;

  if (error) {
    return <AlertBanner />;
  }

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));
  return <Row>{optionItems}</Row>;
}
