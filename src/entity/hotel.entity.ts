import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Booking } from '../entity/booking.entity';

@Entity() // Marks this class as an entity that will be managed by TypeORM
export class Hotel {
  @PrimaryGeneratedColumn() // Automatically generate an ID for each hotel
  id: number;

  @Column() // Marks this property as a column in the database
  name: string;

  @Column()
  location: string;

  @Column()
  pricePerNight: number;

  @OneToMany(() => Booking, (booking) => booking.hotel) // Defines a one-to-many relationship with the Booking entity
  bookings: Booking[];
}
