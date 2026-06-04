# Bug Report

---

## BUG-001

Title:
Invalid Student Returns Internal Server Error

Severity:
High

Priority:
High

Endpoint:

GET /api/students/stu_999/action-center

Steps:

1. Open endpoint
2. Observe response

Expected:

404 Not Found

```json
{
  "error":"Student not found"
}
```

Actual:

```json
{
  "error":"Internal server error"
}
```

Impact:

Invalid user input causes server exception.

---

## BUG-002

Title:
No User Feedback After Status Update

Severity:
Medium

Priority:
Medium

Steps:

1. Update task status
2. Observe UI

Expected:

Success confirmation

Actual:

No feedback displayed

Impact:

Users may not know update succeeded.

---

## BUG-003

Title:
No Loading Indicator During Data Refresh

Severity:
Low

Priority:
Low

Steps:

1. Switch students

Expected:

Loading indicator

Actual:

No loading feedback

Impact:

Poor user experience.
