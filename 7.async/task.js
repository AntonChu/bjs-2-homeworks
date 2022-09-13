class AlarmClock{
    constructor(arr = [], id = null){
        this.alarmCollection = arr,
        this.timerId = id;
    }

    addClock(time, callback, id){
        if(!id){
            throw new Error('Heвозможно идентифицировать будильник. Параметр id не передан');
        }

        try{
            if(this.alarmCollection.find(item => item.id === id)) throw 'Будильник с таким id уже существует';
            this.alarmCollection.push({id, time, callback});
            // есди меняю местами 2 верхние строки, то в тестах появляется другая ошибка, что не были созданы звонки  
        }catch(error){
            return console.error(error);
        }
    }

    removeClock(id){
        let filteredAlarmCollection = this.alarmCollection.filter(item => item.id !== id);
        if(filteredAlarmCollection.length === this.alarmCollection.length){
            return false;
        } else{
            this.alarmCollection = filteredAlarmCollection;
            return true;
        }
    }

    getCurrentFormattedTime(){
        const currentDate = new Date();
        let hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
        let minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;
        return `${hours}:${minutes}`;
    };

    start(){
        function checkClock(ring){
            if(this.alarmCollection.find(item => item.time === ring)){
                callback();
            }else{
                setInterval(() => this.alarmCollection.forEach(item => checkClock()), 0);
            }
        }
    }

    stop(){
        if(this.timerId){
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms(){
        // this.alarmCollection.forEach(item => console.log(`Будильник №${item.id} заведен на ${item.time}`));
        this.alarmCollection.forEach(item => console.log('Будильник №' + item.id + ' заведен на ' + item.time));
    }

    clearAlarms(){
        stop();
        this.alarmCollection = [];
    }
}


// *** task #2 ***

let alarm = new AlarmClock();

alarm.addClock('23:30', () => console.log('Пора ложиться спать'), 1);

alarm.addClock('23:31', () => {console.log('Пора ложиться спать прямо сейчас'), alarm.removeClock(2)}, 2);

alarm.addClock('23:31', () => console.log('Иди уже'));

alarm.addClock('23:32', () => {
    console.log('Иди уже'),
    alarm.clearAlarms();
    alarm.printAlarms();
}, 3);

alarm.addClock('23:35', () => console.log('ПОРА!!!'), 1);

alarm.printAlarms();

alarm.start();

