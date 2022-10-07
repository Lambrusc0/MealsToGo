import React from "react";
import { Text, Image, View } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import styled from "styled-components";

import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

import { fontSizes } from "../../../infrastructure/theme/fonts";
import { space } from "../../../infrastructure/theme/spacing";
import { colors } from "../../../infrastructure/theme/colors";
import { fonts } from "../../../infrastructure/theme/fonts";
import {Spacer} from "../../../components/spacer/spacer.component";

const RestaurantCard = styled(Card)`
  padding: ${space[3]};
`

const CardContent = styled(Card.Content)`
  padding-left: ${space[0]};
  padding-right: ${space[0]};
`

const CardTitle = styled(Title)`
  color: ${colors.ui.primary};
  margin-top: ${space[3]};
  font-family: ${fonts.heading};
  font-size: ${fontSizes.title};
`

const CardParagraph = styled(Paragraph)`
  font-family: ${fonts.body};
  font-size: ${fontSizes.caption};
`

const Rating = styled.View`
  flex-direction: row;
  padding: ${space[2]} ${space[0]};
`

const Section = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

const SectionEnd = styled(View)`
  align-self: flex-end;
  display: flex;
  flex-direction: row;
`

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1600&q=60%20",
    ],
    address = "100 Random street",
    isOPenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard key={name}>
      <Card.Cover source={{ uri: photos[0] }} />
      <CardContent>
        <CardTitle>{name}</CardTitle>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {
              isClosedTemporarily && <CardParagraph style={{color: 'red'}}>CLOSED TEMPORARILY</CardParagraph>
            }
            {
              isOPenNow ?
                <Spacer position='left' size='large'>
                  <SvgXml xml={open} width={20} height={20} />
                </Spacer>
                :
                <></>
            }
            <Spacer position='left' size='large'>
              <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <CardParagraph>{address}</CardParagraph>
      </CardContent>
    </RestaurantCard>
  );
};
