import { FontAwesome } from "@expo/vector-icons";
import { IconProps } from "@expo/vector-icons/build/createIconSet";
import React, { useEffect, useState } from "react";

type IconName = React.ComponentProps<typeof FontAwesome>["name"];

type RatingProps = {
  color: string;
  size: number;
  rating: number;
};
const Rating = ({ size, color, rating }: RatingProps): JSX.Element => {
  const [stars, setStars] = useState<Array<IconName>>([]);

  useEffect(() => {
    for (let i = 0; i < rating; i++) {
      const iconName: IconName = "star";
      setStars((prev) => prev.concat(iconName));
    }
    if (rating <= 5) {
      const numberOfStarsMissed: number = 5 - rating;
      for (let i = 0; i < numberOfStarsMissed; i++) {
        const iconName: IconName = "star-o";
        setStars((prev) => prev.concat(iconName));
      }
    }
  }, []);

  return (
    <>
      {stars.length <= 5 &&
        stars.map((starName: IconName, index) => (
          <FontAwesome name={starName} color={color} key={index} size={size} />
        ))}
    </>
  );
};

export default Rating;
