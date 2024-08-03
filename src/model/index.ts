export type Timeline = {
  status: string;
  date: string;
  time: string;
  description?: string;
  title: string;
  avatar?: string;
  name?: string;
};

export interface IParcelDetails {
  id: string | number;
  parcelId: string;
  updatedAt: string;
  senderName: string;
  consigneeName: string;
  originAddress: string;
  destinationAddress: string;
  shippingService: string;
  totalCost: string;
  timeline: Timeline[];
}

export type ErrorMessage = {
  data: {
    message: string;
  };
};
