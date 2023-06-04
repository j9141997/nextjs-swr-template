export class SwrError extends Error {
  public url: string;
  public status: number;
  public statusText: string;

  constructor(response: Response) {
    super(response.statusText);
    this.name = "SwrError";
    this.status = response.status;
    this.statusText = response.statusText;
    this.url = response.url;
  }
}
