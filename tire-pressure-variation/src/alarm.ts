import {Sensor} from "./sensor";

export class Alarm {
    private readonly lowPressureThreshold: number;
    private readonly highPressureThreshold: number;
    private sensor: Sensor;
    private alarmOn: boolean;
    constructor() {
        this.lowPressureThreshold = 17;
        this.highPressureThreshold = 21;
        this.sensor = new Sensor();
        this.alarmOn = false;
    }

    check() {
        const psiPressureValue = this.sensor.popNextPressurePsiValue();

        if (psiPressureValue < this.lowPressureThreshold || this.highPressureThreshold < psiPressureValue) {
            if(!this.alarmOn) {
                this.alarmOn = true;
                console.log("Alarm activated!");
            }
        } else {
            if(this.alarmOn) {
                this.alarmOn = false;
                console.log("Alarm deactivated!");
            }
        }
    }
}