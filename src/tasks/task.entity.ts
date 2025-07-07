import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity ()
export  class Task {
    @PrimaryGeneratedColumn()
    id: number;

    
  @Column()
   title: string;

   
  @Column({nullable: true})
  description: String;

  @Column({default: false})
  status: string;

  @CreateDateColumn()
  created_at: Date;
}