import { Departement } from './departement.model';

export interface Employe{
    id :number;
	firstName :string;
	lastName :string;
	email :string;
	mobile :number;
	age :number;
	city:string,
    gender :number,
    hireDate :Date,
    isPermanent :boolean,
    departement :Departement
}