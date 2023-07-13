import React, { useEffect } from 'react';
import { useClient } from 'Context/clientContext';
import { IIssueChild } from 'Interface/gitHubAPI';
import ListItem from 'Components/ListItem';
import useOnScreen from 'hooks/useOnScreen';
import AddBox from 'Components/Common/CommercialContainer/CommercialContainer';

export default function MainPage() {
  const { isLoading, hasMore, issueList, handleLoadList } = useClient();
  const { measureRef, isIntersecting, observer } = useOnScreen();

  useEffect(() => {
    if (isIntersecting && hasMore) {
      handleLoadList();
      observer?.disconnect();
    }
  }, [isIntersecting, hasMore, handleLoadList]);

  return (
    <ul>
      {issueList.map((issues: IIssueChild, index: number) => {
        if ((index + 1) % 5 === 0) return <AddBox />;
        if (index + 1 === issueList.length - 1) {
          return <ListItem key={issues.id + index} issues={issues} measureRef={measureRef} />;
        }
        return <ListItem key={issues.id + index} issues={issues} />;
      })}
      {isLoading && <div style={{ height: '50px' }}>isLoading...</div>}
    </ul>
  );
}
