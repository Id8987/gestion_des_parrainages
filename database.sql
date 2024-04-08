create type t_Administrateur as OBJECT(
    id_admin integer,
    prenom varchar(30),
    nom varchar(30)

);
/

create type t_FichierElectoral as OBJECT(
    id_fichier integer,
    nom_fichier varchar(30),
    chemin_fichier varchar(50),

    MEMBER FUNCTION controllerFIchierELecteur RETURN t_FichierElectoral
);
/
CREATE OR REPLACE type t_Parrainage  AS OBJECT (
	id_parrainage integer,
	date_parrainage date,
) ;
/
CREATE OR REPLACE type t_Periode_parrainage  AS OBJECT (
    date_debut date,
     date_fin date,
) ;
/

Create type t_PersonnelDGE as object{
    public Integer id_personnel
    public String nom 
    public String prénom 
};/
Create type t_PersonnelDGE as object{
    Integer id_personnel integer,
    nom varchar(50),
   prenom varchar(50)
};/

CREATE TYPE t_sexe AS ENUM ('masculin', 'femininin')

CREATE TYPE t_etat_parrainage AS ENUM ('en cours', 'validé')


create or replace type t_Electeur_temporaire as object (
    id_electeur integer,
    nom varchar(30),
    prenom varchar(30),
    cni varchar(30),
    num_electeur varchar(30),
    sexe t_sexe,
    lieu_naissance varchar(25),
    telephone integer,
    date_naiss Date,
    adresse varchar(50),
    num_bureau integer,
    etat_parrainage t_etat_parrainage

);/
