import React, {useContext} from "react";
import { SafeAreaView, StatusBar, View, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const SearchView = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => {
  const restaurantContext = useContext(RestaurantsContext);
  return (
    <SafeArea>
      <SearchView>
        <Searchbar placeholder="Search"/>
      </SearchView>
      <RestaurantList
        data={restaurantContext.restaurants}
        renderItem={() => <RestaurantInfoCard/>}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  )
};
