import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Tasks {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({
    default: false,
  })
  finished: boolean;

  @CreateDateColumn()
  create_up: Date;

  @UpdateDateColumn()
  update_up: Date;
}
