
export interface IDatabaseClient {
  $connect(): Promise<void>;
  $disconnect(): Promise<void>;
}

export interface IDatabaseManager {
  getConnection(): any;
  connect(): Promise<void>;
  disconnect(): Promise<void>;
}

abstract class DatabaseManager implements IDatabaseManager {

  static connection: {[key: string]: IDatabaseClient} = {};

  abstract getConnection(): any;
  abstract connect(): Promise<void>;
  abstract disconnect(): Promise<void>;
}
export default DatabaseManager;