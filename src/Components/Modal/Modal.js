import React from 'react'
import style from './Modal.module.css'
import CustomButton from '../../Atoms/Button/Buttons';
import CustomInput from '../../Atoms/Input/Input';
function Modal(props) {
    const {handleSaveEditedTask,closeModal,taskTitle,taskDescription,addTaskTitle,addTaskDescription,handleSaveTask} = props ;
    return (
        <div className={style.modal}>
            <div className={style.modalContent}>
                <label className={style.label}>Title</label>
                <CustomInput
                    value={taskTitle}
                    onChange={addTaskTitle}
                    placeholder={'Title'}
                />
                <label className={style.label}>Description</label>
                <CustomInput
                    value={taskDescription}
                    onChange={addTaskDescription}
                    placeholder={'Description'}
                />
                <CustomButton onClick={handleSaveTask} text={'Save'}/>
                <CustomButton onClick={closeModal} text={'Cancel'} />
            </div>
        </div>
    )
}

export default Modal