import { PickType } from "@nestjs/mapped-types";
import {IsString,IsNotEmpty,IsNumber,IsEmail,IsOptional} from "class-validator"
import { DTO_CON } from "src/constants/constants.dto";


export class CreatePostDto {

    @IsString()
    @IsNotEmpty({message:DTO_CON.NOT_INPUT.TITLE})
    readonly title:string;

    @IsString()
    @IsNotEmpty({message:DTO_CON.NOT_INPUT.CONTENT})
    readonly content:string;

    @IsNumber()
    @IsNotEmpty({message:DTO_CON.NOT_INPUT.PASSWORD})
    readonly password:number;                         //readonly과 기존의 변수를 재정의하기 때문에 검증만을 위한 declare클래스로 선언할 수 없다.

}
