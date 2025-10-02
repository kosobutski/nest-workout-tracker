import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma, WorkoutLog } from '@prisma/client';
import { CreateWorkoutLogDto } from './dto/create-workout-log.dto';

@Injectable()
export class WorkoutLogService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateWorkoutLogDto): Promise<WorkoutLog> {
    return await this.prisma.workoutLog.create({
      data,
    });
  }

  async findAll(where?: Prisma.WorkoutLogWhereInput): Promise<WorkoutLog[]> {
    return await this.prisma.workoutLog.findMany({
      where,
    });
  }

  async findOne(where: Prisma.WorkoutLogWhereUniqueInput): Promise<WorkoutLog> {
    const log = await this.prisma.workoutLog.findUnique({
      where,
    });
    if (!log) {
      throw new NotFoundException(`Workout log with id ${where.id} not found`);
    }
    return log;
  }

  async update(
    where: Prisma.WorkoutLogWhereUniqueInput,
    data: Prisma.WorkoutLogUpdateInput,
  ): Promise<WorkoutLog> {
    try {
      return await this.prisma.workoutLog.update({
        data,
        where,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(
            `Workout log with id ${where.id} not found`,
          );
        }
      }
      throw error;
    }
  }

  async remove(where: Prisma.WorkoutLogWhereUniqueInput): Promise<WorkoutLog> {
    try {
      return await this.prisma.workoutLog.delete({
        where,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(
            `Workout log with id ${where.id} not found`,
          );
        }
      }
      throw error;
    }
  }
}
