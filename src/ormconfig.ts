import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { TypeOrmNamingStrategy } from './strategies/TypeOrmNamingStrategy';

// You can load you .env file here synchronously using dotenv package (not installed here),
// import * as dotenv from 'dotenv';
// import * as fs from 'fs';
// const environment = process.env.NODE_ENV || 'development';
// const data: any = dotenv.parse(fs.readFileSync(`${environment}.env`));
// You can also make a singleton service that load and expose the .env file content.
// ...

// typeorm-seeding の seeds, factories オプションを設定するために拡張する
interface ICustomConnectionOptions extends PostgresConnectionOptions {
  readonly seeds?: string[];
  readonly factories?: string[];
  readonly cli?: {
    migrationsDir?: string;
    // cli オプションの中身も拡張する
    seedersDir?: string;
    factoriesDir?: string;
  };
}

// Check typeORM documentation for more information.
const config: ICustomConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  // ここと db/docker-compose でポートをベタ書きしていて良くない
  port: 45432,
  username: 'postgres',
  password: '',
  database: 'postgres',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],

  // We are using migrations, synchronize should be set to false.
  synchronize: false,

  // Run migrations automatically,
  // you can disable this if you prefer running migration manually.
  migrationsRun: false,
  logging: true,
  logger: 'file',

  // allow both start:prod and start:dev to use migrations
  // __dirname is either dist or src folder, meaning either
  // the compiled js in prod or the ts in dev
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  seeds: ['/seeders/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migrations',
    seedersDir: 'src/migrations/seeds',
    factoriesDir: 'src/migrations/factories',
  },

  namingStrategy: new TypeOrmNamingStrategy(),
};

export = config;
