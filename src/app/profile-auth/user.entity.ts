// Assuming the file is in src/app/profile-auth/user.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usuarios')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nm_usuario: string;

  @Column()
  password: string;
}