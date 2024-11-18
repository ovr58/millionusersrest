import { ConsoleLogger, Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { promises as fsPromises } from 'fs';

@Injectable()
export class LoggerService extends ConsoleLogger {
  async logToFile(entry: string) {
    const formatedEntry = `${Intl.DateTimeFormat('ru-RU', {
      dateStyle: 'short',
      timeStyle: 'short',
      timeZone: 'Europe/Moscow',
    }).format(new Date())}\t${entry}\n`;

    try {
      if (!fs.existsSync(path.join(__dirname, '../../logs'))) {
        await fsPromises.mkdir(path.join(__dirname, '../../logs'));
      }
      await fsPromises.appendFile(
        path.join(__dirname, '../../logs/millionusers.log'),
        formatedEntry,
      );
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }
  log(message: any, context?: string) {
    const entry = `${context}\t${message}`;
    this.logToFile(entry);
    super.log(message, context);
  }

  error(message: any, stackOrContext?: string) {
    const entry = `${stackOrContext}\t${message}`;
    this.logToFile(entry);
    super.error(message, stackOrContext);
  }
}
