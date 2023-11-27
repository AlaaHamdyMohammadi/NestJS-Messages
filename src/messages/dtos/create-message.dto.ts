import { IsString } from 'class-validator';

// dto = data transfer object
//step1. Create a class that describes the different properties that the req body should have
export class CreateMessageDto{
    //step2. Add validation rules to the class
    @IsString()
    content: string;

    //step3. Apply that class to the request handler
}