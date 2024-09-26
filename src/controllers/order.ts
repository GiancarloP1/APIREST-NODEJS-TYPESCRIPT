import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { JwtPayload } from "jsonwebtoken";


interface RequestExt extends Request {
  user?: string | JwtPayload;
}


const getItems = (req: RequestExt, res: Response) => {
  try {

    res.send({
      data: "PROTECTED_DATA",
      user:req.user
    });
  } catch (e) {
    handleHttp(res, "ERROR_GET_BLOG");
  }
};



export { getItems };
