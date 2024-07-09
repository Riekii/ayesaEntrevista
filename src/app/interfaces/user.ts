export interface User {
    type: string;
    personal_data: PersonalData;
    address: Address;
    work_experience?: WorkExperience[];
    studies?: Studies[];
}


export interface PersonalData {
    nif: string;
    name: string;
    first_surname: string;
    second_surname?: string;
    gender?: string;
    birth_date?: string;
}

export interface Address {
    street: string;
    number: string;
    door?: string;
    postal_code: string;
    city: string;
}


// CAMPOS SOLO SI ES DEMANDANTE
export interface Studies {
    institution_name: string;
    degree: string;
    date: string;
}
export interface Demandante {
    type: 'demandante';
    personal_data: PersonalData;
    address: Address;
    studies: Studies[];
}


// CAMPOS SOLO SI ES EMPLEADOR
export interface WorkExperience {
    company_name: string;
    job_position: string;
    date: string;
}
export interface Empleado {
    type: 'empleado';
    personal_data: PersonalData;
    address: Address;
    work_experience: WorkExperience[];
}
