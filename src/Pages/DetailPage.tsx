import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useClient } from 'Context/clientContext';
import { IIssueChild } from 'Interface/gitHubAPI';

export default function DetailPage() {
  const params = useParams();
  const { issueId } = params;
  const { getIssueDetailPage } = useClient();
  const [issueDetail, setIssueDetail] = useState<IIssueChild>({} as IIssueChild);
  useEffect(() => {
    getIssueDetailPage(Number(issueId)).then(setIssueDetail);
  }, [getIssueDetailPage, issueId]);
  return <div>{issueDetail.id}</div>;
}
