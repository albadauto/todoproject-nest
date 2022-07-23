import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type TaskDocument = Document & Task

@Schema()
export class Task {
    @Prop()
    name: string;

    @Prop()
    user: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task)