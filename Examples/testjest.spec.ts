import superagent from "superagent";
import Response from "superagent/lib/node/response";

describe("Test", () => {
  const BASE_URL = "https://jsonplaceholder.typicode.com";
  const postLink = `${BASE_URL}/posts`;
  let response: Response;

  it("Получение всех постов", async () => {
    response = await superagent.get(`${postLink}`);

    expect(response.body).not.toBeNull();
    expect(response.status).toBe(200);
  });

  it("Получение поста по userId", async () => {
    response = await superagent.get(`${postLink}`).query({ userId: 1 });

    response.body.forEach((item: { userId: any }) => {
      expect(item.userId).toBe(1);
    });
    expect(response.status).toBe(200);
  });

  it("Добавление нового поста", async () => {
    response = await superagent.post(`${postLink}`).send({
      userId: 999,
      id: 99,
      title: "Test",
      body: "Test",
    });
    expect(response.status).toBe(201);
    expect(response.body.userId).toBe(999);
    console.log(response.body);
  });
});
