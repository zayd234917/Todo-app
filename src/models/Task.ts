export class Task{
    private task_name! : string;
    private task_description! : string;
    private task_duration! : Date;
    
    public get task_n() : string {
        return this.task_name
    }
    public get task_d() : string{
        return this.task_description;
    }
    
    public get task_du() : Date {
        return this.task_duration;
    }
    
    
    constructor(){}
    
}