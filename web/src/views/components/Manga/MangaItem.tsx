import * as React from 'react';

type MangaItemProps = {
  _id: string;
  title: string;
  link: string;
  description: string;
  img: string;
  latestChapter: string;
  isShow: boolean;
};

const MangaItem = ({
  _id,
  title,
  link,
  description,
  img,
  latestChapter,
  isShow,
}: MangaItemProps) => {
  return <>{title}</>;
};

export default MangaItem;
