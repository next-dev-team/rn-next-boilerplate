declare namespace PostsApi {
  interface PostsType {
    meta: Meta;
    data: Datum[];
  }

  interface Datum {
    id: number;
    user_id: number;
    title: string;
    body: string;
    img: string;
  }

  interface Meta {
    pagination: Pagination;
  }

  interface Pagination {
    total: number;
    pages: number;
    page: number;
    limit: number;
    links: Links;
  }

  interface Links {
    previous?: any;
    current: string;
    next: string;
  }
}
