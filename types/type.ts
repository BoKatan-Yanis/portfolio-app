
type routeType = {
    url: string;
    name: string;
  };

  
type routeTypeAdmin = {
    url: string;
    title: string;
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