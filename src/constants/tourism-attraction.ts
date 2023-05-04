export interface AttractQuery {
  page: number;
  perPage: number;
  city: string;
  keyword: string;
}
export interface AttractState extends AttractQuery {}
