import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity('recipe')
export class recipe {
  @PrimaryGeneratedColumn() recipe_id?: number;
  @Exclude() @Column() pdf_path: string;
  @Column() popularity: number;
  @Column() views: number;
  @Column() preparation: string;
  @Column() banner_image: string;
  @Column() description: string;
  @Column() read_time: string;
  @Column() average_ranking: number;
  @Column() likes: number;
  @Column() title: string;
  @Column() step: number;
  @Column() persons: number;
  @Column() ingredients: string;
}
