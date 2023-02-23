import { IsNotEmpty, IsString,Length,IsNumber, Min, Max, IsArray  } from "class-validator";
export class StudentDto {

    @IsNotEmpty()
    @IsString()
    @Length(3,50)
    name:string;
    
    @IsNotEmpty()
    @IsNumber()
    @Min(20)
    @Max(50, {message:" 20<age<50 "})
    age:number;
}
