import React,{useState} from 'react'
import style from './Tasks.module.css'
import CustomButton from '../../Atoms/Button/Buttons';
function Tasks(props) {
    const { taskList, padZero,editTask } = props;
    const formatTime = (time) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    };
    return (
        <div className={style.listContainer}>
            <h2 className={style.heading}>Saved Tasks</h2>
             { taskList.length > 0?<div  className={style.scroll}>
            <ul>
                {taskList.map((task, index) => (
                    <li key={index} className={style.taskList}>
                        <h5 className={style.commonColor}>Title:</h5> <p className={style.commonColor}>{task.title}</p><h5 className={style.commonColor}>Description:</h5> <p className={style.commonColor}> {task.description}</p>
                        <h5 className={style.commonColor}>Time:</h5> <p className={style.commonColor}>{formatTime(task.time)}</p>
                        <CustomButton onClick={() => editTask(index)} text={'Edit'}/>
                    </li>
                ))}
            </ul>
                </div>: <p style={{color:'white'}}> ........No Task Added Yet</p>}
        </div>
    )
}

export default Tasks