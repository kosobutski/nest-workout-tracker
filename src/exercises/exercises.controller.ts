import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
  ParseIntPipe,
} from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';

@Controller('exercises')
export class ExercisesController {
  constructor(private readonly exercisesService: ExercisesService) {}

  @Post()
  create(@Body(ValidationPipe) createExerciseDto: CreateExerciseDto) {
    return this.exercisesService.create(createExerciseDto);
  }

  @Get()
  findAll() {
    return this.exercisesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.exercisesService.findOne({ id });
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) updateExerciseDto: UpdateExerciseDto,
  ) {
    return this.exercisesService.update({ id }, updateExerciseDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.exercisesService.remove({ id });
  }
}
