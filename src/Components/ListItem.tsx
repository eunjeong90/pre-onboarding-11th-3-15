import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IIssueChild } from 'Interface/gitHubAPI';
import * as S from './ListItem.style';
export interface IListItem {
  issues: IIssueChild;
  measureRef?: any;
}
export default function ListItem({ issues, measureRef }: IListItem) {
  const { number, title, user, created_at, comments } = issues;
  const navigate = useNavigate();
  const handleMoveDetailPage = (issueId: number) => navigate(`/${issueId}`);
  return (
    <S.List ref={measureRef}>
      <S.Box onClick={() => handleMoveDetailPage(number)}>
        <S.Text># {number}</S.Text>
        <S.Text title={title}>{title}</S.Text>
        <S.Text>user: {user?.login}</S.Text>
        <S.Text>created: {created_at}</S.Text>
        <S.Text>comments: {comments}</S.Text>
      </S.Box>
    </S.List>
  );
}
