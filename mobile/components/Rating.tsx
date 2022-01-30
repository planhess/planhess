import { FontAwesome } from "@expo/vector-icons";
import { IconProps } from "@expo/vector-icons/build/createIconSet";
import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import Colors from "../constants/Colors";
type RatingProps = IconProps<"star"> & {
  name: string;
  rating: number;
};
const Rating = ({ name, size, color, rating }: RatingProps): JSX.Element => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    for (let i = 0; i < rating; i++) {
      const iconName: string = "star";
      setStars((prev) => prev.concat(iconName));
    }
    if (rating <= 5) {
      const numberOfStarsMissed: number = 5 - rating;
      for (let i = 0; i < numberOfStarsMissed; i++) {
        const iconName: string = "star-o";
        setStars((prev) => prev.concat(iconName));
      }
    }
  }, []);

  return (
    <>
      {stars.map((starName, index) => (
        <FontAwesome name={starName} color={color} key={index} size={size} />
      ))}
    </>
  );
};

export default Rating;
