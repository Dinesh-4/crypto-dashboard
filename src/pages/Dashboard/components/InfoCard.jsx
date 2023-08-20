import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import { Tag, Text } from "@chakra-ui/react";

const InfoCard = ({ imgUrl, tag, text, inverted }) => {
  return (
    <CustomCard bgImage={imgUrl} bgSize="cover" bgRepeat="no-repeat" bgColor={inverted ? "p.purple" : "white"}>
      <Tag
        color={inverted ? "p.purple" : "white"}
        bg={inverted ? "white" : "p.purple"}
        borderRadius="full"
      >
        {tag}
      </Tag>
      <Text color={inverted ? "white" : "black"} mt="4" fontWeight="medium" textStyle="h5">
        {text}
      </Text>
    </CustomCard>
  );
};

export default InfoCard;
