# Test Cases

## API Test Cases

### API-001

Verify valid student retrieval

Input:
stu_001

Expected:
200 OK

---

### API-002

Verify valid student retrieval

Input:
stu_002

Expected:
200 OK

---

### API-003

Verify valid student retrieval

Input:
stu_003

Expected:
200 OK

---

### API-004

Verify invalid student handling

Input:
stu_999

Expected:
404 Not Found

---

### API-005

Verify student schema

Expected fields:

- id
- name
- email
- grade
- gpa

---

### API-006

Verify tasks array exists

Expected:
Array returned

---

### API-007

Verify urgency level exists

Expected:
urgencyLevel present

---

### API-008

Verify unread message count

Expected:
Numeric value

---

### API-009

Update task status

Input:
completed

Expected:
200 OK

---

### API-010

Verify updatedAt changes

Expected:
Timestamp updated

---

## UI Test Cases

### UI-001

Student dropdown visible

---

### UI-002

Student profile visible

---

### UI-003

Student name displayed

---

### UI-004

Student email displayed

---

### UI-005

GPA displayed

---

### UI-006

Grade displayed

---

### UI-007

Unread message count displayed

---

### UI-008

Urgency badge displayed

---

### UI-009

Tasks rendered

---

### UI-010

Task priority displayed

---

### UI-011

Status dropdown displayed

---

### UI-012

Change task status

Expected:
UI updates

---

### UI-013

Switch students

Expected:
Profile updates

---

### UI-014

Tasks update after student switch

Expected:
Correct task list

---

### UI-015

Page loads successfully

Expected:
No console errors

---

### UI-016

Task cards display due date

Expected:
Date visible

---

### UI-017

Task cards display priority

Expected:
Priority visible

---

### UI-018

Risk badge displayed

Expected:
Badge visible

---

### UI-019

Urgency badge displayed

Expected:
Badge visible

---

### UI-020

Dropdown values valid

Expected:

- todo
- in progress
- completed
