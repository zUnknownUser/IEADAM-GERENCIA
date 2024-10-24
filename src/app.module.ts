import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileModule } from './app/profile-auth/profile.module';

/**
 * AppModule is the root module of the application.
 * 
 * It imports and configures the TypeOrmModule with PostgreSQL database connection settings.
 * The connection settings include:
 * - type: 'postgres'
 * - host: 'localhost'
 * - port: 5432
 * - username: 'postgres'
 * - password: 'admin129'
 * - database: 'postgres'
 * - entities: All entity files in the project
 * - synchronize: true (auto-sync database schema)
 * 
 * Additionally, it imports the ProfileModule.
 */
@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'admin129',
        database: 'postgres',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
    }),
    ProfileModule,
  ],
})
export class AppModule {}