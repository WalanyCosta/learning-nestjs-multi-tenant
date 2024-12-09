import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { TenantInterceptor } from 'src/tenant/tenant.interceptor';
import { RolesGuard } from 'src/auth/roles/roles.guard';
import { Roles } from 'src/auth/roles/roles.decorator';
import { UserRoles } from 'src/auth/users/user-roles';

@UseInterceptors(TenantInterceptor)
@UseGuards(AuthGuard, RolesGuard)
@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Roles(UserRoles.PARTNER)
  @Post()
  create(@Body() createEventDto: CreateEventDto) {
    return this.eventsService.create(createEventDto);
  }

  @Roles(UserRoles.PARTNER)
  @Get()
  findAll() {
    return this.eventsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventsService.update(+id, updateEventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventsService.remove(+id);
  }
}
