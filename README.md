# task-manager-api

## Endpoints

### Create a Task
**POST** /api/tasks

**Request Body**:
```json
{
    "title": "Task Title",
    "description": "Task Description",
    "dueDate": "2022-12-31",
    "priority": "High",
    "status": "Pending"
}
