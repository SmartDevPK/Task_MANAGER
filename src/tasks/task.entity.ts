import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('task')  // <-- sets the table name explicitly to "tasks"
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column({ default: 'false' })
  status: string;

  @CreateDateColumn()
  created_at: Date;
}

