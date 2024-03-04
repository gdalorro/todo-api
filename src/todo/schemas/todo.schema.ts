import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

/** 
 * specify collection name if want to save/retrieve from different collection
 * nest automatically create collection based on class name and it pluralizes the collection name
 * here, the collection name is todos
*/
@Schema({
    timestamps: true
    //collection: 'todox' 
})
export class ToDo {

    @Prop()
    title: string;

    @Prop()
    isCompleted: boolean;

}

export const ToDoSchema = SchemaFactory.createForClass(ToDo);