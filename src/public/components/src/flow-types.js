export type ListType = {
  items: string[],
  renderer: any => any,
  inline?: boolean,
  className?: string,
  itemClassName?: string,
}

export type TagType = {
  children: any,
  icon?: string,
  small?: boolean,
  className?: string,
  style?: {[string]: string},
};
