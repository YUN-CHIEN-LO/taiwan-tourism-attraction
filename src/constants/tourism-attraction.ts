export interface AttractQuery {
  page: number;
  perPage: number;
  city: string;
  keyword: string;
}
export interface AttractState extends AttractQuery {}

type Picture = {
  PictureUrl1: string;
  PictureDescription1: string;
};
type Position = {
  PositionLon: number;
  PositionLat: number;
  GeoHash: string;
};

type ParkingPosition = {};

export interface RawAttract {
  ScenicSpotID: string;
  ScenicSpotName: string;
  DescriptionDetail: string;
  Description: string;
  Phone: string;
  Address: string;
  ZipCode: string;
  OpenTime: string;
  Picture: Picture;
  Position: Position;
  ParkingPosition: ParkingPosition;
  SrcUpdateTime: string;
  UpdateTime: string;
  City: string;
  [key: string]: any;
}
export interface Attract {
  id: string;
  url: string;
  alt: string;
  name: string;
  description: string;
  tags: Array<string>;
  city: string;
}
