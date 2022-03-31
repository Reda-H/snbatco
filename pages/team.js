import { Box, SimpleGrid } from "@chakra-ui/layout";
import React from "react";
import MemberCard from "../components/MemberCard";

function Team() {
  let data = [
    {
      name: "Fouad Herradi",
      role: "Gérant et Ingénieur EMI",
      departement: "Département Génie Civil",
      image: "/randomuser.jpg",
    },
    {
      name: "Salah CHAFOUI",
      role: "Ingénieur Génie Civil",
      departement: "Département Génie Civil",
      image: "/randomuser2.jpg",
    },
    {
      name: "Fouad ELMESKINI",
      role: "Projeteur Technicien Bâtiment",
      departement: "Département Génie Civil",
      image: "/randomuser5.jpg",
    },
    {
      name: "Mounia LAMRAHI",
      role: "Dessinatrice",
      departement: "Département Génie Civil",
      image: "/randomuser3.jpg",
    },
    {
      name: "Oussama BADANI",
      role: "Métreur",
      departement: "Département Génie Civil",
      image: "/randomuser2.jpg",
    },
    {
      name: "Ghizlane HAYANI MOUNIR",
      role: "Ingénieur en Génie Energétique",
      departement: "Département des lots techniques et Energétiques",
      image: "/randomuser4.jpg",
    },
    {
      name: "Anas EL BAHICHI",
      role: "Licencié en Electronique",
      departement: "Département des lots techniques et Energétiques",
      image: "/randomuser5.jpg",
    },
    {
      name: "Soumia ADLI",
      role: "Technicienne en Electricité de Maintenance Industrielle",
      departement: "Département des lots techniques et Energétiques",
      image: "/randomuser3.jpg",
    },
    {
      name: "Nora BENALLA",
      role: "Chargée d’expertises auprès des tribunaux",
      departement: "Département Expertises",
      image: "/randomuser4.jpg",
    },
  ];

  return (
    <Box>
      <SimpleGrid columns={[1, 3]}>
        {data.map((employee) => (
          <MemberCard employee={employee} key={employee.name} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Team;
