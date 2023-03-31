import React from 'react';
import { Comment } from '../../types/types';
import usersFromServer from '../../api/users';
import { UserInfo } from '../UserInfo';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = (props) => (
  <>
    <div className="CommentInfo">
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">
          {props.comment.name}
        </strong>

        {' by '}

        <a
          className="CommentInfo__email"
          href={`mailto:${props.comment.email}`}
        >
          {props.comment.email}
          <UserInfo list={usersFromServer} />
        </a>
      </div>

      <div className="CommentInfo__body">
        {props.comment.body}
      </div>
    </div>
  </>
);
