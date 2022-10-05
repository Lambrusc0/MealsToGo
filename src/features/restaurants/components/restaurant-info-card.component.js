import React from "react";
import { Card, Title, Paragraph } from "react-native-paper";
import styled from "styled-components";
import {fontSizes} from "../../../infrastructure/theme/fonts";

const RestaurantCard = styled(Card)`
  padding: ${(props) => props.theme.space[3]};
`

const CardContent = styled(Card.Content)`
  padding-left: ${(props) => props.theme.space[0]};
  padding-right: ${(props) => props.theme.space[0]};
`

const CardTitle = styled(Title)`
  color: ${(props) => props.theme.colors.ui.primary};
  margin-top: ${(props) => props.theme.space[3]};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
`

const CardParagraph = styled(Paragraph)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
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
        <CardTitle>{name}</CardTitle>
        <CardParagraph>{address}</CardParagraph>
      </CardContent>
    </RestaurantCard>
  );
};
