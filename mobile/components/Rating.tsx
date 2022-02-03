import { FontAwesome } from "@expo/vector-icons";
import { IconProps } from "@expo/vector-icons/build/createIconSet";
import React, { useEffect, useState } from "react";

type IconName = React.ComponentProps<typeof FontAwesome>["name"];

type RatingProps = {
  color: string;
  size: number;
  rating: number;
};

const RATING_VALUE_MAX = 5;

const Rating = ({ size, color, rating }: RatingProps): JSX.Element | null => {
  const [stars, setStars] = useState<Array<IconName>>([]);

  useEffect(() => {
    for (let i = 0; i < rating; i++) {
      const iconName: IconName = "star";
      setStars((prev) => prev.concat(iconName));
    }
    if (rating <= RATING_VALUE_MAX) {
      const numberOfStarsMissed: number = RATING_VALUE_MAX - rating;
      for (let i = 0; i < numberOfStarsMissed; i++) {
        const iconName: IconName = "star-o";
        setStars((prev) => prev.concat(iconName));
      }
    }
  }, []);
  if (rating > RATING_VALUE_MAX) {
    return null;
  }

  return (
    <>
      {stars.map((starName: IconName, index) => (
        <FontAwesome name={starName} color={color} key={index} size={size} />
      ))}
    </>
  );
};

export default Rating;
