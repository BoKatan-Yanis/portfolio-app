
type routeType = {
    url: string;
    name: string;
  };

type headerType = {
    title: string,
    subtitle?: string,
    description?:string
}
type articleType = {
  title: string
}
export type { routeType, headerType, articleType };