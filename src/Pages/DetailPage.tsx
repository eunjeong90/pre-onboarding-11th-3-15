import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useClient } from 'Context/clientContext';
import { IIssueChild } from 'Interface/gitHubAPI';
import MarkdownRenderer from 'Components/Common/MarkdownRenderer/MarkdownRenderer';

export default function DetailPage() {
  const params = useParams();
  const { issueId } = params;
  const { getIssueDetailPage } = useClient();
  const [issueDetail, setIssueDetail] = useState<IIssueChild>({} as IIssueChild);

  useEffect(() => {
    getIssueDetailPage(Number(issueId)).then(setIssueDetail);
  }, [getIssueDetailPage, issueId]);

  return (
    <>
      <p>번호 {issueDetail.number}</p>
      <p>제목 {issueDetail.title}</p>
      <p>작성자 {issueDetail.user?.login}</p>
      <p>작성일 {issueDetail.created_at}</p>
      <p>코멘트 수 {issueDetail.comments}</p>
      <p>작성자 프로필 이미지 {issueDetail.user?.avatar_url}</p>
      <MarkdownRenderer>{issueDetail.body}</MarkdownRenderer>
    </>
  );
}
