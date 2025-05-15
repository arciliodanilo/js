 while (true) {
     let saida = prompt("Se você quiser sai, digite sair ")
     if (saida.toLowerCase() === "sair") {
         break; // Sai do loop quando o usuário digita "sair"
    }
     let idadePai = parseFloat(prompt("Digite a idade do seu pai "));
     let idadeUsuario = parseFloat(prompt("Digite sua idade "));
     alert (idadePai-idadeUsuario);
     alert("Seu pai foi pai ainda joven");
     let idadeMae =parseFloat(prompt("Digite a idade do seu mãe"));
     alert (idadeMae-idadeUsuario);
     alert("Sua mãe foi mãe aindo joven")

      for (i = 0 ; i <= idadeUsuario && idadeUsuario < 18 ; i++) {
      console.log("Na primeira iteração:  "+ i + ", " +idadeUsuario+ " anos")
   }

  }