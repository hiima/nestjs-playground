import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @CreateDateColumn({ type: 'timestamp', precision: 0 })
  readonly createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', precision: 0 })
  readonly updatedAt: Date;
}
