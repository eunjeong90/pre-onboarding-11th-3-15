import { IHttpClient } from './httpClient';
import { IIssueChild, TIssue } from 'Interface/gitHubAPI';

export interface IGitHubAPIs {
  getIssuePage: (page: number) => Promise<any>;
  getIssueDetailPage: (id: number) => Promise<IIssueChild>;
}
export class GitHubAPIs {
  httpClient: IHttpClient;
  owner: string;
  repo: string;
  constructor(httpClient: IHttpClient, owner: string, repo: string) {
    this.httpClient = httpClient;
    this.owner = owner;
    this.repo = repo;
  }
  getIssueURL(): string {
    return getIssueBaseURL.replace('{owner}', this.owner).replace('{repo}', this.repo);
  }
  async getIssuePage(page = 1): Promise<TIssue> {
    return await this.httpClient.get(this.getIssueURL() + `?state=open&sort=comments&per_page=10&page=${page}`);
  }
  async getIssueDetailPage(id: number): Promise<IIssueChild> {
    return await this.httpClient.get(this.getIssueURL() + `/${id}`);
  }
}

const getIssueBaseURL = 'repos/{owner}/{repo}/issues';
