import { Injectable } from '@nestjs/common';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';

@Injectable()
export class ExercisesService {
  private exercises = [
    {
      id: 1,
      name: 'Barbell Bench Press',
      description:
        'A compound exercise targeting the chest, performed lying on a flat bench with a barbell.',
      primary_muscle_group: 'chest',
      secondary_muscle_groups: ['triceps', 'shoulders'],
      equipment: 'barbell',
      sets: 4,
      repeats: 8,
    },
  ];

  create(createExerciseDto: CreateExerciseDto) {
    const exercisesByHighestId = [...this.exercises].sort(
      (a, b) => b.id - a.id,
    );
    const newExercise = {
      id: exercisesByHighestId[0].id + 1,
      ...createExerciseDto,
    };
    this.exercises.push(newExercise);
    return newExercise;
  }

  findAll() {
    return this.exercises;
  }

  findOne(id: number) {
    return this.exercises.find((exercise) => exercise.id === id);
  }

  update(id: number, updateExerciseDto: UpdateExerciseDto) {
    this.exercises = this.exercises.map((exercise) => {
      if (exercise.id === id) {
        return { ...exercise, ...updateExerciseDto };
      }
      return exercise;
    });
    return this.findOne(id);
  }

  remove(id: number) {
    const removedExercise = this.findOne(id);
    this.exercises = this.exercises.filter((exercise) => exercise.id !== id);
    return removedExercise;
  }
}
