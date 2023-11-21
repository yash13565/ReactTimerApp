import React, { useState, useEffect } from 'react';
import CustomButton from '../../Atoms/Button/Buttons';
import Modal from '../Modal/Modal';
import Tasks from '../Tasks/Tasks';
import style from './Timer.module.css'
const Timer = () => {
    const [timerValue, setTimerValue] = useState(0);
    const [timerInterval, setTimerInterval] = useState(null);
    const [timerState, setTimerState] = useState('stopped');
    const [modalOpen, setModalOpen] = useState(false);
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskList, setTaskList] = useState([]);
    const [formattedTime, setFormattedTime] = useState('00:00:00');
    const [editTaskIndex, setEditTaskIndex] = useState(null);
    useEffect(() => {
        updateTimerDisplay();
    }, [timerValue]);

    const updateTimerDisplay = () => {
        const hours = Math.floor(timerValue / 3600);
        const minutes = Math.floor((timerValue % 3600) / 60);
        const seconds = timerValue % 60;
        const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
        setFormattedTime(formattedTime);
    };

    const padZero = (value) => {
        return value < 10 ? `0${value}` : value;
    };

    const startTimer = () => {
        setTimerState('started');
        setTimerInterval(setInterval(() => setTimerValue((prevValue) => prevValue + 1), 1000));
    };

    const pauseTimer = () => {
        setTimerState('paused');
        clearInterval(timerInterval);
    };

    const saveTask = () => {
        setModalOpen(true);
        setTimerState('paused');
        clearInterval(timerInterval);
    };

    const closeModal = () => {
        setModalOpen(false);
        setTaskTitle('')
        setTaskDescription('')
    };
    const addTaskTitle = (e) => {
        setTaskTitle(e.target.value)
    }
    const addTaskDescription = (e) => {
        setTaskDescription(e.target.value)
    }
    const handleSaveTask = () => {
        if (editTaskIndex !== null) {
            const editedTaskList = [...taskList];
            editedTaskList[editTaskIndex] = { ...editedTaskList[editTaskIndex], description: taskDescription };
            setTaskList(editedTaskList);
            closeModal();
            setEditTaskIndex(null);
          } else {
            const newTaskList = [...taskList, { title: taskTitle, description: taskDescription, time: timerValue }];
            setTaskList(newTaskList);
            closeModal();
            resetTimer();
          }
        setTaskTitle('')
        setTaskDescription('')
    };

    const resetTimer = () => {
        clearInterval(timerInterval);
        setTimerValue(0);
        setTimerState('stopped');
        updateTimerDisplay();
    };
    const editTask = (index) => {
        setEditTaskIndex(index);
        setTaskDescription(taskList[index].description);
        setModalOpen(true);
      };
    const handleSaveEditedTask = () => {
        const editedTaskList = [...taskList];
        editedTaskList[editTaskIndex] = { ...editedTaskList[editTaskIndex], description: taskDescription };
        setTaskList(editedTaskList);
        closeModal();
        setEditTaskIndex(null);
      };
    return (
        <>
            <p className={style.mainHeading}>Timer App</p>
            <div className={style.timerBox}>
                <p className={style.timer}>{formattedTime}</p>
                <div className={style.buttonContainer}>
                    <CustomButton onClick={startTimer} disabled={timerState === 'started'} text={'Start'} />
                    <CustomButton onClick={pauseTimer} disabled={timerState !== 'started'} text={'Pause'} />
                    <CustomButton onClick={saveTask} disabled={timerState === 'stopped'} text={'Save'} />
                </div>
            </div>
            {modalOpen && (
                <Modal handleSaveTask={handleSaveTask} closeModal={closeModal} addTaskTitle={addTaskTitle} addTaskDescription={addTaskDescription} taskTitle={taskTitle} taskDescription={taskDescription} handleSaveEditedTask={handleSaveEditedTask} />
            )}
            <Tasks taskList={taskList} padZero={padZero} editTask={editTask}/>
        </>
    );
};

export default Timer;
