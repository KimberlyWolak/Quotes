import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

/*
    Class: Quote
    Function: This acts as a template object for the imported data from the database 
    Table Structure In DB: quote_id | quote | character  
*/

@Entity()
export class Quote{
    @PrimaryGeneratedColumn() //key
    quote_id: number;
    
    @Column() //Column 2
    quote: string;
    
    @Column() //Column 3
    character: string;
}