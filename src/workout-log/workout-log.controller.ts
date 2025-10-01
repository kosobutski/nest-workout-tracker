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
import { WorkoutLogService } from './workout-log.service';
import { CreateWorkoutLogDto } from './dto/create-workout-log.dto';
import { UpdateWorkoutLogDto } from './dto/update-workout-log.dto';

@Controller('workout-log')
export class WorkoutLogController {
  constructor(private readonly workoutLogService: WorkoutLogService) {}

  @Post()
  async create(@Body(ValidationPipe) createWorkoutLogDto: CreateWorkoutLogDto) {
    return await this.workoutLogService.create(createWorkoutLogDto);
  }

  @Get()
  async findAll() {
    return await this.workoutLogService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.workoutLogService.findOne({ id });
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) updateWorkoutLogDto: UpdateWorkoutLogDto,
  ) {
    return await this.workoutLogService.update({ id }, updateWorkoutLogDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.workoutLogService.remove({ id });
  }
}
