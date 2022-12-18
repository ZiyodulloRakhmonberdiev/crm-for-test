// import { Box, Badge, Text, Flex } from '@chakra-ui/core';
import { useDrag } from "react-dnd";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: #d8dcff;
  border-radius: 8px;
  padding: 15px;
  gap: 10px;
  cursor: grab;
  transition: all 0.2s ease;
  opacity: ${(props) => (props.isDragging ? 0.5 : 1)};
`;
const Title = styled.h2`
  font-weight: 500;
  text-align: center;
  padding: 27px 10px 15px 10px;
  border-bottom: 1px solid #f3f3f3;
`;
const Time = styled.h6`
  color: #404784;
  font-size: 13px;
`;

const TaskCard = (props) => {
  const [{ isDragging }, drag] = useDrag({
    item: {
      id: props._id,
    },
    type: "CARD",
    // type: ItemTypes[props.type],
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <Card ref={drag} isDragging={isDragging}>
      <Title>{props.title}</Title>
      <Time textAlign="center" fontSize="md">
        {props.time}
      </Time>
    </Card>
  );
};

export default TaskCard;
