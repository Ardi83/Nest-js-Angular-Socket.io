import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AlertGateway } from './alert.gateway';

@Controller('alert')
export class AlertController {
  constructor(private alertGateway: AlertGateway) {}

  @Post()
  @HttpCode(200)
  sendAllertToAll(@Body() dto: { message: string }) {
    this.alertGateway.sendAlert(dto.message)
  }
}
