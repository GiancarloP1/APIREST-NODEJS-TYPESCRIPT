import { Car } from '../interfaces/car.interface';
import ItemModel from "../models/item";



const getOrders = async () => {
  const responseItems = await ItemModel.find({});
  return responseItems;
};


export {getOrders };
