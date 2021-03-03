const animal = () => {
    let tipoAn = prompt(
      "seleccione un tipo de animal \n 1 Carnivoros \n 2 Hervivoros \n 3 Vertebrados \n 4 Invertebrados"
    );
if (tipoAn==="1" || tipoAn==="2" || tipoAn==="3" || tipoAn==="4" ) {
    
    if (tipoAn ==="1") {
        let an = prompt(
            "seleccione un el animal \n 1 Leon \n 2 Tigre \n 3 Hiena \n 4 Puma"
          );
          if (an!=="1"&& an!=="2" && an!=="3" && an!=="4") {
              alert("No eligio ningun animal");
          } else {
              if (an==="1") {
                alert ("El león (Panthera leo) es un mamífero carnívoro de la familia de los félidos y una de las cinco especies del género Panthera. ");
              }
              if (an==="2") {
                alert ("El tigre (Panthera tigris) es una de las especies3​ de la subfamilia de los panterinos (familia Felidae) pertenecientes al género Panthera. ");
              }
              if (an==="3") {
                alert ("Los hiénidos (Hyaenidae), conocidos comúnmente como hienas, son una familia de mamíferos carnívoros pertenecientes al suborden Feliformia ");
              }
              if (an==="4") {
                alert ("El puma, león de montaña o león americano (Nombre científico: Puma concolor)​ es un mamífero carnívoro de la familia Felidae nativo de América. ");
              }
          }
    }

    if (tipoAn ==="2") {
        let an = prompt(
            "seleccione un el animal \n 1 Conejo \n 2 Caballo \n 3 Vaca \n 4 Cebra"
          );
          if (an!=="1"&& an!=="2" && an!=="3" && an!=="4") {
              alert("No eligio ningun animal");
          } else {
              if (an==="1") {
                alert ("El conejo común o conejo europeo (Oryctolagus cuniculus) es una especie de mamífero lagomorfo de la familia Leporidae, y el único miembro actual del género Oryctolagus. ");
              }
              if (an==="2") {
                alert ("El caballo (Equus ferus caballus)1​2​ es un mamífero perisodáctilo domesticado de la familia de los équidos. Es un herbívoro perisodáctilo de gran porte, y cuello largo y arqueado poblado por largas crines. ");
              }
              if (an==="3") {
                alert ("La vaca, en el caso de la hembra; o toro, en el caso del macho (Bos primigenius taurus), es un mamífero artiodáctilo de la familia de los bóvidos. ");
              }
              if (an==="4") {
                alert ("Se conocen como cebra a tres especies del género Equus propias de África  ");
              }
          }
    }

    if (tipoAn ==="3") {
        let an = prompt(
            "seleccione un el animal \n 1 Raya \n 2 Tiburon \n 3 Pez escorpion \n 4 Lamprea"
          );
          if (an!=="1"&& an!=="2" && an!=="3" && an!=="4") {
              alert("No eligio ningun animal");
          } else {
              if (an==="1") {
                alert ("Los rajiformes o rayiformes (Rajiformes) son un orden de peces cartilaginosos del superorden Batoidea; estrechamente emparentados con los tiburones, comparten con ellos la estructura general del esqueleto, el número y tipo de aletas y la morfología de las hendiduras branquiales. ");
              }
              if (an==="2") {
                alert ("Los TIBURONES o selacimorfos (Selachimorpha, del griego σελαχος, selachos, tiburón, y μορφή, morphé, forma) son un superorden de condrictios (peces cartilaginosos) conocidos comúnmente con el nombre de tiburones o escualos. Algunos grandes escualos, como el tiburón blanco y el toro, son conocidos a veces con el nombre de jaquetones. ");
              }
              if (an==="3") {
                alert ("Los escorpiones y rocotes, o escorpenas, son la familia Scorpaenidae de peces incluida en el orden Scorpaeniformes, con especies casi todas marinas y algunas raras de agua dulce, distribuidos por todos los mares de aguas tropicales y templadas, algunos se acomodan bien a vivir en acuario. ");
              }
              if (an==="4") {
                alert ("Los hiperoartios (Hyperoartia o Petromyzonti) son una clase de agnatos (peces sin mandíbulas), conocidos popularmente con el nombre de lampreas. Son semejantes externamente a las anguilas, aunque no están emparentados con ellas; tienen el cuerpo gelatinoso, cilíndrico, sin escamas y muy resbaladizo. A pesar de compartir muchas características con los peces, taxonómicamente no se incluyen en este grupo sino que forman un grupo independiente y muy antiguo, situándose en la base del origen de los vertebrados. Son marinas o de agua dulce. Son ovovivíparas. ");
              }
          }
    }

    if (tipoAn ==="4") {
        let an = prompt(
            "seleccione un el animal \n 1 Caracol \n 2 Gusano \n 3 Medusa \n 4 Estrella de mar"
          );
          if (an!=="1"&& an!=="2" && an!=="3" && an!=="4") {
              alert("No eligio ningun animal");
          } else {
              if (an==="1") {
                alert ("El término caracol es el nombre común de los moluscos gasterópodos provistos de una concha espiral. Hay caracoles marinos (a veces denominados caracolas), dulceacuícolas y terrestres.  ");
              }
              if (an==="2") {
                alert ("La palabra gusano se utiliza coloquialmente para designar los más diversos animales que coinciden en ser pequeños, blandos, de forma alargada y con apéndices locomotores poco destacados o ausentes. ");
              }
              if (an==="3") {
                alert ("Las medusas (Medusozoa), también llamadas aguamalas, malaguas, aguavivas, aguacuajito, aguacuajada, o lágrimas de mar, son animales marinos pertenecientes al filo Cnidaria (más conocidos como celentéreos); son pelágicos, de cuerpo gelatinoso, con forma de campana de la que cuelga un manubrio tubular, con la boca en el extremo inferior, a veces prolongado por largos tentáculos cargados con células urticantes llamados cnidocitos. ");
              }
              if (an==="4") {
                alert ("Los asteroideos (Asteroidea) o estrellas de mar, son una clase del filo Echinodermata (equinodermos) de simetría pentarradial, cuerpo aplanado formado por un disco pentagonal con cinco brazos o más. ");
              }
          }
    }


} else {
    alert("debe ser una opcion ente 1 y 4")
}

};