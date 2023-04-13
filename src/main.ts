// nest core
import { NestFactory } from '@nestjs/core';
//swagger
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

//resource app module
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //swagger
  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('test')
    .addTag('users')
    .addTag('auth')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  //port
  await app.listen(3000);
}
bootstrap();
