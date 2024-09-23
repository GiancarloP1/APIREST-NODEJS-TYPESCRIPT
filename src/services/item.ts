import { Car } from '../interfaces/car.interface';
import ItemModel from "../models/item";

const insertCar = async (item: Car) => {
  const responseInsert = await ItemModel.create(item);
  return responseInsert;
};

const getCars = async () => {
  const responseItems = await ItemModel.find({});
  return responseItems;
};

const getCar = async (id: string) => {
  const responseItems = await ItemModel.findOne({ _id: id });
  return responseItems;
};

const updateCar = async (id: string, data: Car) => {
    const responseItems = await ItemModel.findOneAndUpdate({ _id: id }, data, {new: true});
    return responseItems;
}

const deleteCar = async (id: string) => {
    const responseItems = await ItemModel.findByIdAndDelete({ _id: id });
    return responseItems;
}

export { insertCar, getCars, getCar, updateCar, deleteCar };
