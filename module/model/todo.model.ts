export class TodoModel {
    id: number;
    task: string;
    completed: boolean = false;
    checked: boolean = false;
    static count : number = 0;

    constructor(task: string) {
        this.task = task;
        this.id = TodoModel.count;
        TodoModel.count++;
    }
}

