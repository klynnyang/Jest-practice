import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import ScoopOptions from "./ScoopOptions";
import ToppingOptions from "./ToppingOptions";
import { Row } from "react-bootstrap";
import AlertBanner from "../common/AlertBanner";
import { pricePerItem } from "../../constants";
import { useOrderDetails } from "../../contexts/OrderDetails";

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  const [orderDetails, updateItemCount] = useOrderDetails();

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
  const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase();

  if (error) {
    return <AlertBanner />;
  }

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
      updateItemCount={(itemName, newItemCount) =>
        updateItemCount(itemName, newItemCount, optionType)
      }
    />
  ));
  return (
    <>
      <h2>{title}</h2>
      <p>{pricePerItem[optionType]} each</p>
      <p>
        {title} total:
        {orderDetails.totals[optionType]}
      </p>
      <Row>{optionItems}</Row>
    </>
  );
}
