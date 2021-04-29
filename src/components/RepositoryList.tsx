import { useState,useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";



import "../styles/repositories.scss";

interface Repository{
    name:string;
    description:string;
    html_url:string
}

// https://api.github.com/orgs/rocketseat/repos

// const repository = {                     // todas as informaçãoes de um repositorio em um unico objeto

//     name:"unform2",
//     descricao:"forms in React",
//     link:"https://github.com/unform/unform"

// }
export function RepositoryList() {

    const [repositorios,setRepositorios]= useState<Repository[]>([])  // como é uma lista vazia se inicia a com o vetor vazio [] para iniciar o estado
   
   useEffect(()=>{
       fetch('https://api.github.com/orgs/rocketseat/repos')
       .then(response=>response.json())
       .then(data=>setRepositorios(data))
   },[])



    return (


        <section className="repository-list">
            <h1>Lista de Repositorios</h1>


            <ul>
                    {repositorios.map(
                        repository=>{
                            return <RepositoryItem key={repository.name} repository={repository} />
                        }
                    )}
                
                
                
            </ul>
        </section>
    );
}