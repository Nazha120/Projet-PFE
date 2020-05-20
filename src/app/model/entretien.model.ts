import { Candidat } from './candidat.model';
import { Responsable } from './responsable.model';
export class Entretien {

	public id: number;
	public date: Date;
	public heure: string;
	public lieu: string;
	public candidat: Candidat;
	public responsable: Responsable;
}