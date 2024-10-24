import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/**
 * Initializes and starts the NestJS application.
 * 
 * This function performs the following actions:
 * - Creates an instance of the NestJS application using the `AppModule`.
 * - Enables Cross-Origin Resource Sharing (CORS) for the application.
 * - Sets a global prefix for all routes in the application to 'api'.
 * - Listens on a specified port, defaulting to 3000 if not provided in the environment variables.
 * 
 * @returns {Promise<void>} A promise that resolves when the application is successfully started.
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors();
  app.setGlobalPrefix('api');
  
  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  console.log(`API rodando na porta ${port}`);
}
bootstrap();