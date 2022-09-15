class AlarmClock{
    constructor(){
        this.alarmCollection = [],
        this.timerId = null;
    }

    addClock(time, callback, id){
        if(!id){
            throw new Error('Heвозможно идентифицировать будильник. Параметр id не передан');
        }

        if(this.alarmCollection.find(item => item.id === id)){
            console.error('Будильник с таким id уже существует');
        } else{
            this.alarmCollection.push({id, time, callback});
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
        if(this.timerId){
            return;
        }

        const checkClock = (ring) => {
            if(ring.time === this.getCurrentFormattedTime()){
                return ring.callback();
            }
        }

        this.timerId = setInterval(() => {this.alarmCollection.forEach(checkClock)
        }, 60000);
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
        this.stop();
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

