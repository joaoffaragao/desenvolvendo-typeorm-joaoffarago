import { appDataSource } from "../data-source";
import { User } from "../entities/User.entity";

export class UserService {
  static async createUser({ name, email, age }: IUserCreate): Promise<User> {
    const usersRopository = appDataSource.getRepository(User);
    const newUser = usersRopository.create({
      name,
      email,
      age,
    });
    await usersRopository.save(newUser);

    return newUser;
  }

  static async listUsers() {
    const usersRopository = appDataSource.getRepository(User);
    return await usersRopository.find();
  }

  static async userData(id: string) {
    const usersRopository = appDataSource.getRepository(User);
    return await usersRopository.findOne({
      where: {
        id,
      },
    });
  }
  static async deleteUser(id: string) {
    const usersRopository = appDataSource.getRepository(User);
    return await usersRopository.delete(id);
  }
}

export interface IUserCreate {
  name: string;
  email: string;
  age: number;
}
