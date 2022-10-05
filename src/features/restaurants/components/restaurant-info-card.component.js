import React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { StyleSheet } from "react-native";
import styled from "styled-components";

const Text = styled.Text`
  padding: 0;
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
    <Card style={styles.card}>
      <Card.Cover key={name} source={{ uri: photos[0] }} />
      <Card.Content style={styles.content}>
        <Title>{name}</Title>
        <Text>{name}</Text>
        <Paragraph>{address}</Paragraph>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
  },
  content: {
    paddingLeft: 0,
    paddingRight: 0,
  },
});
