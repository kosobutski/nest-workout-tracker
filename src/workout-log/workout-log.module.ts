import { Module } from '@nestjs/common';
import { WorkoutLogService } from './workout-log.service';
import { WorkoutLogController } from './workout-log.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [WorkoutLogController],
  providers: [WorkoutLogService, PrismaService],
})
export class WorkoutLogModule {}
