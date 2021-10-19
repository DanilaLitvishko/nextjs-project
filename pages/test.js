class EventEmitter{
    constructor(){
        this.events = {};
    }

    subscribe(event, callback){
        !this.events[event] && (this.events[event] = []);
        this.events[event].push(callback);
    }

    unsubscribe(event, callback){
        this.events[event] && (this.events[event] = this.events[event].filter(eventCallback => eventCallback !== callback));
    }

    trigger(event){
        this.events[event] && this.events[event].forEach(callback => callback());
    }
}