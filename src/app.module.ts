
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { HotelModule } from './hotel/hotel.module';
import { BookingModule } from './booking/booking.module';
import { BookingController } from './booking/booking.controller';
import { BookingService } from './booking/booking.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    // TypeOrmModule connects to the PostgreSQL DB using the credentials provided here.
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: 'hotel_admin',
    //   password: 'admin123',
    //   database: 'hotel_booking_db',
    //   autoLoadEntities: true, // Automatically load entities from the project
    //   synchronize: true, // Automatically synchronize schema, not recommended for production
    // }),
    
    // BookingModule,
  HotelModule,
    BookingModule],
  controllers: [AppController, BookingController],
  providers: [AppService, BookingService],
})
export class AppModule {}
