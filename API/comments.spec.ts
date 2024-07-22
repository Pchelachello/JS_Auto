import superagent from "superagent";
import Response from "superagent/lib/node/response";
import {commentLink, itemName, myComment, reqCommentLink, ResponseProperties} from "../const/consts";

describe("Comments tests", () => {
  let response: Response;

  it("Получение всех комментариев", async () => {
    response = await superagent.get(`${reqCommentLink}`);

    expect(response.body).not.toBeNull();
    expect(response.status).toBe(200);
  });

  it("Получение названия комментария по postId и id", async () => {
    response = await superagent
      .get(`${reqCommentLink}`)
      .query({ postId: 1, id: 1 });

    response.body.forEach((item: { name: String }) => {
      expect(item.name).toBe(itemName);
    });
    expect(response.status).toBe(200);
  });

  it("Добавление нового комментария", async () => {
    response = await superagent.post(`${reqCommentLink}`).send(myComment);
    expect(response.status).toBe(201);
    expect(response.body.id).toBe(501);
    expect(response.body).toHaveProperty(ResponseProperties.ID);
    expect(response.body).toHaveProperty(ResponseProperties.NAME);
    expect(response.body).toHaveProperty(ResponseProperties.EMAIL);
    expect(response.body).toHaveProperty(ResponseProperties.BODY);
    const userId = response.body.id;
    response = await superagent.get(`${reqCommentLink}/${userId}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty(ResponseProperties.ID, myComment.id);
    expect(response.body).toHaveProperty(ResponseProperties.NAME, myComment.name);
    expect(response.body).toHaveProperty(ResponseProperties.EMAIL, myComment.email);
    expect(response.body).toHaveProperty(ResponseProperties.BODY, myComment.body);
  });

  it("Удаление комментария", async () => {
    response = await superagent.delete(`${commentLink}`);
    expect(response.status).toBe(204);
    expect(response.body).toEqual({});
    response = await superagent.get(`${commentLink}`);
    expect(response.status).toBe(404);
  });

  it("Обновление комментария", async () => {
    response = await superagent.put(`${commentLink}`).send(myComment);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty(ResponseProperties.ID, myComment.id);
    expect(response.body).toHaveProperty(ResponseProperties.NAME, myComment.name);
    expect(response.body).toHaveProperty(ResponseProperties.EMAIL, myComment.email);
    expect(response.body).toHaveProperty(ResponseProperties.BODY, myComment.body);
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
