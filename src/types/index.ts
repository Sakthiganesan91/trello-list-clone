export interface ItemProps {
  id: number;
  title: string;
  cardId: number;
}

export type CardProps = {
  id: number;
  title: string;
  countOfList: number;
  items: ItemProps[];
};
