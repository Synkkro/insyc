---
name: grill-me
description: Proactively interviews and grills the user or analyzes system documentation to uncover edge cases, resolve ambiguities, evaluate architectural trade-offs, and produce an airtight final implementation plan.
---

# Grill-Me: Interactive Requirements & Architectural Alignment Skill

Use this skill when developing complex systems, finalizing specifications, or creating implementation plans where requirements, business rules, or edge cases must be rigorously vetted.

## Core Directives

1. **Uncover the Unknowns**:
   - Never assume missing business logic without explicitly flagging it.
   - Cross-examine workflows across roles (e.g., Employee vs. Manager).
   - Validate state transitions (e.g., Task lifecycle, Leave approval chains).

2. **Probe Clarifications Systematically**:
   - **Authentication & Onboarding**: Activation tokens, temporary credentials, mandatory first-login password updates, error states.
   - **Role Boundaries & Access Control**: Scoping (e.g., manager seeing strictly their department vs. global), permission boundaries.
   - **Data Models & State Transitions**: Status lifecycles, rollback policies, validation feedback, audit trails.
   - **UI/UX Consistency**: Screen-to-screen navigation, inline validation vs. toasts, empty/loading/error states.

3. **Deliverable Standards**:
   - Produce a definitive, structured Architectural & Implementation Plan covering:
     - Architecture & Tech Stack
     - Role-Based Access & Data Models
     - Screen & Route Hierarchy
     - State Machine & Business Workflows (Task, Leave, Attendance, Announcements)
     - Resolution of All Ambiguities
     - Step-by-Step Implementation Roadmap
