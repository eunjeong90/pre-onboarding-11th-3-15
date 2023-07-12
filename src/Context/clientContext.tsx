import { IIssueChild, TIssue } from 'Interface/gitHubAPI';
import { ReactNode, createContext, useCallback, useContext, useEffect, useState } from 'react';
import { IGitHubAPIs } from 'Service/gitHubService';

interface IClientReturnProps {
  issueList: TIssue;
  getIssueDetailPage: (id: number) => Promise<IIssueChild>;
  handleLoadList: () => void;
  isLoading: boolean;
  hasMore: boolean;
}
const GitAPIContext = createContext<IClientReturnProps>({} as IClientReturnProps);
export const useClient = () => useContext(GitAPIContext);

function ClientProvider({ children, GitAPIService }: { children: ReactNode; GitAPIService: IGitHubAPIs }) {
  const getIssuePage = GitAPIService.getIssuePage.bind(GitAPIService);
  const getIssueDetailPage = GitAPIService.getIssueDetailPage.bind(GitAPIService);
  const [issueList, setIssueList] = useState<TIssue>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const list = await getIssuePage(page);
      setIssueList((prevList) => [...prevList, ...list]);
      setHasMore(list.length > 0);
      setIsLoading(false);
    })();
  }, [page]);

  const handleLoadList = useCallback(() => {
    setPage((prevPage) => prevPage + 1);
    setIsLoading(true);
  }, []);
  return (
    <GitAPIContext.Provider value={{ issueList, getIssueDetailPage, handleLoadList, hasMore, isLoading }}>
      {children}
    </GitAPIContext.Provider>
  );
}

export default ClientProvider;
