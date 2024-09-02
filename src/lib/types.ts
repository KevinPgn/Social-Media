import {z} from 'zod';

export interface UserProps{
    id: string;
    name: string;
    email: string;
    image: string;
    bio: string;
    banner: string;
    anniversary: Date;
    living: string;
    work: string;
    gender: string;
    link: string;
    pseudo: string;
    createdAt: Date;
    updatedAt: Date;
}