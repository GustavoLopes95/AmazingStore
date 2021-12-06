import { PrismaClient } from ".prisma/client";
import DatabaseManager from "./DatabaseManager";


class PrismaDatabaseManager extends DatabaseManager {

  constructor(connectionName:string = 'default') {
    super();
    PrismaDatabaseManager.connection[connectionName] = new PrismaClient();
  }

  // Avoid call it, cause prisma has lazy connection feature
  public getConnection(connectionName: string = 'default'): any {
    return PrismaDatabaseManager.connection[connectionName];
  }

  public async connect(connectionName: string = 'default'): Promise<void> {
    return PrismaDatabaseManager.connection[connectionName].$connect();
  }

  public async disconnect(connectionName: string = 'default'): Promise<void> {
    return PrismaDatabaseManager.connection[connectionName].$disconnect();
  }
}

export default PrismaDatabaseManager;