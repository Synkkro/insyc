# InSync Employee Management System (EMS) — Project Plan

**Version:** 1.0 (consolidated from the User Manual & UI Documentation)
**Source manual prepared by:** Rexor V. Chico — September 15, 2026
**Type:** Figma-based web portal prototype
**Roles:** Employee, Department Manager

---

## 1. Overview

InSync EMS is a web-based employee portal prototype that simplifies common employee and department management activities.

- **Employees** can activate their accounts, sign in, manage personal information, view attendance records, access assigned tasks, read announcements, and submit leave requests.
- **Department Managers** can view employees in their department, review attendance, create and assign tasks, monitor task progress, approve or reject leave requests, and post department announcements.

The interface is designed in Figma with a consistent, straightforward experience for both roles.

### 1.1 Objectives

- Provide employees with an account activation and login process.
- Let employees view and update permitted personal information and account credentials.
- Let employees view attendance records and assigned tasks, and complete tasks through submission.
- Provide access to announcements and leave-request status.
- Let Department Managers manage department-level employee, attendance, task, leave, and announcement activities.
- Keep the prototype practical and aligned with the stated system features.

### 1.2 Guiding principle

Role-based access stays clear: Employees see only their own records and tasks; Department Managers see only the employees and records within their assigned department. No higher-level role is introduced.

---

## 2. Scope

### 2.1 In scope

| Role | Feature |
|---|---|
| Employee | Activate account using Employee ID and company email |
| Employee | Log in using credentials sent by email |
| Employee | Change default username and password on first login |
| Employee | View and update personal profile |
| Employee | View attendance records |
| Employee | View assigned tasks and update task status (via submission) |
| Employee | View announcements |
| Employee | Create leave requests and view request status |
| Employee | Change password |
| Department Manager | View employees within their department |
| Department Manager | Review attendance records |
| Department Manager | Create and assign tasks to employees |
| Department Manager | Review task progress |
| Department Manager | Approve or reject employee leave requests |
| Department Manager | Post department announcements |

### 2.2 Out of scope

Unless the project scope is deliberately expanded, the following are **not** required:

- System Manager / HR administration role
- Clock-in / clock-out, biometric or manual attendance entry, attendance correction
- Leave balances / balance tracking
- Task sprints
- Bulk approvals
- Announcement read receipts
- A full notifications screen
- A Settings module

---

## 3. Roles and Permissions

| Role | Scope |
|---|---|
| Employee | Accesses their own profile, attendance records, tasks, announcements, and leave requests. |
| Department Manager | Views employees and attendance within their department; assigns and monitors tasks; processes employee leave requests; posts department announcements. |

**Manager restrictions:** The manager can *view* employee records, not edit them. The manager can *review* task progress, not change it.

---

## 4. Screen Inventory and Navigation

A screen may be a separate mockup, a state of the same screen (success, validation, error), or a detail view.

### 4.1 Employee screens

| Screen | Purpose |
|---|---|
| Account Activation | Verify employee using Employee ID and company email |
| Activation Success / Failure | Confirm activation or explain that it did not succeed |
| Login / Login Failed | Authenticate the employee and show validation feedback |
| Change Default Username & Password | Require new credentials on first login |
| Dashboard | Overview and navigation to employee modules |
| Personal Information | View and update permitted profile information |
| Change Password / Change Password Failed | Change password from Personal Information |
| Attendance / Attendance Filters | Review attendance history and filter records |
| Task List | Find and open assigned tasks |
| Document Task Details | Complete tasks that require file submission |
| Operational Task Details | Complete operational tasks using a checklist and summary |
| Task Submission Successful | Confirm a task submission was received |
| Announcements / Announcement Details | Browse and read relevant announcements |
| Leave Request / Validation / Submitted | Submit a leave request and receive feedback |
| Leave Request List / Status | View each request's status |

### 4.2 Department Manager screens

| Screen | Purpose |
|---|---|
| Dashboard | Overview and shortcuts to manager modules |
| Employees List / Employee Details | Find employees in the department and review their information |
| Employee Attendance | Filter and review department attendance records |
| Tasks | Search, filter, and open tasks; start task creation |
| Create Task | Enter task information and assign it to an employee |
| Task Details / Progress | Review a selected task and its current progress |
| Leave Requests / Leave Request Details | Find requests and approve or reject them |
| Announcements | Find and manage department announcements |
| Create Announcement | Compose, target, draft, or publish an announcement |
| Announcement Details | Review the complete announcement |

### 4.3 Global navigation behavior

- The sidebar contains the role's modules, with a **Log Out** button at the bottom.
- **Log Out** ends the session and returns to the Login screen (no extra screen).
- **Settings** is removed from navigation and the Dashboard.
- **Red badges** on the sidebar **Tasks** and **Leave** items replace a notification screen/icon. A badge clears once the employee opens that page.

---

## 5. Employee Module Specifications

### 5.1 Account activation and login

#### Account Activation
- **Components:** Employee ID field, Company Email field, Activate Account button, Login link, company logo, validation/error feedback.
- **Flow:** Enter Employee ID → enter company email → select Activate Account.
- **Result:** If the details match an eligible employee record, the account is activated and the default username/password are emailed to the registered company email.
- **Note:** Invalid details and an already-activated account show different messages on the same screen; separate pages are not required.

#### Activation Successful
- **Components:** Success message, Proceed to Login button/link, company logo.
- **Result:** Proceed to Login opens the Login screen.

#### Activation Failed
- **Components:** Error message, Employee ID field, Company Email field, Activate Account button.
- **Flow:** Correct the information and resubmit.
- **Result:** The system validates the revised information and shows the appropriate result.

#### Employee Login
- **Components:** Username field, Password field, Login button, Activate Account link.
- **Result:**
  - First login with temporary credentials → **Change Default Username & Password** screen.
  - Returning employee → **Dashboard**.

#### Login Failed
- **Components:** Username field, Password field, error message, Login button.
- **Result:** On success, the employee proceeds to the appropriate screen based on first-login status (same routing as above).

#### Change Default Username & Password
- **Components:** Username field, New Password field, Confirm Password field, Save Changes button.
- **Flow:** Enter preferred username → enter new password → confirm → Save Changes.
- **Result:** New credentials are saved and become the login credentials; the employee is redirected to the **Dashboard**.
- **Validation (inline messages):** missing fields, username already in use, password requirements, mismatched confirmation.

### 5.2 Dashboard and profile

#### Employee Dashboard
- **Components:** Sidebar navigation, attendance overview, task summary, recent announcements, user profile.
- **Navigation:** Personal Information, Attendance, Tasks, Announcements, Leave, and Log Out.
- **Result:** The selected module opens; summaries reflect the corresponding module data.
- **Removed:** Notification icon and Settings.

#### Personal Information
- **Components:** Employee information, contact information, **Update Personal Info** button, **Change Password** button.
- **Fields in the design:** employee name, gender, civil status, email, contact number, address, postal code.
- **Flow:** Review profile → Update Personal Info → save.
- **Result:** Valid changes are stored and displayed.
- **To define:** which fields are editable. Organization-controlled fields (Employee ID, department, position) should be read-only.

#### Change Password / Change Password Failed
- **Opened from:** the Change Password button on Personal Information (not a separate sidebar module).
- **Components:** Current Password, New Password, Confirm Password, Save Changes, Cancel, error message.
- **Result:** On success, the password is updated, the employee stays logged in, and returns to Personal Information.

### 5.3 Attendance

#### Employee Attendance and Filters
- **Components:** Attendance records table, status filter, month filter / sort by month.
- **Flow:** Review history → filter by status and/or month.
- **Result:** The displayed records update according to the selected filters.
- **Constraint:** Strictly **view-only**. Records are already-recorded attendance (e.g., from an ID scanner). No statistics interaction, no clock-in/out, and no working-hours tracking.

### 5.4 Tasks

#### Task List
- **Components:** Task table, search bar, status filter, priority filter, summary cards (if included), View Task button.
- **Flow:** Search → filter by status/priority → View Task.
- **Result:** The task opens in the appropriate Task Details view.

#### Document Task Details
- **Components:** Task description, instructions, attachments, Upload File control, Progress Notes, Submit for Completion button.
- **Flow:** Read instructions → download attachments → upload completed work → add notes → Submit for Completion.
- **Rule:** At least one uploaded file is required before submission (the "Files uploaded" field is required).
- **Result:** The work is submitted and the task is marked **Completed**.

#### Operational Task Details
- **Components:** Task description, checklist, Completion Summary, Submit for Completion button.
- **Flow:** Complete checklist → enter summary → Submit for Completion.
- **Result:** The completion information is submitted and the task is marked **Completed**.

#### Task Submission Successful
- **Components:** Success message, Return to Tasks button.
- **Result:** The employee returns to the Task List.

#### Task status model
- Statuses: **To Do, In Progress, Completed, Overdue**.
- Completed (submitted) is the final status. There are no manager approval, revision, or rejected states.
- The design shows a "Submitted" button state after completing, plus an **Unsubmit** button whose behavior is still to be documented.

### 5.5 Announcements and leave

#### Announcements and Announcement Details
- **List components:** Announcement cards/list, search bar, category filters, details entry.
- **Details components:** Title, department, date, content, Back button.
- **Result:** The employee can read the complete announcement and return to the list.

#### Leave Request
- **Components:** Leave Type dropdown (placeholder "Select leave type"), Start Date, End Date, Resumption Date (Month/Day/Year), Duration (Day/s, calculated), Reason for Leave (500-character counter), Attach supporting document (optional), Submit, Reset.
- **Flow:** Select type → enter the three dates → review calculated duration → enter reason → attach supporting document if available (e.g., medical certificate) → Submit. Reset clears the fields.
- **Result:** The request is recorded and awaits review by the Department Manager.
- **Note:** Leave type values live on the UI screen only; no leave balances.

#### Leave Request Validation
- **Components:** Same fields, error messages beside highlighted fields, Submit, Reset.
- **Rules:**
  - Red-asterisk fields are required.
  - End Date must not be earlier than Start Date.
  - Resumption Date must be after End Date.
  - Reason is limited to 500 characters.
- **Result:** The request proceeds only after validation passes.

#### Leave Request Submitted
- **Components:** Success message, Return button → returns to the Leave page.

#### Leave Request List / Status (required)
- A request history on the Leave page showing each request's dates, leave type, submission date, and status (**Pending, Approved, Rejected**). This satisfies the "view leave request status" feature.

---

## 6. Department Manager Module Specifications

### 6.1 Dashboard and employees

#### Manager Dashboard
- **Components:** Sidebar navigation, attendance card, department overview, employee statistics.
- **Shortcuts:** View Employees, Review Attendance; sidebar to Announcements, Employees, Tasks, Requests.
- **Rule:** Totals and summaries reflect the manager's own department only.

#### Employees List
- **Components:** Employee table, search bar, employee information, View button, employee count.
- **Result:** The list shows department employees; View opens employee details.

#### Employee Details
- **Components:** Employee information, contact information, personal information, job information.
- **Rule:** View-only. The manager cannot edit employee records.

### 6.2 Attendance

#### Employee Attendance
- **Components:** Attendance table, status filter, month filter, attendance records.
- **Flow:** Filter by status and/or month; review whether employees are Present, Absent, or On Leave.
- **Rule:** View-only, department employees only.

### 6.3 Tasks

#### Tasks
- **Components:** Task table, search bar, status filter, priority filter, View Task action, Create Task button.
- **Result:** The selected task opens, or the Create Task page opens.

#### Create Task
- **Components:** Task Title, Task Type, Instructions, Assign To, Priority, Due Date, Attachment (if needed), Create/Assign button.
- **Flow:** Enter task information → select employee → set priority and due date → add attachment if needed → Create/Assign.
- **Result:** The task is created and assigned to the selected employee.
- **Wording:** Use one action label consistently. If it says "Create," note that creating also assigns.

#### Task Details / Progress
- **Components:** Task title, type, instructions, assigned employee, priority, due date, attachment (if applicable), current status/progress, View Task Progress action (if present).
- **Flow:** Open a task → review details and status → open the progress view if provided.
- **Rule:** Review-only. The manager views progress; the status is driven by the employee's submission. This screen documents review behavior, not task entry.

### 6.4 Leave requests

#### Leave Requests
- **Components:** Leave request table, Leave Type filter, Status filter, Sort by, search bar, View button.
- **Result:** View opens Leave Request Details.

#### Leave Request Details
- **Components:** Employee information, leave information, additional information, attachment (if provided), Approve button, Reject button.
- **Flow:** Review type, dates, reason, and any attached document → Approve or Reject.
- **Result:** The request status updates and the employee sees the outcome.
- **To define:** whether a decision can be reversed and whether a reason is required on rejection.

### 6.5 Announcements

#### Announcements
- **Components:** Announcements table, search bar, category filters, status and priority information, New Announcement button.
- **Result:** An announcement can be reviewed, or the Create Announcement page opens.

#### Create Announcement
- **Components:** Title, content, audience/department selection, priority, attachment (if needed), Save as Draft, Publish Announcement.
- **Result:** The announcement is saved as a draft or published.
- **To confirm:** if the audience selector offers company-wide or other departments, whether a Department Manager is allowed to use them.

#### Announcement Details
- **Components:** Title, department, date, content, audience information, attachment (if applicable).
- **Flow:** Read details → review audience → return to Announcements.

---

## 7. Cross-Module Workflows

| Workflow | Employee side | Department Manager side |
|---|---|---|
| Leave | Submits a request and checks its status | Reviews the request and approves or rejects it |
| Tasks | Views assigned tasks and submits work (status moves to Completed) | Creates and assigns tasks; views progress |
| Announcements | Views relevant announcements | Creates and publishes department announcements |
| Attendance | Views personal attendance records | Reviews attendance for department employees |
| Profile | Views and updates permitted personal information | Views employee information within the department |

---

## 8. Business Rules and Decisions

### 8.1 Settled

| Area | Decision |
|---|---|
| First login | Temporary credentials lead to the mandatory username/password change; after saving, redirect to the Dashboard |
| Later logins | Go straight to the Dashboard |
| Log out | Log Out button at the bottom of the sidebar; ends the session and returns to Login |
| Settings | Removed (out of scope) |
| Notifications | No notification screen/icon; red sidebar badges on Tasks and Leave, cleared when the page is opened |
| Change Password | Stays on Personal Information; opens a dedicated screen; user stays logged in afterward |
| Attendance | View-only status records; no time-in/out or working hours |
| Task statuses | To Do, In Progress, Completed, Overdue |
| Task completion | Submission marks the task Completed immediately; no manager approval or revision loop |
| Manager task progress | Manager reviews only; does not edit |
| Document tasks | At least one uploaded file required to submit |
| Leave status | Pending, Approved, Rejected shown in a request list on the Leave page |
| Leave form | Optional supporting document; no leave balance tracking; leave types on the UI only |

### 8.2 Still to resolve

| Area | Open question |
|---|---|
| Password rules | Define basic password validation (length, complexity) and confirmation behavior |
| Activation messages | Exact wording for invalid details vs. already-activated account |
| Profile editing | Which Personal Information fields employees may edit |
| Unsubmit | What the Unsubmit button does and which status the task returns to |
| Leave decisions | Is a rejection reason required? Can a decision be changed? |
| Announcement audience | Can managers publish beyond their own department? |
| Announcement status | Define Draft vs. Published (include archive only if the UI supports it) |

---

## 9. Implementation Plan

### Phase 1 — Foundation
- Project setup, database schema, and seed data (employees, departments, roles, attendance records).
- Authentication: activation, login, session handling, role-based access guards.
- First-login routing and credential change.

### Phase 2 — Employee core
- Dashboard with sidebar, summaries, and Log Out.
- Personal Information and Change Password.
- Attendance view with status and month filters.

### Phase 3 — Tasks
- Task data model with statuses To Do / In Progress / Completed / Overdue.
- Manager: Tasks list, Create Task, Task Details/Progress.
- Employee: Task List, Document and Operational task details, submission and success screen.
- Sidebar Tasks badge.

### Phase 4 — Leave
- Employee: Leave Request form with validation, submission, and Leave Request List/Status.
- Manager: Leave Requests list and details with Approve/Reject.
- Sidebar Leave badge.

### Phase 5 — Announcements
- Manager: list, Create Announcement (draft/publish), details.
- Employee: list, filters, details.

### Phase 6 — Manager views
- Manager Dashboard with department-scoped statistics.
- Employees List/Details and department attendance review.

### Phase 7 — Polish and verification
- Resolve open items in section 8.2.
- Walk through every cross-module workflow end to end with both role accounts.
- Verify department scoping and role restrictions.
- Final documentation (PDF) update.

---

## 10. Acceptance Criteria

- An employee can activate an account, receive credentials by email, log in, and is forced to change credentials on first login.
- A returning employee lands on the Dashboard; failed logins show clear errors.
- An employee can view and update permitted profile fields and change their password.
- Attendance is viewable and filterable by status and month, for the employee (own records) and manager (department records), and cannot be edited.
- A manager can create and assign a task; the employee sees it, submits it, and the manager sees it as Completed.
- An employee can submit a leave request that passes validation, see its Pending status, and see the Approved/Rejected outcome after the manager's decision.
- A manager can publish or draft a department announcement, and relevant employees can read it.
- Managers see only their own department's data; employees see only their own.
- Sidebar badges for Tasks and Leave appear for new items and clear when the page is opened.
- Log Out ends the session and returns to Login.

---

## 11. Scope Note

The documented screens cover the core functions in the InSync EMS system feature list. Any behavior not shown in the interface or defined in the system features is a clarification to resolve, not an implemented capability.
