
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) { }

  getHello(): string {
    const port = this.configService.get<number>('PORT');
    const databaseUrl = this.configService.get<string>('SUPABASE_URL');
    return `Hello from Backend on port ${port} with database: ${databaseUrl}`;
  }
}