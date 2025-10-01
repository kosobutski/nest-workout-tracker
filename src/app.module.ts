import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExercisesModule } from './exercises/exercises.module';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma.service';
import { WorkoutLogModule } from './workout-log/workout-log.module';

@Module({
  imports: [ExercisesModule, UsersModule, WorkoutLogModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
