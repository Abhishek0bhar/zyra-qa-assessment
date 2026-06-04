## Objective

Validate the Student Action Center application through API and UI testing.

Application:
https://zyra-qa-test.onrender.com/

API:
https://zyra-qa-test.onrender.com/api

Valid Students

- stu_001
- stu_002
- stu_003

Invalid Student

- stu_999

---

## Test Coverage

### API

- GET student action center
- PATCH task status
- Error handling
- Response validation

### UI

- Student profile rendering
- Task rendering
- Status updates
- Student switching

---

## Setup

```bash
npm install
```

Run API tests

```bash
npx playwright test tests/api
```

Run UI tests

```bash
npx playwright test tests/ui
```

Run all tests

```bash
npx playwright test
```

Generate report

```bash
npx playwright show-report
```
