import { Task, TaskStatus } from '../task.entity'
import { IsNotEmpty, IsString, MinLength, IsOptional, IsIn } from 'class-validator'

export class CreateTaskDto {
    @IsString() // Decorador para validar que el campo que se reciba en el backend sea string
    @IsNotEmpty()
    @MinLength(3)
    title: string;

    @IsString()
    description: string;
}

export class UpdateTaskDto {
    @IsString()
    @IsOptional() // El campo no es requerido para que el cliente lo envíe.
    title?: string; // ? para especificar que va a ser opcional

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    @IsOptional()
    @IsIn([TaskStatus.DONE, TaskStatus.IN_PROGRESS, TaskStatus.PENDING]) // El valor que se reciba debe ser uno de los del enum
                                                                         // Hace comparación estricta 
    status?: TaskStatus;
}