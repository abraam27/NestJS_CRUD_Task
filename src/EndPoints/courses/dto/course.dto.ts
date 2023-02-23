import { IsNotEmpty, IsString,Length,IsNumber, Min, Max  } from "class-validator";
export class CourseDto {
    @IsNotEmpty()
    @IsString()
    @Length(2,10)
    name:string;
    
    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    @Max(20)
    duration:number;
}
