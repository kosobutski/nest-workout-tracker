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
  UseGuards,
  Request,
} from '@nestjs/common';
import { WorkoutLogService } from './workout-log.service';
import { CreateWorkoutLogDto } from './dto/create-workout-log.dto';
import { UpdateWorkoutLogDto } from './dto/update-workout-log.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('workout-log')
@UseGuards(JwtAuthGuard)
export class WorkoutLogController {
  constructor(private readonly workoutLogService: WorkoutLogService) {}

  @Post()
  async create(
    @Request() req: { user: { userId: number } },
    @Body(ValidationPipe) createWorkoutLogDto: CreateWorkoutLogDto,
  ) {
    return await this.workoutLogService.create({
      ...createWorkoutLogDto,
      userId: req.user.userId,
    });
  }

  @Get()
  async findAll(@Request() req: { user: { userId: number } }) {
    return this.workoutLogService.findAll({ userId: req.user.userId });
  }

  @Get(':id')
  async findOne(
    @Request() req: { user: { userId: number } },
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.workoutLogService.findOne({
      id,
      userId: req.user.userId,
    });
  }

  @Patch(':id')
  async update(
    @Request() req: { user: { userId: number } },
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) updateWorkoutLogDto: UpdateWorkoutLogDto,
  ) {
    return await this.workoutLogService.update(
      { id, userId: req.user.userId },
      updateWorkoutLogDto,
    );
  }

  @Delete(':id')
  async remove(
    @Request() req: { user: { userId: number } },
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.workoutLogService.remove({ id, userId: req.user.userId });
  }
}
