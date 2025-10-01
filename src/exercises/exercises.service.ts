import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Exercise, Prisma } from '@prisma/client';

@Injectable()
export class ExercisesService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.ExerciseCreateInput): Promise<Exercise> {
    return this.prisma.exercise.create({
      data,
    });
  }

  findAll() {
    return this.prisma.exercise.findMany();
  }

  findOne(where: Prisma.ExerciseWhereUniqueInput): Promise<Exercise | null> {
    return this.prisma.exercise.findUnique({
      where,
    });
  }

  update(
    where: Prisma.ExerciseWhereUniqueInput,
    data: Prisma.ExerciseUpdateInput,
  ): Promise<Exercise> {
    return this.prisma.exercise.update({
      data,
      where,
    });
  }

  remove(where: Prisma.ExerciseWhereUniqueInput): Promise<Exercise> {
    return this.prisma.exercise.delete({
      where,
    });
  }
}
