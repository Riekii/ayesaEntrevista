import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Demandante, Empleado, User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  public users : User[] = [
    {
        "type": "demandante",
        "personal_data": {
            "nif": "12345678A",
            "name": "juan",
            "first_surname": "pérez",
            "second_surname": "gómez",
            "gender": "m",
            "birth_date": "1980-01-01"
        },
        "address": {
            "street": "calle mayor",
            "number": "10",
            "door": "1a",
            "postal_code": "28001",
            "city": "madrid"
        },
        "studies": [
            {
                "institution_name": "universidad complutense",
                "degree": "ingeniería",
                "date": "2002-06-15"
            },
            {
                "institution_name": "universidad politécnica",
                "degree": "máster en ingeniería",
                "date": "2004-06-15"
            }
        ]
    },
    {
        "type": "empleado",
        "personal_data": {
            "nif": "87654321B",
            "name": "ana",
            "first_surname": "lópez",
            "second_surname": "martínez",
            "gender": "f",
            "birth_date": "1985-02-02"
        },
        "address": {
            "street": "calle nueva",
            "number": "20",
            "door": "2b",
            "postal_code": "08001",
            "city": "barcelona"
        },
        "work_experience": [
            {
                "company_name": "tech solutions",
                "job_position": "desarrollador",
                "date": "2010-01-01"
            },
            {
                "company_name": "innovatech",
                "job_position": "jefe de proyecto",
                "date": "2015-01-01"
            }
        ]
    },
    {
        "type": "demandante",
        "personal_data": {
            "nif": "34567890C",
            "name": "luis",
            "first_surname": "fernández",
            "second_surname": "sánchez",
            "gender": "m",
            "birth_date": "1990-03-03"
        },
        "address": {
            "street": "calle sol",
            "number": "30",
            "door": "3c",
            "postal_code": "41001",
            "city": "sevilla"
        },
        "studies": [
            {
                "institution_name": "universidad de sevilla",
                "degree": "derecho",
                "date": "2012-06-15"
            },
            {
                "institution_name": "escuela de abogacía",
                "degree": "máster en derecho",
                "date": "2014-06-15"
            }
        ]
    },
    {
        "type": "empleado",
        "personal_data": {
            "nif": "23456789D",
            "name": "marta",
            "first_surname": "gómez",
            "second_surname": "ruiz",
            "gender": "f",
            "birth_date": "1992-04-04"
        },
        "address": {
            "street": "calle luna",
            "number": "40",
            "door": "4d",
            "postal_code": "29001",
            "city": "málaga"
        },
        "work_experience": [
            {
                "company_name": "mediclinic",
                "job_position": "médico",
                "date": "2015-01-01"
            },
            {
                "company_name": "salud global",
                "job_position": "jefe de medicina interna",
                "date": "2020-01-01"
            }
        ]
    },
    {
        "type": "demandante",
        "personal_data": {
            "nif": "45678901E",
            "name": "carmen",
            "first_surname": "martínez",
            "second_surname": "lopez",
            "gender": "f",
            "birth_date": "1985-05-05"
        },
        "address": {
            "street": "calle estrella",
            "number": "50",
            "door": "5e",
            "postal_code": "50001",
            "city": "zaragoza"
        },
        "studies": [
            {
                "institution_name": "universidad de zaragoza",
                "degree": "biología",
                "date": "2007-06-15"
            },
            {
                "institution_name": "centro de investigación biológica",
                "degree": "máster en biotecnología",
                "date": "2009-06-15"
            }
        ]
    },
    {
        "type": "empleado",
        "personal_data": {
            "nif": "56789012F",
            "name": "josé",
            "first_surname": "garcía",
            "second_surname": "fernández",
            "gender": "m",
            "birth_date": "1980-06-06"
        },
        "address": {
            "street": "calle viento",
            "number": "60",
            "door": "6f",
            "postal_code": "33001",
            "city": "oviedo"
        },
        "work_experience": [
            {
                "company_name": "auto reparaciones",
                "job_position": "mecánico",
                "date": "2000-01-01"
            },
            {
                "company_name": "talleres rápidos",
                "job_position": "jefe de taller",
                "date": "2005-01-01"
            }
        ]
    },
    {
        "type": "demandante",
        "personal_data": {
            "nif": "67890123G",
            "name": "laura",
            "first_surname": "sánchez",
            "second_surname": "perez",
            "gender": "f",
            "birth_date": "1995-07-07"
        },
        "address": {
            "street": "calle montaña",
            "number": "70",
            "door": "7g",
            "postal_code": "35001",
            "city": "las palmas"
        },
        "studies": [
            {
                "institution_name": "universidad de las palmas",
                "degree": "psicología",
                "date": "2017-06-15"
            },
            {
                "institution_name": "centro de estudios psicológicos",
                "degree": "máster en psicología clínica",
                "date": "2019-06-15"
            }
        ]
    },
    {
        "type": "empleado",
        "personal_data": {
            "nif": "78901234H",
            "name": "marcos",
            "first_surname": "alvarez",
            "second_surname": "dominguez",
            "gender": "m",
            "birth_date": "1988-08-08"
        },
        "address": {
            "street": "calle río",
            "number": "80",
            "door": "8h",
            "postal_code": "24001",
            "city": "león"
        },
        "work_experience": [
            {
                "company_name": "consultoría financiera",
                "job_position": "asesor financiero",
                "date": "2010-01-01"
            },
            {
                "company_name": "finanzas globales",
                "job_position": "director financiero",
                "date": "2015-01-01"
            }
        ]
    },
    {
        "type": "demandante",
        "personal_data": {
            "nif": "89012345I",
            "name": "julia",
            "first_surname": "moreno",
            "second_surname": "vazquez",
            "gender": "f",
            "birth_date": "1992-09-09"
        },
        "address": {
            "street": "calle luna",
            "number": "90",
            "door": "9i",
            "postal_code": "28001",
            "city": "madrid"
        },
        "studies": [
            {
                "institution_name": "universidad autónoma de madrid",
                "degree": "filología",
                "date": "2014-06-15"
            },
            {
                "institution_name": "centro de estudios lingüísticos",
                "degree": "máster en lingüística",
                "date": "2016-06-15"
            }
        ]
    },
    {
        "type": "empleado",
        "personal_data": {
            "nif": "90123456J",
            "name": "sergio",
            "first_surname": "romero",
            "second_surname": "mendez",
            "gender": "m",
            "birth_date": "1986-10-10"
        },
        "address": {
            "street": "calle mar",
            "number": "100",
            "door": "10j",
            "postal_code": "27001",
            "city": "lugo"
        },
        "work_experience": [
            {
                "company_name": "logística gallega",
                "job_position": "coordinador de logística",
                "date": "2012-01-01"
            }
        ]
    }
]

  // NO CONSEGUÍ RECOGER UN JSON EN ASSETS DESDE UNA PETICIÓN GET, ES ALGO QUE NUNCA TUVE QUE HACER Y DABA FALLOS POR TODAS PARTES
  getUsers(){
    return this.http.get("assets/users.json");
  }

  getUsersNoGet(){
    return this.users;
  }

  // LO IDEAL SERIA BUSCAR POR UN ID DE LA BASE DE DATOS, PERO NO ME DA TIEMPO A VOLVER A GENERAR EL JSON
  getOneUser(nif:string){
    return this.users.filter(user => user.personal_data.nif === nif)
  }
}
