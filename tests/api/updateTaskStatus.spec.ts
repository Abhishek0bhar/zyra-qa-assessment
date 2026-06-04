import { test, expect } from "@playwright/test";

const BASE =
  "https://zyra-qa-test.onrender.com/api";

test("Update task status", async ({ request }) => {
  const response = await request.patch(
    `${BASE}/tasks/tsk_001/status`,
    {
      data: {
        status: "completed"
      }
    }
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.status).toBe("completed");
});
