import { IsArray, IsEnum, IsNumber, IsString } from 'class-validator';
import { MuscleGroup } from '../../common/utils';

export class CreateExerciseDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  @IsEnum(MuscleGroup)
  primary_muscle_group: MuscleGroup;

  @IsArray()
  @IsEnum(MuscleGroup, { each: true })
  secondary_muscle_groups: MuscleGroup[];

  @IsString()
  equipment: string;

  @IsNumber()
  sets: number;

  @IsNumber()
  repeats: number;
}
