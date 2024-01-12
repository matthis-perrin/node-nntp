declare module "nntp-matthis" {
  export class NNTP {
    public constructor();
    public on(ev: "ready", cb: () => void): void;
    public on(ev: "error", cb: (err: Error) => void): void;
    public on(ev: "close", cb: (hasErr: boolean) => void): void;
    public group(
      grp: string,
      cb: (
        err: Error | undefined,
        count: number,
        first: number,
        last: number
      ) => void
    ): void;
    public headers(
      name: number | string,
      cb: (
        err: Error | undefined,
        num: number,
        id: string,
        headers: Record<string, unknown>
      ) => void
    ): void;
    public end(): void;
    public connect(opts: {
      host: string;
      port: number;
      secure: true;
      user: string;
      password: string;
    }): void;
    public quit(cb: (err: Error | undefined) => void): void;
  }
  export = NNTP;
}
