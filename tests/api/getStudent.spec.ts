import { test, expect } from "@playwright/test";

const BASE =
  "https://zyra-qa-test.onrender.com/api";

test("GET valid student", async ({ request }) => {
  const response = await request.get(
    `${BASE}/students/stu_001/action-center`
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.student.name).toBe("Maya Patel");
});

test("GET invalid student", async ({ request }) => {
  const response = await request.get(
    `${BASE}/students/stu_999/action-center`
  );

  expect(response.status()).not.toBe(200);
});
