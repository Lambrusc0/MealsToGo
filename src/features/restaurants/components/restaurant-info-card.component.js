import React from "react";
import { Card, Title, Paragraph } from "react-native-paper";
import styled from "styled-components";

const RestaurantCard = styled(Card)`
  padding: 16px;
`

const CardContent = styled(Card.Content)`
  padding-left: 0;
  padding-right: 0;
`

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1600&q=60%20",
    ],
    address = "100 Random street",
    isOPenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <RestaurantCard>
      <Card.Cover key={name} source={{ uri: photos[0] }} />
      <CardContent>
        <Title>{name}</Title>
        <Paragraph>{address}</Paragraph>
      </CardContent>
    </RestaurantCard>
  );
};
