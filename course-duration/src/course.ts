const { env } = require('node:process');

export class Course {
    private readonly name: string;
    private startTime: number;
    private durationInMinutes: number;

    public constructor(name: string) {
        this.name = name;
        this.durationInMinutes = 0;
    }
    
    public start(): void {
      this.startTime = Date.now();
    }
    
    public end(): void {
        const endTime = Date.now();
        this.durationInMinutes = (endTime - this.startTime) / (1000 * 60);
    }

    public isShort(): boolean {
      const tenMinutes: number = 10 * 60;
      return this.durationInMinutes < tenMinutes;
    }
    
    public isLong(): boolean {
      return !this.isShort();
    }

    public getTitle(): string {
        return `${this.name} course in ${this.getCollege()} college`;
    }

    private getCollege(): string {
        return env.college;
    }
}


