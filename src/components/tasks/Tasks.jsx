import React, { useRef, useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import styled from "styled-components";
import { Plus } from "../../assets/svg/SVG";
import { COLUMN_NAMES } from "./constants";
import { tasks } from "./tasksList";

const TasksWrapper = styled.div`
  display: flex;
  width: 100%;
  padding-right: 20px;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;
const TaskList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  max-width: 1170px;
`;
const CreateStatus = styled.div`
  width: 100%;
  max-width: 377px;
  padding: 4px 0;
  @media (max-width: 1400px) {
    max-width: 250px;
  }
`;
const TitleWrapper = styled.div`
  text-align: center;
  padding: 27px 10px 15px 10px;
  border-bottom: 1px solid #f3f3f3;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const Title = styled.h2`
  font-weight: ${(props) => (props.createStatus ? 400 : 500)};
  color: ${(props) => (props.createStatus ? "#8C939F" : "")};
`;
const CardsCount = styled.span`
  background: #e8ebef;
  border-radius: 100px;
  color: #8c939f;
  font-weight: 400;
  padding: 2px 9px;
`;
const CardsWrapper = styled.div`
  min-height: 50vh;
  transition: all 0.3s ease;
  &:not(last-child) {
    border-right: 1px solid #f3f3f3;
  }
`;
const Cards = styled.div`
  display: grid;
  gap: 10px;
  padding: 40px 10px 10px;
`;
const Card = styled.div`
  background: #d8dcff;
  border-radius: 8px;
  padding: 15px;
  gap: 10px;
  cursor: grab;
`;

const MovableItem = ({
  name,
  index,
  currentColumnName,
  moveCardHandler,
  setItems,
  itemColumn,
}) => {
  const changeItemColumn = (currentItem, columnName) => {
    setItems((prevState) => {
      return prevState.map((e) => {
        return {
          ...e,
          column: e.name === currentItem.name ? columnName : e.column,
        };
      });
    });
  };

  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: "Our first type",
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      moveCardHandler(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    item: { index, name, currentColumnName },
    type: "Our first type",
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();

      if (dropResult) {
        const { name } = dropResult;
        const { DO_IT, IN_PROGRESS, SCHEDULED, DONE } = COLUMN_NAMES;
        switch (name) {
          case IN_PROGRESS:
            changeItemColumn(item, IN_PROGRESS);
            break;
          case SCHEDULED:
            changeItemColumn(item, SCHEDULED);
            break;
          case DONE:
            changeItemColumn(item, DONE);
            break;
          case DO_IT:
            changeItemColumn(item, DO_IT);
            break;
          default:
            break;
        }
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.4 : 1;

  drag(drop(ref));

  return (
    <Card
      ref={ref}
      style={{
        opacity,
        background: itemColumn === "Completed" ? "#F0F0F0" : "",
        textDecoration: itemColumn === "Completed" ? "line-through" : "",
      }}
    >
      {name}
    </Card>
  );
};

const Column = ({ children, status }) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: "Our first type",
    drop: () => ({ name: status }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const getBackgroundColor = () => {
    if (isOver) {
      if (canDrop) {
        return "#ececec";
      } else if (!canDrop) {
        return "#ececec";
      }
    } else {
      return "";
    }
  };

  return (
    <CardsWrapper ref={drop} style={{ backgroundColor: getBackgroundColor() }}>
      <TitleWrapper>
        <Title>{status}</Title>
        <CardsCount>{children.length}</CardsCount>
      </TitleWrapper>
      <Cards>{children}</Cards>
    </CardsWrapper>
  );
};

export const Tasks = () => {
  const [items, setItems] = useState(tasks);
  console.log(items);
  const moveCardHandler = (dragIndex, hoverIndex) => {
    const dragItem = items[dragIndex];

    if (dragItem) {
      setItems((prevState) => {
        const coppiedStateArray = [...prevState];

        // remove item by "hoverIndex" and put "dragItem" instead
        const prevItem = coppiedStateArray.splice(hoverIndex, 1, dragItem);

        // remove item by "dragIndex" and put "prevItem" instead
        coppiedStateArray.splice(dragIndex, 1, prevItem[0]);

        return coppiedStateArray;
      });
    }
  };

  const returnItemsForColumn = (columnName) => {
    return items
      .filter((item) => item.column === columnName)
      .map((item, index) => (
        <MovableItem
          key={item.id}
          name={item.name}
          currentColumnName={item.column}
          setItems={setItems}
          index={index}
          moveCardHandler={moveCardHandler}
          itemColumn={item?.column}
        />
      ));
  };

  const { DO_IT, IN_PROGRESS, SCHEDULED, DONE } = COLUMN_NAMES;

  return (
    <TasksWrapper>
      <DndProvider backend={HTML5Backend}>
        <TaskList>
          <Column status={DO_IT}>{returnItemsForColumn(DO_IT)}</Column>
          <Column status={SCHEDULED}>{returnItemsForColumn(SCHEDULED)}</Column>
          <Column status={IN_PROGRESS}>
            {returnItemsForColumn(IN_PROGRESS)}
          </Column>
          <Column status={DONE}>{returnItemsForColumn(DONE)}</Column>
        </TaskList>
        <CreateStatus>
          <TitleWrapper>
            <Title createStatus>
              <Plus secondary /> Create status
            </Title>
          </TitleWrapper>
        </CreateStatus>
      </DndProvider>
    </TasksWrapper>
  );
};
