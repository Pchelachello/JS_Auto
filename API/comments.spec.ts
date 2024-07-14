import superagent from "superagent";
import Response from "superagent/lib/node/response";
import { myComment } from "../const/consts";

describe("User tests", () => {
  const BASE_URL = "https://jsonplaceholder.typicode.com";
  const postLink = `${BASE_URL}/comments`;
  const commentLink = `${postLink}/1`;
  let response: Response;

  it("Получение всех комментариев", async () => {
    response = await superagent.get(`${postLink}`);

    expect(response.body).not.toBeNull();
    expect(response.status).toBe(200);
  });

  it("Получение названия комментария по postId и id", async () => {
    response = await superagent.get(`${postLink}`).query({ postId: 1, id: 1 });

    response.body.forEach((item: { name: String }) => {
      expect(item.name).toBe("id labore ex et quam laborum");
    });
    expect(response.status).toBe(200);
  });

  it("Добавление нового комментария", async () => {
    response = await superagent.post(`${postLink}`).send(myComment);
    expect(response.status).toBe(201);
    expect(response.body.id).toBe(501);
    console.log(response.body);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("name");
    expect(response.body).toHaveProperty("email");
    expect(response.body).toHaveProperty("body");
  });

  it("Удаление комментария", async () => {
    response = await superagent.delete(`${commentLink}`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({});
  });

  it("Обновление комментария", async () => {
    response = await superagent.put(`${commentLink}`).send(myComment);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id", myComment.id);
    expect(response.body).toHaveProperty("name", myComment.name);
    expect(response.body).toHaveProperty("email", myComment.email);
    expect(response.body).toHaveProperty("body", myComment.body);
  });

  it("Ошибка при поиске комментария", async () => {
    try {
      response = await superagent.get(`${postLink}/4004`);
    } catch (err: any) {
      console.log("Something went wrong");
    }
    expect(response.status).toBe(200);
  });
});
