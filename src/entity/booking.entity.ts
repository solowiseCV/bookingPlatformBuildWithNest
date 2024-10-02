import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Hotel } from '../entity/hotel.entity';

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  guestName: string;

  @Column()
  checkInDate: Date;

  @Column()
  checkOutDate: Date;

  @ManyToOne(() => Hotel, (hotel) => hotel.bookings) 
  hotel: Hotel;
}
