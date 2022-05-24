import { useState, useEffect } from "react";
import {firebase} from '../firebase';

const collatedTasks = () => {};
export const useTasks = selectedProject => {
    const {tasks, setTasks} = useState({})
}

useEffect(); {
    let unsubscribe = firebase
    .firestore
    .collection('tasks')
    .where('user_id', '==', '123321')
    unsubscribe = selectedProject && !collatedTasks(selectedProject) ?
    (unsubscribe = unsubscribe.where('project_id', '==', selectedProject))
    : selectedProject === 'Today' 
    ? (unsubscribe=unsubscribe.where('date','==',moment().format('DD/MM/YY')))
    : selectedProject === 'Inbox' || selectedProject === 0 
    ? (unsubscribe = unsubscribe.where('date','==',''))
    : unsubscribe;


};