import * as React from 'react';
import { StyledMangaContainer } from './Manga.styles';
import MangaItem from './MangaItem';
import { useEffect } from 'react';

type MangaContainerProps = {
  fillManga(): any;
  effectVar: any;
  mangaList: any[];
};

//
// @Fix: After repeating 2 times delete/add throw 'Encountered...' error
//
const MangaContainer = ({
  fillManga,
  effectVar,
  mangaList,
}: MangaContainerProps) => {
  useEffect(() => {
    if (fillManga !== null) fillManga();
  }, effectVar);

  return (
    <StyledMangaContainer>
      {mangaList.length > 0 ? (
        mangaList.map((manga, index) => {
          let isInList = false;

          if (manga.isInMangaList) isInList = true;

          return (
            <MangaItem
              key={index}
              _id={manga._id}
              title={manga.title}
              link={manga.link}
              img={manga.img}
              description={manga.description}
              latestChapter={manga.latestChapter}
              isInMangaList={isInList}
            />
          );
        })
      ) : (
        <div className="no-manga">There is no manga yet</div>
      )}
    </StyledMangaContainer>
  );
};

export default MangaContainer;
