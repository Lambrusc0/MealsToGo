import React from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components";

const InfoWrapper = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px` };
`

const SearchView = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`

const ListView = styled(View)`
    flex: 1;
    padding: ${(props) => props.theme.space[3]};
`

export const RestaurantsScreen = () => (
  <InfoWrapper>
    <SearchView>
      <Searchbar placeholder="Search" />
    </SearchView>
    <ListView>
      <RestaurantInfoCard />
    </ListView>
  </InfoWrapper>
);
