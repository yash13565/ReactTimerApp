# React Timer App with Task Management

This is a simple React application that features a timer with start, pause, and save functionality, along with task management.

## Timer Features

### Digital Clock Display

The app displays a digital clock in the format HH:mm:ss, representing a stopwatch.

### Timer Control Buttons

- **Start**: Initiates the timer.
- **Pause**: Pauses the running timer.
- **Save**: Saves the current task along with its title, description, and elapsed time.

### Timer Stages

The timer has three stages:

1. **Started Stage**: Timer is started, only Pause and Save buttons are enabled, and Start button is disabled.

2. **Paused Stage**: Timer is paused, only Save and Start buttons are enabled, and Pause button is disabled.

3. **Save Stage**: Timer task along with task details can be saved.

### Save Task Modal

- When the "Save" button is clicked, a modal opens to save the task.
- Modal contains two fields: Title and Description.
- Modal includes two buttons: Save and Cancel.
- On saving the task, the modal closes, and the task is added to the task list.

## Additional Functionality

### Editing Task Description

- Each saved task in the list has an "Edit" button.
- Clicking on the "Edit" button opens a modal where the user can edit the task description.
- The user can then click "Save" to update the task description.

## STYLING

I have use custom module css for styling purpose.
