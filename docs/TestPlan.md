# Test Plan

## Scope

### UI

- Student selection
- Student profile
- GPA display
- Grade display
- Unread messages
- Risk indicators
- Urgency indicators
- Task rendering
- Task status updates

### API

GET /students/:id/action-center

PATCH /tasks/:taskId/status

---

## Out of Scope

- Authentication
- Authorization
- Security Testing
- Accessibility Testing
- Performance Testing

---

## Test Approach

### API Testing

Verify:

- Status codes
- Response schema
- Data accuracy
- Error handling

### UI Testing

Verify:

- Data rendering
- State updates
- Dropdown interactions
- User workflow

---

## Risks

- Data mismatch between UI and API
- Status updates not persisted
- Invalid student handling
- Missing feedback on updates

---

## Assumptions

- Mock data is source of truth
- Students stu_001 to stu_003 are valid
- stu_999 is invalid by design
