import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: 0 })
  rating: number;

  @Column()
  description: string;

  @Column()
  postedUserId: number;

  // 毎回これを書くのか？
  @CreateDateColumn({ type: 'timestamp', precision: 0 })
  readonly createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', precision: 0 })
  readonly updatedAt: Date;
}
