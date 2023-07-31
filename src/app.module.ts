import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';

// Decorador que agrupa modulos
@Module({
  imports: [TasksModule], // para añadir funcionalidad extra al modulo (e.j. colectar datos de una DB)
  controllers: [], // Tener por aparte un archivo con las rutas del modulo (ruta get/post/delete pueden estar aca)
  providers: [], // Funciones para comunicarse con la base de datos.
})
export class AppModule {}
