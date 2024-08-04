import superagent from "superagent";
import Response from "superagent/lib/node/response";
import { myUser, reqUserLink, userLink } from "../const/consts";

describe("User tests", () => {
  const BASE_URL = "https://jsonplaceholder.typicode.com";
  let response: Response;

  it("Получение всех юзеров", async () => {
    response = await superagent.get(`${reqUserLink}`);

    expect(response.body).not.toBeNull();
    expect(response.status).toBe(200);
  });

  it("Получение юзера по id", async () => {
    response = await superagent.get(`${reqUserLink}`).query({ id: 1 });

    response.body.forEach((item: { id: number }) => {
      expect(item.id).toBe(1);
    });
    expect(response.status).toBe(200);
  });

  it("Добавление нового юзера", async () => {
    response = await superagent.post(`${reqUserLink}`).send(myUser);
    expect(response.status).toBe(201);
    expect(response.body.id).toBe(11);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("name");
    expect(response.body).toHaveProperty("username");
    expect(response.body).toHaveProperty("email");
  });

  it("Удаление юзера", async () => {
    response = await superagent.delete(`${userLink}`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({});
  });

  it("Обновление юзера", async () => {
    response = await superagent.put(`${userLink}`).send(myUser);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("name", myUser.name);
    expect(response.body).toHaveProperty("username", myUser.username);
    expect(response.body).toHaveProperty("email", myUser.email);
  });

  it("Ошибка при поиске юзера", async () => {
    try {
      response = await superagent.get(`${reqUserLink}/4004`);
    } catch (err: any) {
      console.log("Something went wrong");
    }
    expect(response.status).toBe(200);
  });
});
