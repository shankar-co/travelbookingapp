import { IHotel } from "hotel.service";

export class Hotel implements IHotel
{
  id: number=0;
  name: string="";
  location: string="";
  address: string="";
  country: string="";
  contactNumber: string="";
  price: number=0;
  star: number=0;
  acNonAc: string="";
  images: string[]=[];
}
const hotels: Hotel[] = [
  
];