import React, { FC, ReactNode } from 'react';
import { nanoid } from 'nanoid';
import Star from '../Star';
import { StarItem } from '../../types';

const MAX_RATING: number = 5;

interface Props {
  count: number;
}

const StarsRating: FC<Props> = ({ count }) => {
  if (count <= 0 || count > MAX_RATING) {
    return null;
  }

  const stars: null[] = new Array(count).fill(null);
  const starsToRender: StarItem[] = stars.map((): StarItem => ({
    _id: nanoid(),
  }));

  return (
    <div className="container">
      <ul className="card-body-stars u-clearfix">
        {starsToRender.map(({ _id }: StarItem): ReactNode => {
          return (
            <li key={_id}>
              <Star />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StarsRating;
