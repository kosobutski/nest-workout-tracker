import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Exercise, Prisma } from '@prisma/client';

@Injectable()
export class ExercisesService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.ExerciseCreateInput): Promise<Exercise> {
    return await this.prisma.exercise.create({
      data,
    });
  }

  async findAll() {
    return await this.prisma.exercise.findMany();
  }

  async findOne(where: Prisma.ExerciseWhereUniqueInput): Promise<Exercise> {
    const exercise = await this.prisma.exercise.findUnique({
      where,
    });
    if (!exercise) {
      throw new NotFoundException(`Exercise with id ${where.id} not found`);
    }
    return exercise;
  }

  async update(
    where: Prisma.ExerciseWhereUniqueInput,
    data: Prisma.ExerciseUpdateInput,
  ): Promise<Exercise> {
    try {
      return await this.prisma.exercise.update({
        data,
        where,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(`Exercise with id ${where.id} not found`);
        }
      }
      throw error;
    }
  }

  async remove(where: Prisma.ExerciseWhereUniqueInput): Promise<Exercise> {
    try {
      return await this.prisma.exercise.delete({
        where,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(`Exercise with id ${where.id} not found`);
        }
      }
      throw error;
    }
  }
}
