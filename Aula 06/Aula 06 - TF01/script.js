/*async function getUserData(){ //
    try{
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        const user = data.results[0];

        console.log("Nome: " + user.name.first + " " + user.name.last);
        console.log("Email: " + user.email);
        console.log("Idade: "+ user.dob.age);
    } catch(error){
        console.error("Erro ao buscar os dados do usuário: ", error);
    }
}

getUserData();
*/

async function fazerRequisicaoAPI(){ //
  try{
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      const user = data.results[0];

      console.log("Nome: " + user.name.first + " " + user.name.last);
      console.log("Email: " + user.email);
      console.log("Idade: "+ user.dob.age);
  } catch(error){
      console.error("Erro ao buscar os dados do usuário: ", error);
  }
}

fazerRequisicaoAPI();



