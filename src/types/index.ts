export interface ItemProps {
  id: string;
  title: string;
  cardId: string;
}

export type CardProps = {
  id: string;
  title: string;
  countOfList: number;
  items: ItemProps[];
};
