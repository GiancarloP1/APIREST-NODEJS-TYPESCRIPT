import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { insertCar, getCars, getCar, updateCar, deleteCar } from "../services/item";

const getItem = async ({params}: Request, res: Response) => {
  try {
    const {id} = params;
    const response = await getCar(id);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEM");
  }
};

const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getCars();
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEMS");
  }
};

const updateItem = async({params, body}: Request, res: Response) => {
  try {
    const {id} = params;
    const response = await updateCar(id, body);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_ITEM");
  }
};

const postItem = async ({ body }: Request, res: Response) => {
  try {
    console.log(body); // Verifica el formato de los datos en el body
    if (typeof body.year === "string") {
      body.year = parseInt(body.year, 10); // Convierte year a número si es necesario
    }
    const responseItem = await insertCar(body);
    res.send(responseItem);
  } catch (e: any) {
    console.error(e); // Muestra el error completo en la consola
    handleHttp(res, "ERROR_POST_ITEM", e.message); // o e.stack
  }
};

const deleteItem = async ({params}: Request, res: Response) => {
  try {
    const {id} = params;
    const response = await deleteCar(id);
    const data = response ? response : "Item not found";
    res.send(data);
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_ITEM");
  }
};

export { getItem, getItems, updateItem, postItem, deleteItem };
