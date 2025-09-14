import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonController } from './pokemon/pokemon.controller';
import { PokemonService } from './pokemon/pokemon.service';
// ==========================================================================
// Para usar MariaDB, descomente esta linha e comente a linha abaixo
// import { ConfigModule } from '@nestjs/config';
// import { SequelizeModule } from '@nestjs/sequelize';
// import databaseConfig from './config/mariadb.config'; 
// ==========================================================================
@Module({
  imports: [
    // ============================================================
    // Configuração do banco de dados SQL
    // ============================================================
    // Configuração do banco de dados MariaDB, para usar, descomente as
    // linhas abaixo e comente as linhas do arquivo mariadb.config.ts
    //
    // ConfigModule.forRoot({
    //   isGlobal: true,
    //   load: [databaseConfig],
    // }),
    // SequelizeModule.forRootAsync({
    //   useFactory: databaseConfig,
    // }),
    // SequelizeModule.forFeature([/* suas entidades aqui */]),
    // ============================================================
  ],
  controllers: [AppController, PokemonController],
  providers: [AppService, PokemonService],
})
export class AppModule { }
