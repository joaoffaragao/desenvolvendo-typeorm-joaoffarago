import { Request, Response } from "express";
import { UserService } from "../services/user.service";

export class UserController {
  static async create(req: Request, res: Response) {
    try {
      const { name, email, age } = req.body;

      const newUser = await UserService.createUser({ name, email, age });
      return res.status(201).json(newUser);
    } catch (error) {
      if (error instanceof Error) {
        return res.json({ message: error.message });
      }
    }
  }

  static async read(req: Request, res: Response) {
    try {
      const userList = await UserService.listUsers();
      return res.json(userList);
    } catch (error) {
      if (error instanceof Error) {
        return res.json({ message: error.message });
      }
    }
  }
  static async readOneUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const userList = await UserService.userData(id);
      return res.json(userList);
    } catch (error) {
      if (error instanceof Error) {
        return res.json({ message: error.message });
      }
    }
  }
  static async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await UserService.deleteUser(id);
      return res.status(204).json({});
    } catch (error) {
      if (error instanceof Error) {
        return res.json({ message: error.message });
      }
    }
  }
}
