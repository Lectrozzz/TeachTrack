import { fetchData } from '../backend/firebase.js';

const fetchStorage = async () => {
    const fetchedArray = await fetchData();
    const activeArray = [...fetchedArray.filter((item) => item.activeStatus)];
    const inactiveArray = [...fetchedArray.filter((item) => !item.activeStatus)];
    sessionStorage.setItem('allDataArray', JSON.stringify(fetchedArray));
    sessionStorage.setItem('activeArray', JSON.stringify(activeArray));
    sessionStorage.setItem('inactiveArray', JSON.stringify(inactiveArray));
}

const getDataArrayStorage = async () => {
    if(sessionStorage.getItem('allDataArray')===null){
        await fetchStorage();
    }
    const fetchedArray = sessionStorage.getItem('allDataArray');
    return JSON.parse(fetchedArray);
}

const getStatusArrayStorage = async () => {
    if(sessionStorage.getItem('activeArray')===null || sessionStorage.getItem('inactiveArray')===null){
        await fetchStorage();
    }
    const fetchedActiveArray = sessionStorage.getItem('activeArray');
    const fetchedInactiveArray = sessionStorage.getItem('inactiveArray');
    return [JSON.parse(fetchedActiveArray), JSON.parse(fetchedInactiveArray)];
}

export { fetchStorage, getDataArrayStorage, getStatusArrayStorage }