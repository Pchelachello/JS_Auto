import superagent from "superagent";
import Response from "superagent/lib/node/response";
import { commentLink, myComment, reqCommentLink } from "../const/consts";

describe("Comments tests", () => {
  let response: Response;

  it("Получение всех комментариев", async () => {
    response = await superagent.get(`${reqCommentLink}`);

    expect(response.body).not.toBeNull();
    expect(response.status).toBe(200);
  });

  it("Получение названия комментария по postId и id", async () => {
    response = await superagent.get(`${reqCommentLink}`).query({ postId: 1, id: 1 });

    response.body.forEach((item: { name: String }) => {
      expect(item.name).toBe("id labore ex et quam laborum");
    });
    expect(response.status).toBe(200);
  });

  it("Добавление нового комментария", async () => {
    response = await superagent.post(`${reqCommentLink}`).send(myComment);
    expect(response.status).toBe(201);
    expect(response.body.id).toBe(501);
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
      response = await superagent.get(`${reqCommentLink}/4004`);
    } catch (err: any) {
      console.log("Something went wrong");
    }
    expect(response.status).toBe(200);
  });
});
