import React from "react";
import {
  List,
  ListItem,
  HStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

const GenreListSkeleton = ({ length = 10 }) => {
  return (
    <List>
      {Array.from({ length }).map((_, index) => (
        <ListItem key={index} paddingY="5px">
          <HStack>
            <SkeletonCircle boxSize="32px" borderRadius="8px" />
            <SkeletonText fontSize="lg" noOfLines={1} width="100px" />
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreListSkeleton;
