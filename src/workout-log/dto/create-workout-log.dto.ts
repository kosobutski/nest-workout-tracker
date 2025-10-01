import { Type } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';

export class CreateWorkoutLogDto {
  @IsNumber()
  userId: number;

  @IsNumber()
  exerciseId: number;

  @IsNumber()
  sets: number;

  @IsNumber()
  repeats: number;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Type(() => Number)
  weight?: number;
}
