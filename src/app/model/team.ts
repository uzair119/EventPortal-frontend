import { User } from './user';
import { Institution } from './institution';
import { TeamMember } from './teamMember';

export class Team {
  constructor(name){
    this.name = name;
  }
    id: number;
    name: string;
    institution: Institution;
    teamLead: User;
    teamMemberList: TeamMember[];
  }
