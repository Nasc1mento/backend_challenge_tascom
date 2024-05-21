export interface ITask {
    title: string;
    status: "ongoing" | "completed",
    priority: number;
    description: string;
    tags: any[];
}